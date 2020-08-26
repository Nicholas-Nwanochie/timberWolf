"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var thisArray = ['I', 's', 'a', ' ', 'a', 'b', ' ', 'h', 'c', 'i', 'p', 'd', 'p', 'o', 'e', 'p', 'o', 'f', 't', 'a', 'g', 'm', 'u', 'h', 's', ' ', 'i', 'a', ' ', 'j', 'h', 'i', 'k', 'p', 'p', 'l', 'o', 'p', 'm', 'o', 't', 'n', 'a', 'm', 'o', 'u', 's', 'p', ' ', 'o', 'q', 'r', ' ', 'r', 'j', 'u', 's', 's', 't', 't', ' ', 'a', 'u', ' ', 'r', 'v', 'e', 'a', 'w', 'l', 'l', 'x', 'y', ' ', 'y', 'c', 'o', 'z', 'o', 'l', 'a', ' ', 'o', 'b', 'p', 'o', 'c', 't', 'a', 'd', 'm', 'u', 'e', 's', '?', 'f', ' ', '-', 'g', ' ', 'M', 'h', 'i', 't', 'i', 'c', 'h', 'j', ' ', 'H', 'k', 'e', 'd', 'l', 'b', 'e', 'm', 'r', 'g', 'n'];

while (true) {
  for (var i = 0; i < thisArray.size(); i++) {
    if (i % 3 == 0) {
      //Every 3rd element 
      var word = thisArray.toString(i);
      thisArray.remove(i);
    }
  }
}

var _default = thisArray;
exports["default"] = _default;