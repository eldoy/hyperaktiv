const data = require('./lib/data.js')
const observe = require('./lib/observe.js')
const computed = require('./lib/computed.js')



function dispose(computedFunction) {
  data.computedDependenciesTracker.delete(computedFunction)
  return computedFunction.__disposed = true
}


module.exports = {
  observe,
  computed,
  dispose
}
