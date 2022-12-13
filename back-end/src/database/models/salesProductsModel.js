module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
    productId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });

  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products'
    });
    models.Products.belongsToMany(models.Sales, {
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'sales'
    });
  }

  return SalesProducts;
};