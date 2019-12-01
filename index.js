var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');


// fs.stat('./cat.jpg', function (err, stats) {
//     var statMode = new StatMode(stats);
//     console.log(statMode.toString());
// });

// fs.readFile('./text.txt', 'utf-8', function (err, data) {
//     console.log('Before adding new text'.blue);
//     console.log(data);
//     fs.appendFile('./text.txt', '\n + Text 2', function (err) {

//         if (err) throw err;
//         console.log('Text added!'.blue);
//         fs.readFile('./text.txt', 'utf-8', function (err, data) {
//             console.log('After adding new text'.blue);
//             console.log(data);
//         });
//     });
// });

fs.readdir('./', (err, data) => {

    if (err) return console.log("Error: ", err);
    console.log("Folder contents: ",
        data);
    fs.writeFile('contents.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});