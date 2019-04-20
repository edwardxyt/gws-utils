/**
 * @Description: 这是gws-cli的工具集入口
 * @author Edward Xia
 * @date 2019-04-19
*/
const path = require('path');
const version = require("./package.json").version;
const log = console.log;

const init = require('./lib/getModules.js');
// const cwd = process.cwd();
// const rootPath = path.resolve(__dirname, "../");
let gwsUtils = init.getModules(path.join(__dirname, './lib'),'.js');

// node server
exports = module.exports = gwsUtils;
module.exports.version = version;