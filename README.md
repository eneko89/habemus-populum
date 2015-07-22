habemus-populum
===

A simple quick 'n dirty script that helps you solve the "Habemus populum" game in the basque "Gaztea" radio station (broadcasted in the mornings show "Dida").

In the game, people calls by telephone and must guess a basque city or town name. Participants propose letters they think the town name may contain, and through hits and faults, they eventually find out the town name.

The script filters a list with the 677 basque towns. Letters it contains and those it doesn't contain will be promted by the script, and must be introduced comma separated. To specify multiple occurrences, write the letter n times (e.g. to state that it contains 3 "a" and one f you would write "aaa, f").

===

"Gaztea" irratiko goizeetako "Dida" saioan igortzen den "Habemus populum" lehiaketa irabazten laguntzen duen programa.

Lehiaketan, partehartzaileek telefonoz deitu eta euskal herri ezkutu baten izena asmatu behar dute. Horretarako, letrak botatzen dituzte, eta dituen eta ez dituenen arabera, herriaren izena asmatzen doaz.

Programa honek Euskal Herriko 677 herrien izenen zerrenda batean zehar bilatzen ditu erantzun posibleak. Herriak dituen eta ez dituen letrak programak berak eskatuko ditu, eta komaz bereizita idatzi behar dira. Baldintza horiek betetzen ez dituzten herriak baztertuak izango dira, erantzun posibleak erakutziz. Letra bat behin baino gehiagotan agertzen dela adierazteko, idatzi letra bera nahi adina aldiz (adibidez, herri batek 3 "a" eta "f" bakarra dituela adierazteko, idazti "aaa, f").

## Usage

Requires node and npm installed. In the command line:

```javascript
npm install
node HabemusPopulum.js

```

![Usage image](/usage.png?raw=true)