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

const fileIsMD = (url) => {
    if(path.basename(url).substr(-3) === '.md') {
        return true;
    } else {
        return false
    };
};

const fileHasContent = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            };
            resolve(data);
        });
    });
};

const getHrefWithText = (url) => {
    //fileHasContent(url).then((data) => {
      //  console.log(data.replace( /(^.*\[|\].*$)/g, '' ));
    //});
};

module.exports = {
    fileExists,
    relativeToAbsolute,
    fileIsMD,
    fileHasContent,
    getHrefWithText,
}