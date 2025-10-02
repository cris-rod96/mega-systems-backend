import { hash, compare } from 'bcryptjs'

const hashPassword = async (password) => {
  return await hash(password, 13)
}

const comparePassword = async (password, hashed) => {
  return await compare(password, hashed)
}

export default {
  hashPassword,
  comparePassword,
}
