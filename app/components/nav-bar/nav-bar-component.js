(function () {
    'use strict';

    angular
        .module ('app')
        .component ('navBarComponent', {
            templateUrl: 'app/components/nav-bar/nav-bar-tpl.html',
            bindings: {
                title: '@'
            }
        });
} ());