/**
 * @fileOverview Main entry point for RequireJS
 */

require(
    // Note that traditional requireJs syntax is used here to specify dependencies.
    // This is only necessary since this is the entrypoint of the application;
    // this syntax should not be used in any other modules.
    [
        'App',
        'jquery'
    ],
    function(
        App,
        $
    ) {
        'use strict';
        
        $(document).ready(function () {
            window.app = new App();
            window.app.init();
        });
    }
);