let timeout = null
const queue = new Set()

function process() {
  for (const task of queue) {
    task()
  }
  queue.clear()
  timeout = null
}

module.exports = function enqueue(task, batch) {
  if (timeout === null)
    timeout = setTimeout(process, batch === true ? 0 : batch)
  queue.add(task)
}