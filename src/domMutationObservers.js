// src/domMutationObservers.js

/**
 * Initialize DOM Mutation Observers
 * @param {function} callback - Callback function to be executed when mutations occur
 * @param {object} options - Options for the MutationObserver
 * @returns {MutationObserver} - The MutationObserver instance
 */
function initMutationObservers(callback, options) {
    // Create a new MutationObserver instance
    const observer = new MutationObserver(callback);
    
    // Start observing mutations
    observer.observe(document.body, options);

    // Return the MutationObserver instance
    return observer;
}

// Export the function for use in other modules
module.exports = initMutationObservers;
