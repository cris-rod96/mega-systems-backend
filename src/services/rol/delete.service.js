import getRole from './get.service.js'

const deleteRole = async (id) => {
  const { rol: roleFound } = await getRole.getByKey('id', id)

  if (!roleFound) return { code: 404, message: 'Error al eliminar. Rol no encontrado' }

  await roleFound.update({
    isActive: false,
  })

  return { code: 200, message: 'Rol eliminado con éxito.' }
}

export { deleteRole }
