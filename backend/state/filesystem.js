const fs = require('fs').promises
const path = require('path')
const db = path.join(__dirname, "./db.json")

const saveCounterValue = (state) => {
    return fs.writeFile(db, JSON.stringify(state, null, 2))
};

const getCounterValue = () => fs.readFile(db, 'utf8').then(data => JSON.parse(data).counter.toString());

module.exports = { saveCounterValue, getCounterValue };