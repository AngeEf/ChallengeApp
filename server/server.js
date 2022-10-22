const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const userRouter = require('./src/routes/userRouter');
const communityRouter = require('./src/routes/communityRouter');
const challengeRouter = require('./src/routes/challengeRouter');
const categoryRouter = require('./src/routes/categoryRouter');
const postRouter = require('./src/routes/postRouter');
const uploadRouter = require('./src/routes/uploadRoute');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'images')));
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

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

app.use('/api', uploadRouter);
app.use('/api/user', userRouter);
app.use('/api/category', categoryRouter);
app.use('/api/community', communityRouter);
app.use('/api/challenge', challengeRouter);
app.use('/api/post', postRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
