import React, { useState } from 'react'
import { postRecord } from '../api'

const STAGES = ['Labelling','Cutting','Nosing','Capping','Packing']

export default function DataEntry(){
  const [stage, setStage] = useState('Labelling')
  const [form, setForm] = useState({ date: new Date().toISOString().slice(0,10), shift: 'A', operator: '', machineID: '', productCode: '', qty: 0, rejects: 0 })
  const [msg, setMsg] = useState('')

  async function submit(e: any){
    e.preventDefault()
    const payload = { ...form }
    try{
      await postRecord(stage, payload)
      setMsg('Saved')
    }catch(err){
      setMsg('Error saving')
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Data Entry</h2>
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label>Stage</label>
          <select value={stage} onChange={e=>setStage(e.target.value)} className="ml-2">
            {STAGES.map(s=> <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input value={form.date} onChange={e=>setForm({...form, date: e.target.value})} />
          <input value={form.shift} onChange={e=>setForm({...form, shift: e.target.value})} />
          <input placeholder="Operator" value={form.operator} onChange={e=>setForm({...form, operator: e.target.value})} />
          <input placeholder="MachineID" value={form.machineID} onChange={e=>setForm({...form, machineID: e.target.value})} />
          <input placeholder="ProductCode" value={form.productCode} onChange={e=>setForm({...form, productCode: e.target.value})} />
          <input type="number" placeholder="Qty" value={form.qty} onChange={e=>setForm({...form, qty: Number(e.target.value)})} />
          <input type="number" placeholder="Rejects" value={form.rejects} onChange={e=>setForm({...form, rejects: Number(e.target.value)})} />
        </div>
        <button className="px-4 py-2 rounded bg-blue-600 text-white">Save</button>
        {msg && <div className="text-green-600">{msg}</div>}
      </form>
    </div>
  )
}
