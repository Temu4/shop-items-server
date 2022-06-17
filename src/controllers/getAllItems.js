const {readFile} = require('fs').promises;
const {errorPage} = require('../utils');

const getAllItems = async (req, res) => {
  try {
    const result = await readFile('./db/items.json', 'utf8');

    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested, Content-Type, Accept Authorization'
    });
    res.end(result);
  } catch (error) {
    errorPage(error);
  }
};

module.exports = getAllItems;
