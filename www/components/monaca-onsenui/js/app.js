// This is a JavaScript file

// app.js

var module= ons.bootstrap(); 
module.controller('BookController', ['$scope', '$http', function ($scope, $http) {                            
    $http.get("https://whispering-woodland-9020.herokuapp.com/getAllBooks").success(function(data, status) {                    
            $scope.data = data;                            
        });
                                
}]);
        
                        
module.controller('FSController', ['$scope', '$http', function ($scope, $http) {    
    $scope.getFutsalList=function(){         
       // $http.get("http://www.futsalsansar.com/webservice/Futsal/futsals?id=7") 
       //$http.get("https://whispering-woodland-9020.herokuapp.com/getAllBooks")
        $http.get("http://www.futsalsansar.com/Api/getFeaturedFutsalList").success(function(data) {                    
            $scope.data = data;    
           alert(data);
        }); 
                                              
    }
}]);