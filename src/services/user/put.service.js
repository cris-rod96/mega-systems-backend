import { Op } from 'sequelize'
import { User } from '../../lib/db.js'
import getUser from './get.service.js'

const updateUser = async (id, data) => {
  try {
    const { email, phone, dni } = data

    // Buscar usuario actual
    const { user: userFound } = await getUser.getByKey('id', id)

    if (!userFound) {
      return {
        code: 404,
        message: 'Error al actualizar. Usuario no encontrado.',
      }
    }

    // Verificar duplicados (email, phone, dni)
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [email ? { email } : null, phone ? { phone } : null, dni ? { dni } : null].filter(
          Boolean
        ), // filtra los null
        id: { [Op.ne]: id }, // excluye el usuario actual
      },
    })

    if (existingUser) {
      return {
        code: 409, // conflicto
        message: 'Ya existe otro usuario con el mismo email, teléfono o DNI.',
      }
    }

    // Actualizar usuario
    await userFound.update(data)

    return {
      code: 200,
      message: 'Usuario actualizado correctamente.',
      user: userFound,
    }
  } catch (error) {
    console.error('Error en updateUser:', error)
    return {
      code: 500,
      message: 'Error interno al actualizar usuario.',
    }
  }
}

export default updateUser
