import { signIn } from '@/pages/api/auth/auth'
 
export default async function handler(req, res) {
  try {
    const { usuario, password } = req.body
    await signIn('credentials', { usuario, password })
 
    res.status(200).json({ success: true })
  } catch (error) {
    if (error.type === 'CredentialsSignin') {
      res.status(401).json({ error: 'Invalid credentials.' })
    } else {
      res.status(500).json({ error: 'Something went wrong.' })
    }
  }
}