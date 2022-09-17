const twinBcrypt = require('twin-bcrypt');

function symfonyPasswordComparator(plain, encoded) {
    return new Promise((resolve) => {
        return twinBcrypt.compare(plain, encoded, (result) => {
            resolve(result);
        });
    });
}

module.exports = symfonyPasswordComparator;