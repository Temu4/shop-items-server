const {readFile} = require('fs').promises;
const {errorPage} = require('../utils');

const getAllItems = async (req, res) => {
  try {
    const result = await readFile('./db/items.json', 'utf8');

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(result);
  } catch (error) {
    errorPage(error);
  }
};

module.exports = getAllItems;
