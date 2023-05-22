# ChallengeApp

В нашем приложении доступно множество категорий, вы обязательно найдете себе друзей по интересам

![Иллюстрация к проекту](https://github.com/andreykonkin/svoya-igra/raw/main/main.png)

После выбора интересующей Вас категории, вы можете вступить в существующие сообщества или создать своё!

![Иллюстрация к проекту](https://github.com/andreykonkin/svoya-igra/raw/main/community.png)

Отслеживайте прогресс выполнения челленджей на своей странице прогресса, так же там будут отображаться новые задания от сообществ в которые вы вступили.

![Иллюстрация к проекту](https://github.com/andreykonkin/svoya-igra/raw/main/community.png)

Installation
Установка

Для работы требуется Node.js v10+.

Установите зависимости и devDependencies и запустите сервер.
подробнее ниже

```
npm i
rename file envExample to .env
create data base and fill the env file with your data
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
cd client
npm start
cd server
npm start
```