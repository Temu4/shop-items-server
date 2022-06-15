const errorPage = (res, errorMsg = 'Server error', errorStatus = 500) => {
  res.writeHead(errorStatus, {'Content-Type': 'text/plain'});
  res.end(errorMsg);
};

module.exports = errorPage;
