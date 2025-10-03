import { request, response } from 'express'
import { jwtUtils } from '../../utils/index.utils.js'
import { User } from '../../lib/db.js'

const verifyToken = async (req = request, res = response, next) => {
  try {
    const token = req.header('x-token')
    if (!token)
      return res.status(401).json({
        message: 'Petición denegada. Inicia sesión desde la plataforma e intenta de nuevo.',
      })
    const { id } = jwtUtils.verifyToken(token)
    if (!id) {
      return res.status(401).json({
        message: 'Petición denegada. Token no válido',
      })
    }

    // Descomentar cuando esten el modelo de usuario válido
    const user = await User.findOne({
      where: {
        id,
      },
    })

    if (!user) {
      return res.status(401).json({
        message: 'Petición denegada. Usuario no válido',
      })
    }

    req.user = user
    next()
  } catch (error) {
    res.status(401).json({
      message: 'Petición denegada. Token no válido',
    })
  }
}

const isAdmin = (req = request, res = response, next) => {
  const user = req.user
  if (user.role !== 'Administrador')
    return res.status(401).json({
      message: 'Petición denegada. Permisos insuficientes',
    })

  next()
}

export default {
  verifyToken,
  isAdmin,
}
