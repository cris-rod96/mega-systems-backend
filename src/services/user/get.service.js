import { Rol, User } from '../../lib/db.js'

const getAll = async () => {
  const users = await User.findAll({
    include: [Rol],
    attributes: {
      exclude: ['password'],
    },
  })
  return {
    code: 200,
    users,
  }
}

const getByKey = async (key, value) => {
  const user = await User.findOne({
    where: {
      [key]: value,
    },
    include: [Rol],
    attributes: {
      exclude: ['password'],
    },
  })

  return user
    ? {
        code: 200,
        user,
      }
    : {
        code: 404,
        message: 'Usuario no encontrado',
      }
}

export default {
  getAll,
  getByKey,
}
