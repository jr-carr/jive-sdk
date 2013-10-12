var jive = require('jive-sdk');

exports.task = new jive.tasks.build(
    // runnable
    function() {
        jive.logger.info("A task ran!");
    },

    // interval (optional)
    1000
);

exports.onBootstrap = function() {
    jive.logger.info("This should have run on service bootstrap!");
};

