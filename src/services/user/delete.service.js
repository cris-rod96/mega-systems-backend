import getUser from './get.service.js'

const deleteUser = async (id) => {
  try {
    const { user: userFound } = await getUser.getByKey('id', id)

    if (!userFound) {
      return {
        code: 404,
        message: 'Error al eliminar. Usuario no encontrado.',
      }
    }

    // Si ya está inactivo, no tiene sentido "eliminarlo" otra vez
    if (!userFound.isActive) {
      return {
        code: 400,
        message: 'El usuario ya se encuentra inactivo.',
      }
    }

    // Borrado lógico
    await userFound.update({ isActive: false })

    return {
      code: 200,
      message: 'Usuario desactivado correctamente.',
    }
  } catch (error) {
    console.error('Error al desactivar usuario:', error)
    return {
      code: 500,
      message: 'Error interno al desactivar el usuario.',
    }
  }
}

export default deleteUser
