'use strict'

const Ash = require('@ash-framework/classes')

module.exports = class Route extends Ash.Route {
  model () {
    return {name: 'widgets', method: 'get'}
  }
}
