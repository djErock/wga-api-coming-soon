
const moment = require('moment');

module.exports = {
    log: (req, res, next) => {
        console.log(`${ moment.utc(new Date()).format() }, ${ req.method }, ${ req.url }`);
        next();
    }
};