(function () {
    'use strict';

    angular
        .module('app')
        .component('mapComponent', {
            bindings: {
                country: '<'
            },
            controller: MapCtrl,
            templateUrl: 'app/components/map/map-tpl.html',
        });

    /** @ngInject */
    function MapCtrl() {

        var vm = this;
        vm.highlightCountry = highlightCountry;
        vm.$postLink = $postLink;
        vm.$onChanges = $onChanges;

        ////////////////////////////////////

        function $postLink() {

            var s = Snap("#map");

            Snap.load("app/assets/svg/world.svg", function (data) {
                var g = data.select('g');
                s.append(g);
                s.attr({ viewBox: "0 0 1000 700" });

                if (vm.country) {
                    highlightCountry();
                }
            });
        }

        function $onChanges(changes) {

            if (changes.country.isFirstChange()) {
                return;
            }

            vm.country = angular.copy(changes.country.currentValue);
            vm.highlightCountry();
        }

        function highlightCountry() {

            if (!vm.country) {
                return;
            }

            Snap("#map")
                .select('#' + vm.country)
                .attr({ class: 'land--active' });
        }
    }
}());