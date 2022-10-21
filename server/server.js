const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const userRouter = require('./src/routes/userRouter');
const uploadRouter = require('./src/routes/uploadRoute');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));

app.use(cors({
  credentials: true,
  origin: true,
}));

app.use('./images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

app.use('/api', uploadRouter);
app.use('/api/user', userRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
