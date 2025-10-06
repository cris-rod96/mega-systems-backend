import { Rol } from '../../lib/db.js'
import getRole from './get.service.js'

const createRole = async (data) => {
  const { name } = data

  const { rol: roleFound } = await getRole.getByKey('name', name)

  if (roleFound) return { code: 400, message: 'Error al crear el rol. Ya existe.' }

  const newRole = await Rol.create(data)

  return newRole
    ? { code: 201, message: 'Rol creado con éxito.' }
    : { code: 500, message: 'Error interno al crear el rol.' }
}

export { createRole }
