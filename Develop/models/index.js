// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'product_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Tag, {
  through: ProductTag,
  as: 'Parents',
  foreignKey: 'tag_id'
});


module.exports = {
  Product,
  Category,
  Tag,

};
