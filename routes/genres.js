const express = require("express")
const router = express.Router();
const Joi = require("joi");

const genres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Comedy" },
    { id: 3, name: "Drama" },
]

router.get("/", (req, res) => {
    res.send(genres)
}) 

router.get("/:id", (req, res) => {
    const result = existChecker(req.params.id, res)
    res.send(result)
}) 

router.post("/", (req, res) => {
    const { error } = validateGenre(req.body)
    if ( error ) return res.status(400).send(error.details.message)

    const { name: _name } = req.body;
    const genre = {
        id: genres.length + 1,
        name: _name
    }

    genres.push(genre);
    res.send(genre);
})

router.put("/:id", (req, res) => {
    const genre = existChecker(req.params.id, res)

    const { error } = validateGenre(req.body)
    if ( error ) return res.status(400).send(error)

    genre.name = req.body.name;
    res.send(genre)
})

router.delete("/:id", (req, res) => {
    const genre = existChecker(req.params.id, res)

    const index = genres.indexOf(genre)
    genres.splice(index, 1)
    res.send(genre)
}) 

function existChecker(reqId, res) {
    const genre = genres.find((g) => g.id === parseInt(reqId))
    if (!genre) res.status(404).send("NOT FOUND");
    return genre
}

function validateGenre(genre) {
    const schema = {
        name: Joi.string().required()
    }
    return Joi.validate(genre, schema);
}

module.exports = router;