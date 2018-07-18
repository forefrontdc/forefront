const convict = require('convict')
const events = require('./src/data/events.json')
const about = require('./src/data/about.json')

const config = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  events,
  about
})

// Load environment dependent configuration if desired
// var env = config.get('env');
// config.loadFile('./config/' + env + '.json');

// Perform validation
config.validate({allowed: 'strict'})

module.exports = config
