const fs = require('fs');
const path = require('path');

const fileExists = (url) => {
    if(fs.existsSync(url)) {
        return true
    } else {
        return false
    }
};

const relativeToAbsolute = (url) => {
    return path.resolve(url)
};

module.exports = {
    fileExists,
    relativeToAbsolute
}