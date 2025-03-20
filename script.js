const jwt = require('jsonwebtoken');
const secretKey = 'w87yusgftcxvb nmlpaszxy';

const encrypt = (payload) => {
  const token = jwt.sign(payload, secretKey, { expiresIn: '1y' });
  return token;
};

const decrypt = (token) => {
  try {
    const decodedPayload = jwt.verify(token, secretKey);
    return decodedPayload;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

module.exports = {
  encrypt,
  decrypt
};
