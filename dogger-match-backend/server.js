import express from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js'
import Cors from 'cors'

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://aandklasse:7mpAfRWYrVg6OAna@cluster0.tmz9nya.mongodb.net/doggermatchdb?retryWrites=true&w=majority';

// Middlewares
app.use(express.json())
app.use(Cors())

// DB config
mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

// API endpoints
app.get('/' , (request, response) => response.status(200).send("Hello World!"));
// push data into database
app.post('/dogger/cards', (request, response) => {
	const dbCard = request.body;
	Cards.create(dbCard, (error, data) => {
		if (error){
			response.status(500).send(error)
		} else {
			response.status(201).send(data)
		}
	})
});
// retrieves everything fron the database
app.get('/dogger/cards', (request, response) => {
	const dbCard = request.body;
	Cards.find((error, data) => {
		if (error){
			response.status(500).send(error)
		} else {
			response.status(200).send(data)
		}
	})
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));