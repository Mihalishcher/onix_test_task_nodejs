const axios = require('axios');

const getRateUsd = async (req, res) => {
  const queryParam = req.query;
  const apiResponse = await axios
    .get(`https://api.coincap.io/v2/rates/${queryParam.currency}`)
    .then((obj) => obj.data);
  const servResp = {
    usd: apiResponse.data.rateUsd,
  };
  res.send(servResp);
};

module.exports = {
  getRateUsd,
};
