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

const intervalObj = setInterval(getDate,200);

const timeoutObj = setTimeout(()=>{
clearInterval(intervalObj)},3000);

app.get('/', function (req, res) {
    res.send(`${date}, ${daytime}`)
})
var server = app.listen(3000, function(){
    console.log(`Starting\nServer is running on 3000`)
});
//input from console -- ?