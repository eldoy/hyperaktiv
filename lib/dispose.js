const data = require('./data.js')

/**
 * Will remove the computed function from the reactive Maps (the next time an bound observer property is called) allowing garbage collection.
 *
 * @param {Function} computedFunction
 */
module.exports = function dispose(computedFunction) {
  data.computedDependenciesTracker.delete(computedFunction)
  return computedFunction.__disposed = true
}
