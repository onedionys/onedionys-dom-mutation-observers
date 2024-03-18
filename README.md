<h1 align="center">Welcome to One Dionys - DOM Mutation Observers! 👋 </h1>

<p align="center">Functions to observe changes in the DOM and respond dynamically, useful for features such as lazy loading or real-time data delivery. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-dom-mutation-observers?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-dom-mutation-observers?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-dom-mutation-observers?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-dom-mutation-observers?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-dom-mutation-observers.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-dom-mutation-observers?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-dom-mutation-observers?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const initMutationObservers = require('domMutationObservers');

// Define the callback function
const observerCallback = function(mutationsList, observer) {
    mutationsList.forEach(function(mutation) {
        console.log(mutation.type);
    });
};

// Define options for MutationObserver
const observerOptions = {
    childList: true,
    subtree: true
};

// Initialize MutationObservers
const observer = initMutationObservers(observerCallback, observerOptions);
```

#### Explanation

* This package provides a function to initialize DOM Mutation Observers. It allows you to observe mutations to the DOM and execute a callback function when mutations occur.

#### Return Value

* The function returns a MutationObserver instance that is actively observing mutations in the DOM.

## 📆 Release Date

* v1.0.0 : 17 March 2024
* v1.0.1 : 18 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - DOM Mutation Observers is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - DOM Mutation Observers? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
