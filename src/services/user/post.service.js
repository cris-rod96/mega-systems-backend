import { User } from '../../lib/db.js'
import { bcryptUtils } from '../../utils/index.utils.js'
import getUsers from './get.service.js'

const registerUser = async (data) => {
  const { email, phone, dni, password } = data

  const { user: userByEmail } = await getUsers.getByKey('email', email)

  if (userByEmail) {
    return { code: 409, message: 'Error al registrar. Email no disponible.' }
  }

  const { user: userByPhone } = await getUsers.getByKey('phone', phone)

  if (userByPhone) {
    return { code: 409, message: 'Error al registrar. Teléfono no disponible.' }
  }

  const { user: userByDni } = await getUsers.getByKey('dni', dni)

  if (userByDni) {
    return { code: 409, message: 'Error al registrar. Dni no disponible.' }
  }

  const passwordHashed = await bcryptUtils.hashPassword(password)

  const user = await User.create({
    ...data,
    password: passwordHashed,
  })

  return user
    ? {
        code: 201,
        message: 'Usuario registrado con éxito',
        user,
      }
    : {
        code: 500,
        message: 'Error interno al crear el usuario.',
      }
}

export default registerUser
