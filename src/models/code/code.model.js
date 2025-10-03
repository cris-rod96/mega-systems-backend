import { DataTypes } from 'sequelize'

export default (conn) => {
  conn.define(
    'Code',
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
          len: [6, 6],
          isAlpha: true,
          isUppercase: true,
        },
      },

      typeCode: {
        type: DataTypes.ENUM,
        values: ['Verificación', 'Recuperación', 'Compra', 'Cancelación', 'Desactivación'],
        allowNull: false,
      },

      unused: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      expiredDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      dateOfUse: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    { timestamps: false }
  )
}
