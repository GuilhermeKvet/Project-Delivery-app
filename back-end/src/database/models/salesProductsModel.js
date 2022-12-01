module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
    seller_id: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
  });

  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
      as: 'products'
    });
    models.Products.belongsToMany(models.Sales, {
      through: SalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
      as: 'sales'
    });
  }

  return SalesProducts;
};