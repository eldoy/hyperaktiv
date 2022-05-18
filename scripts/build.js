#!/usr/bin/env node
const fs = require('fs')
const uglify = require('uglify-js')
const file = fs.readFileSync('./index.js', 'utf8')

let code = '(function(){\n'
let lines = file.split('\n')
for (const line of lines) {
  if(line.startsWith('module.exports')) break
  code += '  ' + line + '\n'
}
code += '  window.observe = observe\n'
code += '  window.computed = computed\n'
code += '  window.dispose = dispose\n'
code += '}());'

console.log(code)

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist')
}

fs.writeFileSync('./dist/hyperaktiv.js', code)

const result = uglify.minify(code)
fs.writeFileSync('./dist/hyperaktiv-min.js', result.code)
