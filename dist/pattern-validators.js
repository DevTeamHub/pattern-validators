/**
* Pattern Validators
* https://github.com/DevTeamHub/pattern-validators
* (c) 2016 Dev Team Inc. http://dev-team.com
* License: MIT
*/

var patternValidatorsModule = angular.module('dev-team-pattern-validators', []);

patternValidatorsModule.directive("dtNumber", dtNumberValidator)
          			   .directive("dtDecimal", dtDecimalValidator)
          			   .directive("dtUrl", dtUrlValidator); 

function patternValidator (name, pattern){
	  return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attributes, ctrl) {

            var numberRegexp = new RegExp(pattern);

            var validator = function(value) {
                var isValid = ctrl.$isEmpty(value) || numberRegexp.test(value);
                ctrl.$setValidity(name, isValid);
                return value;
            };

            ctrl.$formatters.push(validator);
            ctrl.$parsers.unshift(validator);
        }
    };
}

function dtNumberValidator() {
    return patternValidator("number", "^\\d+$");
}

function dtDecimalValidator() {
    return patternValidator("decimal", "^\\d+(\\.\\d+)?$");
}

function dtUrlValidator() {
    return patternValidator("url", "^[a-zA-Z0-9-./:]+$");
}