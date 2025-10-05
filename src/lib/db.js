import { DATABASE_CONFIG } from '../config/config.js'
import { Sequelize } from 'sequelize'
import { models } from '../models/index.models.js'
const sq = new Sequelize(DATABASE_CONFIG.URI, DATABASE_CONFIG.OPTIONS)

models.forEach((model) => model(sq))

const {
  User,
  Rol,
  Code,
  Brand,
  Cart,
  Item,
  Favorite,
  Category,
  Image,
  Product,
  Review,
  Sale,
  SaleDetail,
  Service,
  View,
} = sq.models

Rol.hasMany(User, { foreignKey: 'RolId' })
User.belongsTo(Rol, { foreignKey: 'RolId' })

User.hasMany(Cart, { foreignKey: 'UserId' })
Cart.belongsTo(User, { foreignKey: 'UserId' })

User.hasMany(Favorite, {
  foreignKey: 'UserId',
})

Favorite.belongsTo(User, {
  foreignKey: 'UserId',
})

Product.hasMany(Favorite, {
  foreignKey: 'ProductId',
})
Favorite.belongsTo(Product, {
  foreignKey: 'ProductId',
})

Cart.hasMany(Item, {
  foreignKey: 'CartId',
})
Item.belongsTo(Cart, {
  foreignKey: 'CartId',
})

Product.hasMany(Item, {
  foreignKey: 'ProductId',
})
Item.belongsTo(Product, {
  foreignKey: 'ProductId',
})

Category.hasMany(Product, { foreignKey: 'CategoryId' })
Product.belongsTo(Category, {
  foreignKey: 'CategoryId',
})

Brand.hasMany(Product, { foreignKey: 'BrandId' })
Product.belongsTo(Brand, {
  foreignKey: 'BrandId',
})

Product.hasMany(Image, {
  foreignKey: 'ProductId',
})
Image.belongsTo(Product, {
  foreignKey: 'ProductId',
})

User.hasMany(Review, {
  foreignKey: 'UserId',
})
Review.belongsTo(User, {
  foreignKey: 'UserId',
})

Product.hasMany(Review, {
  foreignKey: 'ProductId',
})
Review.belongsTo(Product, {
  foreignKey: 'ProductId',
})

User.hasMany(Sale, {
  foreignKey: 'UserId',
})
Sale.belongsTo(User, {
  foreignKey: 'UserId',
})

Sale.hasMany(SaleDetail, {
  foreignKey: 'SaleId',
})

SaleDetail.belongsTo(Sale, {
  foreignKey: 'SaleId',
})

Product.hasMany(SaleDetail, {
  foreignKey: 'ProductId',
})

SaleDetail.belongsTo(Sale, {
  foreignKey: 'ProductId',
})

User.hasMany(View, { foreignKey: 'UserId' })
View.belongsTo(User, {
  foreignKey: 'UserId',
})

Product.hasMany(View, {
  foreignKey: 'ProductId',
})
View.belongsTo(Product, {
  foreignKey: 'ProductId',
})

export {
  sq,
  User,
  Rol,
  Code,
  Brand,
  Cart,
  Item,
  Favorite,
  Category,
  Image,
  Product,
  Review,
  Sale,
  SaleDetail,
  Service,
  View,
}
