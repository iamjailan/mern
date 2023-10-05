import express from "express"
import mongoose from "mongoose"
import { PORT, mongoDbURL } from "./config.js"
import { Book } from "./models/bookModel.js"

const app = express()

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome to FullStack App!")
})

app.post('/books', async (req, res) => {
    try {
        if (
            !req.body.title || 
            !req.body.author ||
            !req.body.publishedYear
        ) {
            return res.status(400).send({message: "Send all requires filed: author, title, and published year"})
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishedYear: req.body.publishedYear,
        }
        const book = await Book.create(newBook);
        return res.status(201).send(book)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: err.message})
    }
})

mongoose
    .connect(mongoDbURL)
    .then(() => {
        console.log('App connected to Database');
        app.listen(PORT, () => {
            console.log(`server is listening to : ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })