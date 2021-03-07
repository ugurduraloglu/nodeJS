'use strict'

const data = [
  {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Delicious overpriced chocolate.'}
]

module.exports = async function (fastifyy, opts) {
  fastifyy.get('/', async function (request, reply) {
    return data
  })
  fastifyy.post('/', async function (request, reply) {
    request.mockDataInsert(opts.prefix.slice(1), data)
    return data
  })
}