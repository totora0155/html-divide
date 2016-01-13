'use strict';

class HtmlDivider {
  constructor(src) {
    this.src = src;
  }

  divide() {
    const re = /<!--\s?divide:([^\s]+)\s?-->([\s\S]*?)<!--\s?enddivide\s?-->/g;
    var result = this.src;
    var blocks = {};

    var block = re.exec(this.src);
    while(block) {
      result = result.replace(block[0], '');
      const name = block[1],
        content = block[2].trim();
      blocks[name] = content;
      block = re.exec(this.src);
    }
    blocks.content = result.trim().replace(/\n+/, "\n");
    return blocks;
  }
}

module.exports = HtmlDivider;
