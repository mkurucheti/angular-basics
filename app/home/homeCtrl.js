module.exports = function(app){

    app.controller("HomeController", function(){
        var vm = this;
        vm.name = "Murali!";
        vm.message = "Welcome to the portal"
    })
}