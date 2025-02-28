const crypto = require('crypto');

function generateApiToken() {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(32, (err, buffer) => {
      if (err) {
        reject(err);
        return;
      }
      const token = buffer.toString('base64url');
      resolve(token);
    });
  });
}

module.exports = generateApiToken;
