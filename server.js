const express = require('express');
const app = express();
let daytime;
let date;
function getDate(){
    let now = new Date();
    daytime = (now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds());
    date = (now.getUTCDate() + '.' + (now.getMonth()+1) + '.' + now.getUTCFullYear());
    return console.log(`${date}, ${daytime}`)
}
var myArgs = process.argv.slice(2);
let i = parseInt(myArgs[1]);
let t = parseInt(myArgs[3]);

const intervalObj = setInterval(getDate,i);

const timeoutObj = setTimeout(()=>{
clearInterval(intervalObj)},t);

app.get('/', function (req, res) {
    res.send(`${date}, ${daytime}`)
})
var server = app.listen(3000, function(){
    console.log(`Starting\nServer is running on 3000`)
});