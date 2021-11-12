// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { id } = req.params;

  if(id === 455) {
    res.status(200).json({ id, name: 'Willian' })
  }
  else {
    res.status(404).json({ error: 'User not found' })
  }
}
