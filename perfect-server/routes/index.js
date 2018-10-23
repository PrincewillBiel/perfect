/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */
/* eslint-disable global-require */
// const keystone = require('keystone');
const cors = require('cors');
const jwt = require('express-jwt');
const bodyParser = require('body-parser');

// const path = require('path');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const InvestmentController = require('./controllers/InvestmentController');
const MessageController = require('./controllers/MessageController');
const UplineController = require('./controllers/UplineController');
const DownlineController = require('./controllers/DownlineController');
const PopController = require('./controllers/PopController');
const BonusController = require('./controllers/BonusController');
const WithdrawController = require('./controllers/WithdrawController');

// Setup Route Bindings
module.exports = (app) => {
  if (process.env.NODE_ENV === 'development') app.use(cors());

  const { authAccess } = AuthenticationController;
  // Views
  // app.get('/', (req, res) => {res.redirect('/keystone')})

  app.get('/admin', (req, res) => { res.redirect('/keystone'); });

  // API Routes
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);

  app.post('/login',
    AuthenticationController.login);

  app.get('/api/authenticated',
    jwt({ secret: process.env.JWT_SECRET }),
    AuthenticationController.isAuthenticated);


  app.post('/api/user/editProfile',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, AuthenticationController.editProfile);

  app.post('/api/user/changePassword',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, AuthenticationController.changePassword);

  app.post('/api/user/password/sendResetLink',
    AuthenticationController.sendPasswordResetLink);

  app.post('/api/user/password/reset',
    AuthenticationController.resetPassword);

  app.get('/api/user',
    jwt({ secret: process.env.JWT_SECRET }), authAccess,
    AuthenticationController.index);

  app.post('/api/user/investments/create',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, InvestmentController.createInv);

  app.post('/api/user/investment/deleteInv',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, InvestmentController.deleteInv);

  app.post('/api/user/investment/withdrawInv',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, InvestmentController.withdrawInv);

  app.get('/api/user/investments',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, InvestmentController.index);
  // NOTE 'investments' would be a better name for this route
  // app.get('/api/user/investments',
  //  jwt({ secret: process.env.JWT_SECRET }), authAccess, InvestmentController.index)

  app.get('/api/user/investments/list',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, InvestmentController.list);

  app.get('/api/user/messages',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, MessageController.findMany);

  app.post('/api/user/messages/markasread',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, MessageController.createReadReciepts);

  app.post('/api/user/upline',
    UplineController.postUpline);

  app.get('/api/user/upline/:code',
    UplineController.getUpline);

  app.post('/api/user/downlines/create',
    DownlineController.postDownline);

  app.get('/api/user/downlines',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, DownlineController.getDownline);

  app.get('/api/user/uplines',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, DownlineController.getUpline);

  app.post('/api/user/pop',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, PopController.postPop);

  app.post('/api/user/withdraw',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, WithdrawController.withdraw);

  app.post('/api/user/bonus/create',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, BonusController.postBonus);

  app.get('/api/user/bonus',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, BonusController.index);

  app.get('/api/user/bonus/list',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, BonusController.list);

  app.post('/api/user/bonus/withdrawBon',
    jwt({ secret: process.env.JWT_SECRET }), authAccess, BonusController.withdrawBon);

  if (process.env.NODE_ENV === 'development') {
    const TestsController = require('./controllers/TestsController');

    app.get('/testpasswordreset', TestsController.testpasswordreset);
    app.get('/testconfirmationemail', TestsController.testconfirmationemail);
  }

  app.use(history({ verbose: true }));
  app.use(serveStatic(`${__dirname}/dist`));
};
