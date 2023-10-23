import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { router } from './routes/router'
import cors from "cors";

const app = express()
app.use(json())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use(router)

mongoose.connect('mongodb://127.0.0.1:27017/todo-list')

app.listen(3001, () => {
  console.log('server is listening on port 3001')
})