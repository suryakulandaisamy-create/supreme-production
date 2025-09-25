import React, { useEffect, useState } from 'react'
import { getRecords } from '../api'

const STAGES = ['Labelling','Cutting','Nosing','Capping','Packing']

export default function Dashboard(){
  const [data, setData] = useState<any>({})

  useEffect(()=>{
    async function load(){
      const result: any = {}
      for(const s of STAGES){
        const recs = await getRecords(s)
        result[s] = recs
      }
      setData(result)
    }
    load()
  },[])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dashboard (simple)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {STAGES.map(s=> (
          <div key={s} className="p-3 border rounded">
            <h3 className="font-medium">{s}</h3>
            <div>Total records: {data[s]?.length ?? 0}</div>
            <div>Sum qty: { (data[s] || []).reduce((acc:any, r:any)=> acc + (Number(r.qty)||0), 0) }</div>
            <div>Sum rejects: { (data[s] || []).reduce((acc:any, r:any)=> acc + (Number(r.rejects)||0), 0) }</div>
          </div>
        ))}
      </div>
    </div>
  )
}
