const { promisify } = require('util');

const saveCounterValue = (client) => (state) => promisify(client.incr).bind(client)(Object.keys(state)[0]);

const getCounterValue = (client) => () => promisify(client.get).bind(client)("counter");

module.exports = { saveCounterValue, getCounterValue };