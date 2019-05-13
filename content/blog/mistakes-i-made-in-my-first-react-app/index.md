---
title: Mistakes I Made in My First React App
date: "2019-01-24"
description: I decided to write this article for all the people starting out with new React projects, in hope that it helps them in some way.
---

I decided to write this article for all the people starting out with new React projects, in hope that it helps them in some way.
Why React? Its pretty simple, at this point in my life I was just stepping into the cosmos of Web, and React was the most popular front-end framework.

![1](./react-cosmos.jpg)

The app I built is used for the Elections of the Student Body Government in my College and it took me approximately 2 months to complete it. Link to the GitHub repository: https://github.com/shadxx7/elections-frontend. So let’s begin:

## State Management

If you’ve learned React enough and for that matter any good JS front-end framework, you would know the importance of state management. Good state management is key to a scalable and flexible application.

React allows you to use different state managing libraries, the most popular being Redux and as expected I also used it in this project but let me be clear, **Redux is not always the answer**. Now don’t get me wrong, Redux is great, but _yes the infamous but_ its not meant for all projects. Redux, as it defines itself, is a “Predictable State Container”, which basically means that it enables you to maintain a global state throughout your React app and you can plug this state into any component you wish. All sounding great? The problem comes in when you realize the amount of overhead code you need to write to achieve this. Some would argue that what is the problem? The problem is that sometimes its just not necessary to maintain a global state and this, of course, varies with your use case, but I can’t tell how much time I would have saved if I decided to do things differently.

So conclusion; don’t use Redux? No, its more like before deciding on a state library, its better to assess the needs of the app, study the different libraries like MobX or maybe even use React Context API and then finalize on what you want to use and where.

## Testing

Testing, this single word is able to spring hateful emotions in millions of developers around the world. However you feel, I made the terrible mistake of avoiding it until I finished most of the application. At first, it never seems apparent to write tests for every little UI/function you add in your application, but when you are finalizing your application and need to perform full tests, it is painful to do them manually and also humanly impossible to cover all the different test cases, especially when it comes to UI testing. This is when you realize writing tests alongside writing your components comes in really handy. Currently, to write my tests, I’m using the [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) and I found it great so far. Other libraries also exist, like Airbnb’s [enzyme](https://airbnb.io/enzyme/).

## Class and Functional Components

When starting out in React, everyone usually prefers class components over functional ones. I
initially also used class components everywhere. Then again, it only makes sense to, as React
life-cycle methods are only available to class components (this is assuming Hooks haven’t released),
but the use of functional components is very important. This is because they are just faster in terms
of performance as compared to class components. They can make quite the difference when your pages
get component heavy and additionally they look more cleaner in terms of code, hence increasing code
readability.

## Nitty-gritties

Now with the smaller problems and mistakes;

![2](./react-hold.png)

### a. Trying to render empty functions

This mistake wasted hours of my life. Basically, when you try to render a class function like this:

```jsx
renderFields = () => {
    const currentCommittee = this.props.poll.currentCommittee;
    return <div>{currrentCommittee}</div>;
  };

render {
 return (
        <div>
              {this.renderFields()}
        </div>
      );
}
```

It will return an error if the props haven’t loaded on the first render, meaning that if you are loading props with any kind of delay (for example — from your back-end) the above code, breaks. The quick fix for this is to use the lodash library’s ‘get’ function and make a quick check if the prop has loaded or not, like this:

```jsx
render {
  return (
    <div>{_.get(currentCommittee, "candidates") && this.renderFields()}</div>
)
```

### b. Folder structure and Naming Scheme

It’s necessary to have a good folder structure but wasting too much time on it is unnecessary. Simply deciding on the popular choices and then tweaking it a little according to your needs should do the job. The one I finally followed was:

```txt
/src
  /assets
  /components
  /store
  /style
  /tests
/utils
```

/assets for images, icons etc. /components for all my components, /store for my Redux store and actions, /style for all css files, /tests for all the tests and /utils for some extra utility function files.

I recommend not to put css files in an independent style folder, instead just drop them in their respective component folder.

For naming component files and folders, I initially followed the Snake case (hello_world) naming method owing to the redundant python projects I’ve done. The problem in using this naming scheme in React projects is that it doesn’t sit well with the strict Pascal case (HelloWorld) used in naming React components in JSX. Therefore to avoid further confusion and to satisfy my OCD, I switched back all my component files and folders to Pascal case.

### c. Using Modern React

React is being frequently updated with new features and improvements and this shouldn’t be news as it is currently the most popular JavaScript front-end framework. Although the core React team rarely introduces breaking changes, its imperative to keep up with the newest changes as to have the best performing applications. On just the course of this project, there were over 10 releases of React. At this point in time, what I would call modern React would be the React Context API, React Suspense, React Hooks, React Concurrent etc. Primarily, I felt that I could’ve used the React Context API to replace most of the Redux I’ve used which would have saved a lot of my time.

### d. Should’ve used Typescript? Maybe.

So, at the time of writing this article, I’ve already learnt typescript and I see it’s importance clearly. There isn’t too much I can explain directly from the project, but here’s what I have to say; Typescript definitely helps a lot especially with larger projects. Yes, it does add a little bit of overhead code but writing that extra code is what you’ll prefer over a stream of errors related to types on which you’ll waste hours debugging.

## Wrapping Up

Are these all the mistakes I made? No, of course not, there were many others, but I don’t think they are worth mentioning, mostly because they were either caused by my stupidity or were unavoidable.
