var fs = require('fs'),
    readline = require('readline');

// Read text file and make an array out of each of it's lines.
var towns = fs.readFileSync('EHko herriak').toString().split('\n');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("  _   _       _                               ");
console.log(" | | | | __ _| |__   ___ _ __ ___  _   _ ___  ");
console.log(" | |_| |/ _` | '_ \\ / _ \\ '_ ` _ \\| | | / __| ");
console.log(" |  _  | (_| | |_) |  __/ | | | | | |_| \\__ \\ ");
console.log(" |_| |_|\\__,_|_.__/ \\___|_| |_| |_|\\__,_|___/ ");
console.log("                          _                   ");
console.log("  _ __   ___  _ __  _   _| |_   _ _ __ ___    ");
console.log(" | '_ \\ / _ \\| '_ \\| | | | | | | | '_ ` _ \\   ");
console.log(" | |_) | (_) | |_) | |_| | | |_| | | | | | |  ");
console.log(" | .__/ \\___/| .__/ \\__,_|_|\\__,_|_| |_| |_|  ");
console.log(" |_|         |_|                              ");
console.log("");
console.log(" Eneko <contact@eneko.me> | v 1.0 | GPL lic.");
console.log("");

rl.question(' Dituen letrak (komaz bereizita): ', function(answer) {
  var contains = answer.trim().split(',');

  for (var i = contains.length - 1; i >= 0; i--) {
    contains[i] = contains[i].trim();
    if (contains[i] === '') {
      contains.splice(i, 1);
    }
  };

  var i = towns.length;
  while (i--) {
    for (var j = 0; j < contains.length; j++) {
      var matches = towns[i].match(new RegExp(contains[j].charAt(0), 'gi'));

      if ((matches === null) || (!(matches.length === contains[j].length))) {
        towns.splice(i, 1);
        break;
      }

    };
  };

  rl.question(' Ez dituen letrak (komaz bereizita): ', function(answer) {
    var doesNotContain = answer.trim().split(',');

    for (var i = doesNotContain.length - 1; i >= 0; i--) {
      doesNotContain[i] = doesNotContain[i].trim();
      if (doesNotContain[i] === '') {
        doesNotContain.splice(i, 1);
      }
    };

    var i = towns.length;
    while (i--) {
      for (var j = 0; j < doesNotContain.length; j++) {
        var matches = towns[i].match(new RegExp(doesNotContain[j].charAt(0), 'i'));

        if (matches !== null) {
          towns.splice(i, 1);
          break;
        }

      };
    };

    console.log();
    console.log(' Erantzun posibleak:');
    for (var i = towns.length - 1; i >= 0; i--) {
      console.log(' ' + towns[i]);
    };
    rl.close();
  });

});

for (var i = 0; i < towns.length; i++) {
  towns[i]
};