const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Community extends Model {
    static associate({ User }) {
      this.belongsToMany(User, { through: 'Members', foreignKey: 'user_id' });
      this.belongsTo(User, { foreignKey: 'admin_id' });
    }
  }
  Community.init({
    image: DataTypes.TEXT,
    title: DataTypes.STRING,
    subtitle: DataTypes.TEXT,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    admin_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Community',
  });
  return Community;
};
