import { Rol } from '../../lib/db.js'

const getRoles = async () => {
  const roles = await Rol.findAll({
    where: {
      isActive: true,
    },
  })

  return { code: 200, roles }
}

const getAllRoles = async () => {
  const roles = await Rol.findAll()
  return { code: 200, roles }
}

const getByKey = async (key, value) => {
  const rol = await Rol.findOne({
    where: {
      [key]: value,
    },
  })

  return rol ? { code: 200, rol } : { code: 404, message: `Usuario no encontrado por su ${key}` }
}

export default {
  getRoles,
  getAllRoles,
  getByKey,
}
