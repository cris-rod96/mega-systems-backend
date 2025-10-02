import { sign, verify } from 'jsonwebtoken'
import { SECRET_WORD } from '../../config/envs.js'

const generateToken = (payload) => {
  return sign(payload, SECRET_WORD)
}

const verifyToken = (token) => {
  const payload = verify(token, SECRET_WORD)
  return payload
}

export default {
  generateToken,
  verifyToken,
}
