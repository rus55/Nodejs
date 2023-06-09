const fs = require('fs');

exports.readJsonFromFile = (filePath) => {
    let promise = new Promise( (resolve, reject) => {
        fs.readFile(filePath, function(err, buf) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(buf.toString()));
            }
        })
    } );
    return promise;
}

exports.writeJsonToFile = (filePath, data) => {
    let promise = new Promise( (resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) reject(err)
            resolve()
        })
    } );
    return promise;
}