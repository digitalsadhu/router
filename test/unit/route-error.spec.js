/* global describe, it, afterEach */

const td = require('testdouble')
const routeSuccess = require('../../src/route-error')

describe('Router', function () {
  afterEach(() => {
    td.reset()
  })

  it('route error called with an object', function () {
    const json = td.function('.json')
    const model = {}
    const httpContext = {
      response: { json }
    }

    routeSuccess(model, httpContext)

    td.verify(json(model))
  })

  it('route error called with a string', function () {
    const send = td.function('.send')
    const model = 'Gwibble'
    const httpContext = {
      response: { send }
    }

    routeSuccess(model, httpContext)

    td.verify(send(model))
  })
})