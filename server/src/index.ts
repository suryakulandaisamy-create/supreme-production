import express from 'express'
import cors from 'cors'
import commonRouter from './routes/common'
import db from './db'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', commonRouter)

const PORT = process.env.PORT || 4000

;(async ()=>{
  await db.read()
  db.data = db.data || { records: [] }
  await db.write()
  app.listen(PORT, ()=> console.log('Server listening on', PORT))
})()
