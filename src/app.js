const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get('/musicians/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const musician = await Musician.findByPk(id);
        if (musician) {
            res.json(musician);
        } else {
            res.status(404).json({ error: 'Musician not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});



module.exports = app;