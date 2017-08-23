(function () {
    'use strict';

    angular
        .module('app')
        .component('countryListComponent', {
            bindings: {
                onSelect: '&'
            },
            controller: CountryListCtrl,
            templateUrl: 'app/components/country-list/country-list-tpl.html',
        });


    /** @ngInject */
    function CountryListCtrl(countryListService) {
        var vm = this;
        vm.$onInit = $onInit;
        vm.selectCountry = selectCountry;

        function $onInit() {
            vm.countries = countryListService.get();
        }

        function selectCountry(country) {
            vm.onSelect({ $event: { id: country } });
        }
    }

}());