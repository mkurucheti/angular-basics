module.exports = function(app){
    
    require('./homeDirective')(app);
    require('./homeCtrl')(app);
};