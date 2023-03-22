var steps = 0;
var stepTotal = 0;
var file = require('Storage').readFileSync('Steps_counter.json', 'utf8')
var jsFile = JSON.parse(file);
function newSteps(sentSteps) {
    steps = sentSteps;
    stepTotal += steps;
}
//pushes info to the file every hour (3600000)
setInterval(() => {
    var jsObj = {stepTotal};
    jsFile.push(jsObj);
}, 3600000);
