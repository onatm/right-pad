module.exports = rightpad;

function rightpad (str, len, ch) {
  str = String(str);

  var i = -1;

  if (ch===true) ch = String.fromCharCode(Math.floor(Math.random()*93)+33); //feelingLucky
  if (!ch && ch !== 0) ch = ' ';

  len = len - str.length;

  while (++i < len) {
    str = str + ch;
  }

  return str;
}
