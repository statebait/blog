---
title: GSoC 2019 Phase One
date: "2019-06-26"
description: A little about the phase one of my Google Summer of Code 2019. What I did, where I struggled and how I tackled it.
---

### [Project Info](https://summerofcode.withgoogle.com/projects/#6481219057876992)

**Project:** Web Pipeline For Kinetic (ODE-Based) Models

**Description:** Ordinary differential equations are widely used for modelling biological networks and processes of kinetics. The idea of the project is to create a web application that allows a user to submit an SBML model and select methods of analysis and receive results. The different kind of analysis methods that will be available for use are Steady State Analysis, Parameter Fitting, Simulation.

**Organization:** Computational Biology @ University of Nebraska-Lincoln

**Mentors:** Achilles Rasquinha, Robert Moore

The objectives for my phase one were:

- Create a project boilerplate
- Setup SBML parser API (SBML abbr. for Systems Biology Markup Language)
- Create Canvas and Render Model using ccNetViz
- Decrease memory footprint of Docker Images
- Create a simulation tab with appropriate panels

### [Create a project boilerplate](https://github.com/HelikarLab/ode-app/issues/1)

Tools/Technologies used: [Create React App](https://facebook.github.io/create-react-app/), [ReactJS](https://reactjs.org/), [NodeJS](https://nodejs.org/en/), [ExpressJS](https://expressjs.com/)

The project was to be developed with ReactJS for the frontend and NodeJS for the backend. My mentor had suggested some boilerplates to begin with but honestly, I am not a fan of boilerplate and love to go vanilla and then build upon that. So what did I do, well what anybody would do - used create react app for the React part and copied the code of some other Node (express) project I had done before. And there you go, easy right, well not really, things got complex over time as we needed to integrate python and docker into the project. The project structure completely changed from what it was, to begin with, but all things said beginning with a vanilla-like setup made the process to change easily as the project developed.

The current project structure is:

```
 |- client              -> Contains the code of the react client
    |- src              -> Source files of the react client
        |- components   -> React components
        |- store        -> Redux store
 |- server              -> Contains the code of the node server
    |- routes           -> API routes
    |- controllers      -> API controllers
    |- models           -> Sequelize(SQL) models
    |- config           -> Configuration files for the database
    |- sbmlParser.py    -> Python script to parse a SBML file into a JSON object using libsbml
 |- docker-compose.yml  -> Docker Compose files that runs the application using docker
 |- package.json        -> The main package.json governing the yarn workspaces
 |- README.md           -> The main documentation file. Also this file :)
```

It uses yarn workspaces and docker. 😍

### [Setup a SBML parser API](https://github.com/HelikarLab/ode-app/issues/2)

Tools/Technologies used: [Python](https://www.python.org/), [Python API for libsbml](https://github.com/sbmlteam/python-libsbml), [python-shell](https://github.com/extrabacon/python-shell), [express-formidable](https://github.com/utatti/express-formidable)

For this task, the idea was that the user would upload a SBML file and the application would return him all the information present in the SBML file. For this, we had to research the different SBML parser libraries available and in which language was their API. We finally decided to have to go with the python-libsbml as it was developed by the team which create SBML itself and was actively maintained, had a comprehensive API along with good docs.

Using the python parser entailed a python integration with NodeJS (as the parsing would happen in the backend) and I initially thought this would be troublesome but it turned out to be as easy as importing an npm package and calling its API, namely python-shell.

The code was as simple as:

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

Well, the final thing of concern in this task was to learn how to handle file uploads in Node and well this wasn't as easy as it sounds. There a lot of libraries available out there with unintuitive API and bad docs. With that said I settled for express-formidable (formidable for express).

### [Create Canvas and Render Model using ccNetViz](https://github.com/HelikarLab/ode-app/issues/3)

Tools/Technologies used: [ccNetViz](https://github.com/HelikarLab/ccNetViz), [reactstrap](https://reactstrap.github.io/)

The objective of this task was to create an acceptable visualisation of the SBML model that was parsed by the backend so that the user can understand the model better. Now to understand how the model would be visualised we need to understand what a model constitutes. Each model has multiple reactions. Each reaction is reversible or not and has products and reactants. Each product/reactant is a metabolite. All of this information needed to be adequately be represented by a graph, namely a graph with nodes. It took some time but the Mentors figured out a way and well only the implementation was remaining.

The toughest part of this task was to get ccNetViz work with React. Once I figured that (it was trial and error 😪), getting the logic of how to nodes and edges for the graph were created was also kind of a challenge, mostly because ccNetViz has an API caveat, you need to give references of the nodes when you are defining edges.

As for other detail, I developed a bare minimum interface (with reactstrap) for the app which displayed information of each reaction, metabolite and the model info.

### [Decrease memory footprint of Docker Images](https://github.com/HelikarLab/ode-app/issues/5)

**Proceed only if you know what docker is and how it works**

Tools/Technologies used: [Docker](https://www.docker.com/), [Docker Python libSBML](https://hub.docker.com/r/statebait/python-libsbml), [Docker Official Alpine Image](https://hub.docker.com/_/alpine)

As we used base docker images of all technologies we used the images were large - around 1gb each and having a 3 container system that is a lot of memory and therefore the need to reduce the memory footprint of the Docker Images came up.

Now, if you have the question that, how does one do that? Yea my mind raced through the same question. Mentor, to the rescue; "Use an alpine image". 🙌

"A minimal Docker image based on Alpine Linux with a complete package index and only 5 MB in size!"

Alpine images are great. If you aren't using them you should. Learn't a lot, made my [own base image](https://github.com/shadxx7/docker-python-libsbml) for python-libsbml and got the memory footprint down a lot.

### [Create a simulation tab with appropriate panels](https://github.com/HelikarLab/ode-app/issues/6)

Tools/Technologies used: [Recharts](http://recharts.org/en-US/), [React-Grid-Layout](https://github.com/STRML/react-grid-layout)

The task was to create 4 different panels which contain configuration required for the simulation. The difficult part of this task was actually figuring out a sustainable/scalable state and manipulating it as each panel kind of intercommunicated with each other in the effort to create a viable configuration. To use easy-peasy for global state management was a great choice and helped a lot in this task but more on that in ['Extras'](#Extras).

As for the panels, used react-grid-layout which makes it super easy to create draggable and resizeable layouts.

### Extras

#### Docker

To achieve consistent behaviour across different Operating Systems and to simplify the deployment process, docker was integrated into the project. 3 different containers were used - Server, Client and the database. All of them are launched together using docker-compose.

#### Database

The database used was [PostgreSQL](https://www.postgresql.org/) and the ORM in NodeJS was [Sequelize](http://docs.sequelizejs.com/). The App contains 3 models - Model, Reactions and Metabolites. Honestly, I changed up the models a bunch of times until I was satisfied with the structure and with that said I am sure they ought to change a few times as the application grows. Other than that currently 2 API's integrate the Database with the application; 'save model' and 'load model' API.

#### easy-peasy

Initially, I used [Redux](https://redux.js.org/) for the state management of react app. If you are accustomed to Redux then you would know the boilerplate it entails which started becoming an issue. Just then I came across this new library [easy-peasy](https://easy-peasy.now.sh/). A state management library built on top of Redux which takes away all the boilerplate of Redux and makes state management extremely easy(as the name suggests 😁). It features a hook based API which gave me the incentive to migrate the entire react app to use react hooks(and now all the code looks really clean).

### Final thoughts

Learn't a ton of things in the first phase and can't wait to learn a ton more in the upcoming tasks!

With that said I also started contributing to the ccNetViz library (with 5 PRs merged!) and I must say the entire HelikarLab team is amazing, super supportive, helpful and resourceful.

Finally, I would like to thank my mentors greatly for all their support and if one of you is reading, you must know all of this wouldn't be possible without you 🤩.
