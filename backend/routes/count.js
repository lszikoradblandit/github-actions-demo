const express = require('express');
const router = express.Router();

const redisOps = require('../state/redis');
const fsOps = require('../state/filesystem');

const { client } = require('../state/state');

router.get('/', (req, res, next) => {
    (client.connected ? redisOps.getCounterValue(client) : fsOps.getCounterValue)()
        .then(value => {
            value = value || "0";
            res.status(200).json({value: value});
        })
        .catch(console.error)
});

router.post('/', (req, res, next) => {
    const { body } = req;
    (client.connected ? redisOps.saveCounterValue(client) : fsOps.saveCounterValue)(body)
        .then(() => res.status(201).json({value: "Contador actualizado"}))
        .catch(console.error)
});

module.exports = router;
