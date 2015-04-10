// Chris McKinlay
// Programming from A to Z, Fall 2014
// https://github.com/cem3394/text

// Ported from Learning Processing
// https://github.com/mckinlay/LearningProcessing

// Example 17-1: Simple displaying text

function setup() {
  noCanvas();

  // Not drawing to canvas but making a DIV
  var div = createDiv('Strings!');
  // Size and color
  div.style('font-size','16pt');
  div.style('color','#AAAAAA');
} 