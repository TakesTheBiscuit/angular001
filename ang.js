var app = angular.module('myApp', []);
app.controller('pdControllerOne', function($scope, $http) {
  $scope.choiceSet = {
    choices: []
  };
  $scope.skuSet = 
    [
    {"name":"stock item one", "price": 0.50},
    {"name":"stock item two", "price":21.99}
    ]
  ;
  $scope.quest = {};
  $scope.choiceSet.choices = [];
  $scope.changeFields = function(){
  	var iterator = 0;
    $scope.choiceSet.choices = []; //empty all choices
    while (iterator < $scope.fields.count) {
    	 $scope.choiceSet.choices.push('');
       iterator++;
    }
    
  };

});
