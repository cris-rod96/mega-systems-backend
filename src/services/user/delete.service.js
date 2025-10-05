import getUser from './get.service.js'

const deleteUser = async (id) => {
  const { user: userFound } = await getUser.getByKey('id,', id)
  if (!userFound) {
    return {
      code: 404,
      message: 'Error al eliminar. Usuario no encontrado',
    }
  }
  await userFound.destroy()
  return {
    code: 200,
    message: 'Usuario eliminado con éxito.',
  }
}

export default deleteUser
