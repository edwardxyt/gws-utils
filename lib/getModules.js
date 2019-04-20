const fs = require('fs');
const log = console.log;

module.exports.getModules = (dir, type) => {
    let gwsUtils = {};
    fs.readdirSync(dir).filter(f => {
        return f.endsWith(type);
    }).forEach((f) => {
        let key = f.replace(type, '');
        let module = require(`${dir}/${f}`);
        gwsUtils[key]= module[key];
    });
    return gwsUtils;
};