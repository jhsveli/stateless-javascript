var config, observer, registeredSelectors;

registeredSelectors = {};
$(function () {


observer = new MutationObserver(function(mutations) {
  console.log("WAT");
  var cb, i, len, mutation, newNodes, node, results, selector;
  results = [];
  for (i = 0, len = mutations.length; i < len; i++) {
    mutation = mutations[i];
    newNodes = mutation.addedNodes;
    if (newNodes) {
      results.push((function() {
        var j, len1, results1;
        results1 = [];
        for (j = 0, len1 = newNodes.length; j < len1; j++) {
          node = newNodes[j];
          console.log(node);
          results1.push((function() {
            var results2;
            results2 = [];
            for (selector in registeredSelectors) {
              cb = registeredSelectors[selector];
              if ($(node).find(selector).length >= 0) {
                results2.push(cb());
              } else {
                results2.push(void 0);
              }
            }
            return results2;
          })());
        }
        return results1;
      })());
    } else {
      results.push(void 0);
    }
  }
  return results;
});

config = {
  attributes: true,
  childList: true,
  characterData: true
};
debugger;
observer.observe(document.body, config);
});

window.stateless = window.stateless || {};

window.stateless.load = function(selector, cb) {
  return registeredSelectors[selector] = cb;
};
