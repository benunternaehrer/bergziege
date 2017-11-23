const fs = require('fs');

// fs.readFile('./local.html', 'utf8', (err, html) => {
//     console.log(html);
// });

fs.readFile(__dirname + '/local.html', 'utf8', function(err, html){
    console.log(html);
    if(err) {
        console.log(err);
    } else {
        fs.writeFileSync('public/index.html', html);
    }
});

