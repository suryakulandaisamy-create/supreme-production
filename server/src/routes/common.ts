import { Router } from 'express'
import db from '../db'
import { nanoid } from 'nanoid'

const router = Router()

router.get('/:stage', async (req, res) => {
  const stage = req.params.stage
  await db.read()
  db.data = db.data || { records: [] }
  const items = db.data.records.filter((r: any) => r.stage === stage)
  res.json(items)
})

router.post('/:stage', async (req, res) => {
  const stage = req.params.stage
  await db.read()
  db.data = db.data || { records: [] }
  const payload = req.body
  const record = { id: nanoid(), stage, createdAt: new Date().toISOString(), ...payload }
  db.data.records.push(record)
  await db.write()
  res.status(201).json(record)
})

export default router
