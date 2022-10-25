/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [{
      community_id: 1,
      user_id: 1,
      task: true,
      content: `‼Внимание‼ Сегодня 28.10.2022г. начинается регистрация ️на новые уникальные онлайн соревнования в Сообществе Бег в Кайф 2.0
      🔥 Челлендж "10*10%"🔥
      ❗Который пройдёт с 11 по 20 ноября. ❗
      
      ⚠✔Внимательно!!! Ознакомьтесь с правилами и условиями челленджа:`,
    },
    {
      community_id: 8,
      user_id: 3,
      task: true,
      content: `Для участия необходимо: 
      — вступить в открытые группы в социальной сети ВКонтактеhttps://vk.com/club128649951 и https://vk.com/olimp165390971 (Спортивный челлендж «Живу спортом!»); `,
    },
    {
      community_id: 2,
      user_id: 4,
      task: false,
      content: `
      Давидыч: Подвесной мост знаешь?
      Юрий Вдудь: Ну да!
      Давидыч: Это я подвесил!

Давидыч: Статую Свободы знаешь?
Дудь: Знаю
Давидыч: Это я освободил
      `,
    },
    {
      community_id: 2,
      user_id: 4,
      task: true,
      content: `
      Блогер Давидыч сделал 1200 приседаний из-за интервью Дудю повторишь?`,
    },
    {
      community_id: 3,
      user_id: 2,
      task: false,
    },
    {
      community_id: 4,
      user_id: 1,
      task: false,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
