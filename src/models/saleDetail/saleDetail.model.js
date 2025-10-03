import { Sequelize, DataTypes } from 'sequelize'

export default (conn) => {
  conn.define(
    'SaleDetail',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        },
      },

      unitPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      subTotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      SaleId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Sales',
          key: 'id',
        },
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
