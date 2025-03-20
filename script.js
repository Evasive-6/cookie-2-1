const crypto = require('crypto');

const encrypt = (payload) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
  let encrypted = cipher.update(JSON.stringify(payload), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { token: encrypted, iv: iv.toString('hex') };
};

const decrypt = (encryptedData) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, Buffer.from(encryptedData.iv, 'hex'));
  let decrypted = decipher.update(encryptedData.token, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return JSON.parse(decrypted);
};
