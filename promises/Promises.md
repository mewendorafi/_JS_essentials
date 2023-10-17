# Asynchronous JavaScript

## Introduction

#### Object Oriented Programming (OOB)

JavaScript is primarily an object-oriented language, and nearly everything in JavaScript is an object, including functions. Objects can have properties (variables) and methods (functions).

#### Prototypes

In JavaScript, the prototype is a fundamental concept that underlies the object-oriented nature of the language. Understanding prototypes is crucial for working with objects and inheritance in JavaScript. Let's break down the principle of prototypes:

Each JavaScript object has an associated prototype. The prototype is a reference to another object.
When you access a property or method on an object, JavaScript looks for that property or method on the object itself.
If it doesn't find it, it continues searching in the object's prototype, and so on, forming a prototype chain.

The prototype chain ultimately leads to the `Object.prototype`, which is the root of the prototype chain for all JavaScript objects.

You can access an object's prototype using the `proto` property or, in modern JavaScript, using the `Object.getPrototypeOf()` method.

#### Inheritance

Prototypes also enable a form of inheritance in JavaScript.
You can create a new constructor function that inherits properties and methods from another constructor function's prototype.
This is done by setting the prototype property of the new constructor to an instance of the parent constructor.

## Promises

A Promise acts as a proxy for a value that is not yet known, but is scheduled to be in the future. It can be in one of these states:

`pending` — initial state, neither fulfilled nor rejected — <br>
`fulfilled` — meaning that the operation was completed successfully — <br>
`rejected` — meaning that the operation failed —

The eventual state of a pending promise can either be fulfilled with a `value` or rejected with a reason (`Error`).

The term `resolved` used with promises, means that the promise is `settled` or "locked-in", to match the eventual state of another promise, and further resolving or rejecting it, has no effect.

#### `Promise.prototype.then()`

This method of `Promise` instances takes up to two arguments:
both must be callback functions for the fulfilled and rejected cases of the `Promise`.<br>
It immediately returns an equivalent `Promise` object, allowing you to chain calls to other promise methods.

#### `Promise.prototype.catch()`

This method of `Promise` instances schedules a function to be called when the promise is rejected.<br>
It immediately returns an equivalent `Promise` object, allowing you to chain calls to other promise methods.

#### `Promise.prototype.finally()`

This method of `Promise` instances schedules a function to be called when the promise is settled (either fulfilled or rejected).<br>
It immediately returns an equivalent `Promise` object, allowing you to chain calls to other promise methods.<br>
This lets you avoid duplicating code in both the promise's `then()` and `catch()` handlers.

#### `Promise.resolve()`

This method "resolves" a given value to a `Promise` object.<br>
If the value is a promise, that promise is returned.<br>
If the value is a thenable, `Promise.resolve()` will call the `then()` method with two callbacks it prepared.<br>
Otherwise, the returned promise will be fulfilled with the value.<br>
This function flattens nested layers of promise-like objects, (e.g. a promise that fulfills to a promise that fulfills to something) into a single layer (a promise that fulfills to a non-thenable value).

#### `Promise.reject()`

This method returns a `Promise` object that is rejected with a given reason (`Error`).

#### `Promise.allSettled()`

This method takes an iterable of promises as input and returns a single `Promise`, which fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.<br>

    [{ status: <fulfilled | rejected>, value: <output data> }, {...}]

#### `Promise.all()`

This method takes an iterable of promises as input and returns a single `Promise`, which fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values.<br>
It rejects when any of the input's promises rejects, with this first rejection reason.

#### `Promise.any()`

This method takes an iterable of promises as input and returns a single `Promise`, which fulfills when any of the input's promises fulfills, with this first fulfillment value.<br>
It rejects when all of the input's promises reject (including when an empty iterable is passed), with an `AggregateError` containing an array of rejection reasons.

#### `Promise.race()`

This method takes an iterable of promises as input and returns a single `Promise`.<br>
This returned promise settles with the eventual state of the first promise that settles.
