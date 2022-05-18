const data = require('./data.js')

module.exports = function dispose(computedFunction) {
  data.computedDependenciesTracker.delete(computedFunction)
  return computedFunction.__disposed = true
}
