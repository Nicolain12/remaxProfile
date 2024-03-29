const fs = require('fs');

module.exports = {
    index: function (req, res, next) {
        res.render('index');
    },
};
