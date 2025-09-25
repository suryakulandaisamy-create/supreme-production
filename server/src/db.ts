import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { join } from 'path'

// Robust path resolution relative to this file
const file = join(__dirname, '..', 'data', 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

export default db
