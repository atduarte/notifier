'use strict';
const spawn = require('child_process').spawn
const app = require('koa')()
const _ = require('lodash')
const LRU = require('lru')

const cache = new LRU({ max: 100, maxAge: 2000 }) 

const notify = (name) => {
  spawn('say', ['Hey!'])
  spawn('terminal-notifier', ['-title', 'Terminal', '-message', name + ' needs your atention!'])
}

app.use(function *() {
  const name = _.trimStart(this.request.path, "/")
 
  if (cache.peek(this.request.ip)) this.throw(429)
  if (!name) this.throw(400, 'name required')
  
  cache.set(this.request.ip, true)
  notify(name)
  this.body = "Sent"
});

app.listen(8085)
