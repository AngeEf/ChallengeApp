/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [{
      community_id: 1,
      user_id: 2,
      image: 'In image',
      task: false,
    },
    {
      community_id: 1,
      user_id: 1,
      image: 'https://s5o.ru/storage/simple/ru/ugc/be/dc/a3/ca/ruub30977955d.97.400x300.jpg',
      task: false,
    },
    {
      community_id: 1,
      user_id: 2,
      image: 'In image',
      task: false,
    },
    {
      community_id: 1,
      user_id: 1,
      image: 'https://s5o.ru/storage/simple/ru/ugc/be/dc/a3/ca/ruub30977955d.97.400x300.jpg',
      task: false,
    },
    {
      community_id: 1,
      user_id: 2,
      image: 'https://s5o.ru/storage/simple/ru/ugc/be/dc/a3/ca/ruub30977955d.97.400x300.jpg',
      task: false,
    },
    {
      community_id: 1,
      user_id: 1,
      image: 'In image',
      task: false,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
