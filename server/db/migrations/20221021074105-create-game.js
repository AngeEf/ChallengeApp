/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      challenge_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Challenges',
          key: 'id',
        },
      },
      progress: {
        type: Sequelize.TEXT,
        defaultValue: '{"1":false, "2":false, "3":false, "4":false, "5":false, "6":false, "7":false, "8":false, "9":false, "10":false, "11":false, "12": false, "13":false, "14":false, "15":false, "16":false, "17":false, "18":false, "19":false, "20":false, "21":false, "22":false, "23":false, "24":false, "25":false, "26":false, "27":false, "28":false, "29":false, "30":false}',
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('Games');
  },
};
