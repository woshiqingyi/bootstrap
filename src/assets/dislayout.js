'use strict'
window.onresize = () => {
    return (() => {
        test()
    })();
  };

var test = function () {
      return  document.documentElement.clientWidth  
};

module.exports = {
    test: test,
}
