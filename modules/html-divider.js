'use strict';

class HtmlDivider {
  constructor(src) {
    this.src = src;
  }

  divide() {
    const re = /<!--\s?divide:([^\s]+)\s?-->([\s\S]*?)<!--\s?enddivide\s?-->/g;
    var blocks = {};

    var block = re.exec(this.src);
    while(block) {
      const name = block[1],
        content = block[2];
      blocks[name] = content;
      block = re.exec(this.src);
    }
    return blocks;
  }
}

module.exports = HtmlDivider;
