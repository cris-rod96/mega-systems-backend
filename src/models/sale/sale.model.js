import { DataTypes } from 'sequelize'

export default (conn) => {
  conn.define(
    'Sale',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [8, 8],
          isAlpha: true,
        },
      },

      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      status: {
        type: DataTypes.ENUM,
        values: ['Pendiente', 'Cancelada', 'En revisión', 'Pagada', 'Enviada', 'Entregada'],
        defaultValue: 'Pendiente',
      },

      observation: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  )
}
