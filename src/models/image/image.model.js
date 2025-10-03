import { DataTypes } from 'sequelize'

export default (conn) => {
  conn.define(
    'Image',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },

      publicId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      ProductId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}
