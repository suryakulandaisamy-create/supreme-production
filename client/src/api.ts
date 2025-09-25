const API_ROOT = import.meta.env.VITE_API_ROOT || 'http://localhost:4000/api'

export async function postRecord(stage: string, data: any) {
  const res = await fetch(`${API_ROOT}/${stage}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data)
  })
  return res.json()
}

export async function getRecords(stage: string) {
  const res = await fetch(`${API_ROOT}/${stage}`)
  return res.json()
}
