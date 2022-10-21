/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Games', [{
      user_id: 1,
      challenge_id: 2,
      progress: 'In Progress',
    }, {
      user_id: 1,
      challenge_id: 2,
      progress: 'In Progress',
    }, {
      user_id: 1,
      challenge_id: 2,
      progress: 'In Progress',
    }, {
      user_id: 3,
      challenge_id: 4,
      progress: 'In Progress',
    }, {
      user_id: 1,
      challenge_id: 3,
      progress: 'In Progress',
    }, {
      user_id: 2,
      challenge_id: 4,
      progress: 'In Progress',
    },
    {
      user_id: 4,
      challenge_id: 3,
      progress: 'In Progress',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  },
};
