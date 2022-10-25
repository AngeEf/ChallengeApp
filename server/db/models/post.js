const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ User, Community }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Community, {
        foreignKey: 'community_id',
      });
    }
  }
  Post.init({
    community_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    content: DataTypes.TEXT,
    task: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
