import { DataTypes } from 'sequelize'

export default (conn) => {
  conn.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [10, 10],
        },
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [10, 10],
        },
      },

      photo: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: true,
        },
      },

      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      verificationDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      RolId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Rols',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}
