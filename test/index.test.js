// test/domMutationObservers.test.js

const assert = require('assert');
const initMutationObservers = require('../src/domMutationObservers');

describe('DOM Mutation Observers Tests', function() {
    it('should observe DOM mutations', function() {
        const mutations = [];
        const observerCallback = function(mutationsList, observer) {
            mutations.push(mutationsList);
        };

        const observerOptions = {
            childList: true,
            subtree: true
        };

        const observer = initMutationObservers(observerCallback, observerOptions);

        // Simulate DOM mutation (e.g., adding/removing elements)
        document.body.innerHTML = '<div id="test">Test</div>';

        assert.strictEqual(mutations.length, 1);
        assert.strictEqual(mutations[0].length, 1); // Assuming one mutation occurred
    });
});
