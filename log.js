var log = {

    p: function(output) {
      console.log(output);
    },

    start: function(output) {
      template = `<div style='color: #FFFF00'>-------------------------------------------------<br>${output}</div>`

      console.log(template);
    },

    big: function(output) {
      console.log('<h1>'+output+'</h1>');
    }
};

module.exports = log;
