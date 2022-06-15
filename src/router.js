const {getAllItems} = require('./controllers');
const {errorPage} = require('./utils');

const router = (req, res) => {
  switch (req.url) {
    case '/':
      if (req.method !== 'GET') {
        errorPage(res, 'Method not allowed', 405);
        return;
      }
      getAllItems(req, res);
      break;
    default:
      errorPage(res, "We don't have this page", 404);
  }
};

module.exports = router;
