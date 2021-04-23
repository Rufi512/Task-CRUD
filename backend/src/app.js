import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import tasks from './routes/tasks'
import path from 'path'

const app = express()

//Settings
app.set('port',(process.env.PORT || 8080))

//middlewares

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Routes
app.use('/api/tasks/',tasks)

app.use(express.static(path.join(__dirname, 'public')))


export default app
