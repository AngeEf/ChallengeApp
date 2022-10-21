/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Challenges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.TEXT,
        defaultValue: 'https://yt3.ggpht.com/ytc/AMLnZu8KXigrQjYlenzGLeOZWM7bWGlvGL1AQPb8RLgy=s900-c-k-c0x00ffffff-no-rj',
      },
      title: {
        type: Sequelize.STRING,
      },
      subtitle: {
        type: Sequelize.TEXT,
      },
      category: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Challenges');
  },
};
