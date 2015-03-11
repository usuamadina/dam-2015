var todoApp = angular.module('todoApp',[]);

todoApp.controller('TodoController', ['$scope', function($scope){ // elscope es la única forma que tenemos de comunicarnos con la vista
     var todos = [];
    todos.push({done:false, task: 'Aprender AngularJS'});
    todos.push({done:false, task: 'Aprender Ionic'});
    todos.push({done:false, task: 'Aprender Javascript'});

    $scope.todos= todos; //indicamos que hay unos todo's que tiene que tener en cuenta
    $scope.addTodo= function(){
        todos.push({done:false, task: $scope.inputText});
        $scope.inputText = '';
        
    };

}]);
console.log('$scope');
