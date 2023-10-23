import express, { Request, Response } from 'express'
import { User } from '../models/user'
import { Todo } from '../models/todo'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('hello get request');
});

router.post('/api/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.find({username:username, password:password})
  if (user.length==0) res.send("Not found").status(404);
    else res.send("Found").status(200);
})

router.post('/api/user', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = User.build({ username, password })
  await user.save()
  return res.status(201).send(user)
})

router.post('/api/todos', async (req: Request, res: Response) => {
  await Todo.deleteMany()
  const user = await Todo.insertMany(req.body.todos)
  return res.status(201).send(user)
})

router.get('/api/todos', async (req: Request, res: Response) => {
  const todo = await Todo.find()
  if (todo.length==0) res.send("Not found").status(404);
    else res.send(todo).status(200);
})

export { router }