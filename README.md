# Hyperactiv

Reactive data structures based on proxies.

This is a fork of the [hyperactiv](https://github.com/elbywan/hyperactiv) reactive library.

### Install

```
npm i hyperaktiv
```

### Usage

**Observe**
```js
/**
 * @typedef {Object} Options - Observe options.
 * @property {string[]} [prop] - Observe only the properties listed.
 * @property {string[]} [ignore] - Ignore the properties listed.
 * @property {boolean | number} [batch] -
 *  Batch computed properties calls, wrapping them in a setTimeout and
 *  executing them in a new context and preventing excessive calls.
 *  If batch is an integer greater than zero, the calls will be debounced by the value in milliseconds.
 * @prop {number} [deep] - Recursively observe nested objects and when setting new properties.
 * @prop {number} [bind] - Automatically bind methods to the observed object.
 */

/**
 * Observes an object or an array and returns a proxified version which reacts on mutations.
 *
 * @template O
 * @param {O} obj - The object to observe.
 * @param {Options} options - Options
 * @returns {O} - A proxy wrapping the object.
 */
```

**Computed**
```js
/**
 * @typedef {Object} ComputedArguments - Computed Arguments.
 * @property {(fun: () => void) => void} computeAsync -
 * Will monitor the dependencies of the function passed as an argument. Useful when dealing with asynchronous computations.
 */

/**
 * @typedef {Object} Options - Computed Options.
 * @property {boolean} [autoRun] -
 * If false, will not run the function argument when calling computed(function).
 * The computed function must be called **at least once** to calculate its dependencies.
 * @property {() => void} [callback] -
 * Specify a callback that will be re-runned each time a dependency changes instead of the computed function.
 */

/**
 * Wraps a function and captures observed properties which are accessed during the function execution.
 * When those properties are mutated, the function is called to reflect the changes.
 *
 * @param {(args: ComputedArguments) => void} wrappedFunction
 * @param {Options} options
 */
```

**Dispose**
```js
/**
* Will remove the computed function from the reactive Maps (the next time an bound observer property is called) allowing garbage collection.
*
* @param {Function} computedFunction
*/
```


MIT licensed. Enjoy!
