const BIND_IGNORED = [
  'String',
  'Number',
  'Object',
  'Array',
  'Boolean',
  'Date'
]

function isObj(object) {
  return object && typeof object === 'object'
}

function setHiddenKey(object, key, value) {
  Object.defineProperty(object, key, {
    value,
    enumerable: false,
    configurable: true
  })
}

function defineBubblingProperties(object, key, parent) {
  setHiddenKey(object, '__key', key)
  setHiddenKey(object, '__parent', parent)
}

function getInstanceMethodKeys(object) {
  return (
    Object
    .getOwnPropertyNames(object)
    .concat(
      Object.getPrototypeOf(object) &&
      BIND_IGNORED.indexOf(Object.getPrototypeOf(object).constructor.name) < 0 ?
      Object.getOwnPropertyNames(Object.getPrototypeOf(object)) : []
    )
    .filter(prop => prop !== 'constructor' && typeof object[prop] === 'function')
  )
}

module.exports = {
  isObj,
  setHiddenKey,
  defineBubblingProperties,
  getInstanceMethodKeys
}