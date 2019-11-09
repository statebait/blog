---
title: GSoC 2019 Documented
date: "2019-11-09"
description: A detailed summary of my Google Summer of Code 2019 project. What I did, where I struggled and how I tackled it.
---

## [Project Info](https://summerofcode.withgoogle.com/projects/#6481219057876992)

**Project:** Web Pipeline For Kinetic (ODE-Based) Models

**Description:** Ordinary differential equations are widely used for modelling biological networks and processes of kinetics. The idea of the project is to create a web application that allows a user to submit an SBML model and select methods of analysis and receive results. The different kind of analysis methods that will be available for use are Steady State Analysis, Parameter Fitting, Simulation.

**Organization:** Computational Biology @ University of Nebraska-Lincoln

**Mentors:** Achilles Rasquinha, Robert Moore

## Phase 1

The objectives for my phase one were:

- Create a project boilerplate
- Setup SBML parser API (SBML abbr. for Systems Biology Markup Language)
- Create Canvas and Render Model using ccNetViz
- Decrease memory footprint of Docker Images
- Create a simulation tab with appropriate panels

### [Create a project boilerplate](https://github.com/HelikarLab/ode-app/issues/1)

Tools/Technologies used: [Create React App](https://facebook.github.io/create-react-app/), [ReactJS](https://reactjs.org/), [NodeJS](https://nodejs.org/en/), [ExpressJS](https://expressjs.com/)

The project was to be developed with ReactJS for the frontend and NodeJS for the backend. My mentor had suggested some boilerplates to begin with but honestly, I am not a fan of boilerplate and love to go vanilla and then build upon that. So what did I do, well what anybody would do - used create react app for the React part and copied the code of some other Node (express) project I had done before. And there you go, easy right, well not really, things got complex over time as we needed to integrate python and docker into the project.

### [Setup a SBML parser API](https://github.com/HelikarLab/ode-app/issues/2)

Tools/Technologies used: [Python](https://www.python.org/), [Python API for libsbml](https://github.com/sbmlteam/python-libsbml), [python-shell](https://github.com/extrabacon/python-shell), [express-formidable](https://github.com/utatti/express-formidable)

For this task, the idea was that the user would upload a SBML file and the application would return all the information present in the SBML file. For this, we had to research the different SBML parser libraries available and in which language was their API written. We finally decided to go with python-libsbml as it was developed by the team which developed SBML itself and was actively maintained, had a comprehensive API along with good docs.

Using the python parser entailed a python integration with NodeJS (as the parsing would happen in the backend) and I initially thought this would be troublesome but it turned out to be as easy as importing an npm package and calling its API, namely python-shell.

The code for the above:

```jsx
PythonShell.run("sbmlParser.py", options, function(err, data) {
  if (err) {
    console.error(err)
    res.status(500).send("Something went wrong.")
  } else {
    fs.unlinkSync("./uploads/" + file.name)
    res.status(200).send(data)
  }
})
```

### [Create Canvas and Render Model using ccNetViz](https://github.com/HelikarLab/ode-app/issues/3)

Tools/Technologies used: [ccNetViz](https://github.com/HelikarLab/ccNetViz), [reactstrap](https://reactstrap.github.io/)

The objective of this task was to create an acceptable visualisation of the SBML model that was parsed by the backend so that the user can understand the model better. Now to understand how the model would be visualised we need to understand what constitutes a model. Each model has multiple reactions. Each reaction is reversible or irreversible and has products and reactants. Each product/reactant is a specie. All of this information needed to be adequately represented by a graph. It took some time but the Mentors figured out a way and well only the implementation was remaining.

The toughest part of this task was to get ccNetViz work with React. Once I figured that (it was trial and error 😪), figuring out the logic of how to create the nodes and edges for the graph was also kind of a challenge, mostly because ccNetViz has an API caveat, i.e. you need to give references of the nodes when you are defining edges.

As for other details, I developed a bare minimum interface (with reactstrap) for the app which displayed information of each reaction, specie and the model info.

### [Decrease memory footprint of Docker Images](https://github.com/HelikarLab/ode-app/issues/5)

**Proceed only if you know what docker is and how it works**

Tools/Technologies used: [Docker](https://www.docker.com/), [Docker Python libSBML](https://hub.docker.com/r/statebait/python-libsbml), [Docker Official Alpine Image](https://hub.docker.com/_/alpine)

All the docker images we used were around 1gb each and having a 3 container system (which later became to 2) that is a lot of memory and therefore the need to reduce the memory footprint of the Docker Images came up.

Now, if you have the question that, how does one do that? Yeah, my mind raced through the same question. Mentor, to the rescue; "Use an alpine image". 🙌

"A minimal Docker image based on Alpine Linux with a complete package index and only 5 MB in size!"

Alpine images are great. If you aren't using them you should. I made my own [base image](https://github.com/shadxx7/docker-python-libsbml) for python-libsbml and got the memory footprint down a lot.

### [Create a simulation tab with appropriate panels](https://github.com/HelikarLab/ode-app/issues/6)

Tools/Technologies used: [React-Grid-Layout](https://github.com/STRML/react-grid-layout)

For this task, I was to create 4 different panels which contain configuration required for the simulation. The difficult part of this task was figuring out a sustainable/scalable state and manipulating it as each panel intercommunicated with each other in the effort to create a viable configuration. To use easy-peasy for global state management was a great choice and helped a lot in this task but more on that in ['Extras'](#Extras).

As for the panels, used react-grid-layout which makes it super easy to create draggable and resizeable layouts.

## Phase 2

As most of the basis of the project was laid down, now all of the logic for the kinetic laws was to be implemented. This phase involved a deep dive into biochemistry, understanding the bio models we were dealing with and the kind of kinetic laws that exist and how they work.

### Choosing a simulation library

I had to finalize which library I was going to use to form the system of differential equations and solve them to receive the concentration values. This honestly took a lot of time as there were many libraries which did this with each having some trade-off. We finally decided to go with [stimator](https://pypi.org/project/stimator/) because of the simple API it provided.

Example of the API it provided:

```python
from stimator import read_model

model_description = """
title A two-reaction chemical system
r1: A -> B, rate = k1 * A
r2: B -> C, rate = k2 * B - k3 * C
k1 = 0.1
k2 = 2
k3 = 1
init: (A = 1)
"""

m = read_model(model_description)
```

The only problem with this library was...well it didn't work out of the box. What I did was that I downloaded the source files, found the bug that was causing it not to work, fixed it, repackaged the source files into a wheel file and now I ship the custom fixed library in the app itself. If you need to learn how to package your wheel file to install using pip see [this](https://dzone.com/articles/executable-package-pip-install).

### Building the plot panel

Tools/Technologies used: [Apex Charts](https://apexcharts.com/)

The plot that displayed the simulation which was a timeline of the change in concentration values of the species taking part in the simulation needed to have a configurable API because the species could be toggled in/out of the plot. Apex Charts provided the perfect API for the same.

![Demo](https://camo.githubusercontent.com/ed2ce7255c9fd70c83759d0c721baa595a8bc6e2/68747470733a2f2f692e696d6775722e636f6d2f4c4c31634854362e676966)

### Kinetic Laws

The simulations performed are basically applying a particular Kinetic Law to a reaction and devising a rate for the reaction.

There are 3 Kinetic Laws currently available to use in the application:

- Law of Mass Action
- Michaelis-Menten Kinetics
- Hill Kinetics

Other than this you can define your own Custom Rate in the application.

You can learn more in the [wiki.](https://github.com/HelikarLab/ode-app/wiki/Kinetic-Laws)

## Phase 3

Phase 3 was mostly refactoring the code, commenting, documentation and finally testing.

### Refactoring, Commenting and Documentation

Tools/Technologies used: [prop-types](https://www.npmjs.com/package/prop-types)

Refactoring involved visiting all files and cleaning up unnecessary code, breaking down bigger components into smaller ones and finally adding Prop-Types to each component for better runtime assertions and to increase code readability. Further, writing comments on any function which did not straight out make sense was done to increase code readability. Finally, the documentation involved writing development related instructions in the [README](https://github.com/HelikarLab/ode-app/blob/develop/README.md) and all docs related to usage, application architecture, kinetic laws and references were written in the [GitHub repository wiki](https://github.com/HelikarLab/ode-app/wiki).

### Testing

Tools/Technologies used: [cypress](https://www.cypress.io/)

For testing, we used cypress, a E2E testing framework. Cypress is hands down amazing 🤩. The kind of automation you can achieve with this framework is phenomenal. Its API relatively easy and the features it provides complements how one should test application. Further, it helps you write code which is easier to test and also helps you keep test cases in mind while coding. Tests are simple, for eg:

```jsx
it("Reactions populated", () => {
  cy.get('[data-test="reactions-table"]')
    .find("tbody")
    .find("tr")
})
```

The above code gets the reaction table and checks if the reactions were properly loading into the model.

## Extras

#### Docker

To achieve consistent behaviour across different Operating Systems and to simplify the deployment process, docker was integrated into the project. 3 different containers were used - Server, Client and the database. All of them are launched together using docker-compose.

#### Database

The database used was [PostgreSQL](https://www.postgresql.org/) and the ORM in NodeJS was [Sequelize](http://docs.sequelizejs.com/). The App contains 3 models - Model, Reactions and Species. Honestly, I changed the models a bunch of times until I was satisfied with the structure and with that said I am sure they ought to change a few times as the application grows. Other than that currently 2 API's integrate the Database with the application; 'save model' and 'load model' API.

#### easy-peasy

Initially, I used [Redux](https://redux.js.org/) for the state management of the react app. If you are accustomed to Redux then you would know the boilerplate it entails which started becoming an issue. Just then I came across this new library [easy-peasy](https://easy-peasy.now.sh/). A state management library built on top of Redux which takes away all the boilerplate of Redux and makes state management extremely easy(as the name suggests 😁). It features a hook based API which gave me the incentive to migrate the entire react app to use react hooks(and now all the code looks really clean).

## Final thoughts

Learned a ton of things during my Google Summer of Code 2019 and it is a must-do if you are a student and want to pursue software engineering.

With that said I also started contributing to the ccNetViz library (with over 5 PRs merged!) and I must say the entire HelikarLab team is amazing, super supportive, helpful and resourceful.

Finally, I would like to thank my mentors greatly for all their support.
