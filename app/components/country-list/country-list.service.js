(function () {
    'use strict';

    angular
        .module('app')
        .service('countryListService', countryListService)

    /** @ngInject */
    function countryListService() {

        this.get = getCountries;

        function getCountries() {
            return [{ "id": "AE", "title": "United Arab Emirates" },
            { "id": "AF", "title": "Afghanistan" },
            { "id": "AL", "title": "Albania" },
            { "id": "AM", "title": "Armenia" },
            { "id": "AO", "title": "Angola" },
            { "id": "AR", "title": "Argentina" },
            { "id": "AT", "title": "Austria" },
            { "id": "AU", "title": "Australia" },
            { "id": "AZ", "title": "Azerbaijan" },
            { "id": "BA", "title": "Bosnia and Herzegovina" },
            { "id": "BD", "title": "Bangladesh" },
            { "id": "BE", "title": "Belgium" },
            { "id": "BF", "title": "Burkina Faso" },
            { "id": "BG", "title": "Bulgaria" },
            { "id": "BI", "title": "Burundi" },
            { "id": "BJ", "title": "Benin" },
            { "id": "BN", "title": "Brunei Darussalam" },
            { "id": "BO", "title": "Bolivia" },
            { "id": "BR", "title": "Brazil" },
            { "id": "BS", "title": "Bahamas" },
            { "id": "BT", "title": "Bhutan" },
            { "id": "BW", "title": "Botswana" },
            { "id": "BY", "title": "Belarus" },
            { "id": "BZ", "title": "Belize" },
            { "id": "CA", "title": "Canada" },
            { "id": "CD", "title": "Democratic Republic of Congo" },
            { "id": "CF", "title": "Central African Republic" },
            { "id": "CG", "title": "Republic of Congo" },
            { "id": "CH", "title": "Switzerland" },
            { "id": "CI", "title": "Côte d'Ivoire" },
            { "id": "CL", "title": "Chile" },
            { "id": "CM", "title": "Cameroon" },
            { "id": "CN", "title": "China" },
            { "id": "CO", "title": "Colombia" },
            { "id": "CR", "title": "Costa Rica" },
            { "id": "CU", "title": "Cuba" },
            { "id": "CY", "title": "Cyprus" },
            { "id": "CZ", "title": "Czech Republic" },
            { "id": "DE", "title": "Germany" },
            { "id": "DJ", "title": "Djibouti" },
            { "id": "DK", "title": "Denmark" },
            { "id": "DO", "title": "Dominican Republic" },
            { "id": "DZ", "title": "Algeria" },
            { "id": "EC", "title": "Ecuador" },
            { "id": "EE", "title": "Estonia" },
            { "id": "EG", "title": "Egypt" },
            { "id": "EH", "title": "Western Sahara" },
            { "id": "ER", "title": "Eritrea" },
            { "id": "ES", "title": "Spain" },
            { "id": "ET", "title": "Ethiopia" },
            { "id": "FK", "title": "Falkland Islands" },
            { "id": "FI", "title": "Finland" },
            { "id": "FJ", "title": "Fiji" },
            { "id": "FR", "title": "France" },
            { "id": "GA", "title": "Gabon" },
            { "id": "GB", "title": "United Kingdom" },
            { "id": "GE", "title": "Georgia" },
            { "id": "GF", "title": "French Guiana" },
            { "id": "GH", "title": "Ghana" },
            { "id": "GL", "title": "Greenland" },
            { "id": "GM", "title": "Gambia" },
            { "id": "GN", "title": "Guinea" },
            { "id": "GQ", "title": "Equatorial Guinea" },
            { "id": "GR", "title": "Greece" },
            { "id": "GT", "title": "Guatemala" },
            { "id": "GW", "title": "Guinea-Bissau" },
            { "id": "GY", "title": "Guyana" },
            { "id": "HN", "title": "Honduras" },
            { "id": "HR", "title": "Croatia" },
            { "id": "HT", "title": "Haiti" },
            { "id": "HU", "title": "Hungary" },
            { "id": "ID", "title": "Indonesia" },
            { "id": "IE", "title": "Ireland" },
            { "id": "IL", "title": "Israel" },
            { "id": "IN", "title": "India" },
            { "id": "IQ", "title": "Iraq" },
            { "id": "IR", "title": "Iran" },
            { "id": "IS", "title": "Iceland" },
            { "id": "IT", "title": "Italy" },
            { "id": "JM", "title": "Jamaica" },
            { "id": "JO", "title": "Jordan" },
            { "id": "JP", "title": "Japan" },
            { "id": "KE", "title": "Kenya" },
            { "id": "KG", "title": "Kyrgyzstan" },
            { "id": "KH", "title": "Cambodia" },
            { "id": "KP", "title": "North Korea" },
            { "id": "KR", "title": "South Korea" },
            { "id": "XK", "title": "Kosovo" },
            { "id": "KW", "title": "Kuwait" },
            { "id": "KZ", "title": "Kazakhstan" },
            { "id": "LA", "title": "Lao People's Democratic Republic" },
            { "id": "LB", "title": "Lebanon" },
            { "id": "LK", "title": "Sri Lanka" },
            { "id": "LR", "title": "Liberia" },
            { "id": "LS", "title": "Lesotho" },
            { "id": "LT", "title": "Lithuania" },
            { "id": "LU", "title": "Luxembourg" },
            { "id": "LV", "title": "Latvia" },
            { "id": "LY", "title": "Libya" },
            { "id": "MA", "title": "Morocco" },
            { "id": "MD", "title": "Moldova" },
            { "id": "ME", "title": "Montenegro" },
            { "id": "MG", "title": "Madagascar" },
            { "id": "MK", "title": "Macedonia" },
            { "id": "ML", "title": "Mali" },
            { "id": "MM", "title": "Myanmar" },
            { "id": "MN", "title": "Mongolia" },
            { "id": "MR", "title": "Mauritania" },
            { "id": "MW", "title": "Malawi" },
            { "id": "MX", "title": "Mexico" },
            { "id": "MY", "title": "Malaysia" },
            { "id": "MZ", "title": "Mozambique" },
            { "id": "NA", "title": "Namibia" },
            { "id": "NC", "title": "New Caledonia" },
            { "id": "NE", "title": "Niger" },
            { "id": "NG", "title": "Nigeria" },
            { "id": "NI", "title": "Nicaragua" },
            { "id": "NL", "title": "Netherlands" },
            { "id": "NO", "title": "Norway" },
            { "id": "NP", "title": "Nepal" },
            { "id": "NZ", "title": "New Zealand" },
            { "id": "OM", "title": "Oman" },
            { "id": "PA", "title": "Panama" },
            { "id": "PE", "title": "Peru" },
            { "id": "PG", "title": "Papua New Guinea" },
            { "id": "PH", "title": "Philippines" },
            { "id": "PL", "title": "Poland" },
            { "id": "PK", "title": "Pakistan" },
            { "id": "PR", "title": "Puerto Rico" },
            { "id": "PS", "title": "Palestinian Territories" },
            { "id": "PT", "title": "Portugal" },
            { "id": "PY", "title": "Paraguay" },
            { "id": "QA", "title": "Qatar" },
            { "id": "RO", "title": "Romania" },
            { "id": "RS", "title": "Serbia" },
            { "id": "RU", "title": "Russia" },
            { "id": "RW", "title": "Rwanda" },
            { "id": "SA", "title": "Saudi Arabia" },
            { "id": "SB", "title": "Solomon Islands" },
            { "id": "SD", "title": "Sudan" }, { "id": "SE", "title": "Sweden" },
            { "id": "SI", "title": "Slovenia" },
            { "id": "SJ", "title": "Svalbard and Jan Mayen" },
            { "id": "SK", "title": "Slovakia" },
            { "id": "SL", "title": "Sierra Leone" },
            { "id": "SN", "title": "Senegal" },
            { "id": "SO", "title": "Somalia" },
            { "id": "SR", "title": "Suriname" },
            { "id": "SS", "title": "South Sudan" },
            { "id": "SV", "title": "El Salvador" },
            { "id": "SY", "title": "Syria" },
            { "id": "SZ", "title": "Swaziland" },
            { "id": "TD", "title": "Chad" },
            { "id": "TF", "title": "French Southern and Antarctic Lands" },
            { "id": "TG", "title": "Togo" },
            { "id": "TH", "title": "Thailand" },
            { "id": "TJ", "title": "Tajikistan" },
            { "id": "TL", "title": "Timor-Leste" },
            { "id": "TM", "title": "Turkmenistan" },
            { "id": "TN", "title": "Tunisia" },
            { "id": "TR", "title": "Turkey" },
            { "id": "TT", "title": "Trinidad and Tobago" },
            { "id": "TW", "title": "Taiwan" },
            { "id": "TZ", "title": "Tanzania" },
            { "id": "UA", "title": "Ukraine" },
            { "id": "UG", "title": "Uganda" },
            { "id": "US", "title": "United States" },
            { "id": "UY", "title": "Uruguay" },
            { "id": "UZ", "title": "Uzbekistan" },
            { "id": "VE", "title": "Venezuela" },
            { "id": "VN", "title": "Vietnam" },
            { "id": "VU", "title": "Vanuatu" },
            { "id": "YE", "title": "Yemen" },
            { "id": "ZA", "title": "South Africa" },
            { "id": "ZM", "title": "Zambia" },
            { "id": "ZW", "title": "Zimbabwe" }];
        }
    }
}());