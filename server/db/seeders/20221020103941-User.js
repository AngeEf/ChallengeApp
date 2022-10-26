/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Сергей',
      email: '1@1',
      password: '123',
      image: 'images/1666784429930--50f3479fdbc54b7c1afc019a95c68565.jpeg',
    },
    {
      name: 'Вадим',
      email: '2@2',
      password: '123',
      image: 'images/1666783447335--unnamed.jpeg',
    },
    {
      name: 'Никита',
      email: '3@3',
      password: '123',
      image: 'images/1666784107452--GsV2TUhUTtE.jpeg',
    },
    {
      name: 'Саша',
      email: '4@4',
      password: '123',
      image: 'images/1666784905733--harjit-sajjan-e1454606987704.jpeg',
    },
    {
      name: 'Анна',
      email: '5@5',
      password: '123',
      image: 'images/1666785063130--teacher-31.jpeg',
    },
    {
      name: 'Петр',
      email: '6@6',
      password: '123',
      image: 'images/1666784973935--avatar.jpeg',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
