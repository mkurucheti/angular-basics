module.exports = function(app){
    app.directive('home', function(){
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'home/home.html',
            controllerAs: 'homeCtrl',
            controller: 'HomeController',
            bindToController: {

            }
        };
    })
};