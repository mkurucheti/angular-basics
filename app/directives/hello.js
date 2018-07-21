module.exports = function(app){
    app.directive('hello', function(){
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'directives/hello.html',
            controllerAs: 'hello',
            controller: function(){
                var hello = this;

                hello.greetings = "Hi there!"
            }
        };
    });
};