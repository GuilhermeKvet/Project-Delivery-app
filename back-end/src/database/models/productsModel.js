module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    urlImage: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });

  return Products;
};