const axios = require('axios');

const checkRequest = async (req, res, next) => {
  const queryParams = req.query;
  const currencies = [];
  try {
    const response = await axios
      .get('https://api.coincap.io/v2/rates/')
      .then((obj) => obj.data);
    response.data.forEach((item) => {
      currencies.push(item.id);
    });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
  if (!currencies.includes(queryParams.currency)) {
    res
      .status(404)
      .send(`Invalid currency! Try another of: ${currencies.join(' | ')}`);
  } else {
    next();
  }
};

module.exports = checkRequest;
