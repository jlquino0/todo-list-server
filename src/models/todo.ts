import mongoose from 'mongoose'

interface ITodo {
  id: string;
  description: string;
  done: boolean;
}

interface todoModelInterface extends mongoose.Model<TodoDoc> {
  build(attr: ITodo): TodoDoc
}

interface TodoDoc extends mongoose.Document {
  id: number;
  description: string;
  done: boolean;
}

const todoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  done:{
    type: Boolean,
    required: true
  }
})

todoSchema.statics.build = (attr: ITodo) => {
  return new Todo(attr)
}

const Todo = mongoose.model<TodoDoc, todoModelInterface>('Todo', todoSchema)

export { Todo }




