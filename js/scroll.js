



var myapp = angular
              .module("MyApp",['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
              .controller("AppCtrl",function($scope, $http) {




// add the dict here and erase this moreover to refer these item in the index.html there i have designed a div in which
//i have used "item in employees"where employes is the name of scope variable 
//to use these follow the syntax {{item.variableName}}



      $scope.greeting = [];

      $http.get('http://ec2-35-164-83-142.us-west-2.compute.amazonaws.com:8000/lounge?location=ConnaughtPlace').
        then(function(response) {
            //$scope.greeting = response.data;
            //to get all the properties contained in the json object we can check it up by Object.getOwnPropertyNames(name of object)
            //alert(Object.getOwnPropertyNames(response.data));

            //alert(Object.getOwnPropertyNames(response.data));

            noOfKeys = Object.keys(response.data).length;
            $scope.name = [];
            $scope.text_summary = [];
            $scope.location1 = [];
            $scope.img1url = [];
            $scope.address = [];

            for (i = 1; i <= noOfKeys ; i++){
                n = i.toString();
                //alert(response.data[n]['name']);

                name = response.data[n]['name'];
                $scope.name.push(name);
                //$scope.name = name;
                text_summary = response.data[n]['text_summary'];
                $scope.text_summary.push(text_summary);
                //$scope.text_summary = text_summary;
                location1 = response.data[n]['location'];
                $scope.location1.push(location1);
                //$scope.location1 = location1;
                img1url = response.data[n]['img1url'];
                $scope.img1url.push(img1url);
                //$scope.img1url = img1url;
                address = response.data[n]['address'];
                $scope.address.push(address);
                //$scope.address = address;
            }
        });


    // set the default amount of items being displayed
    $scope.limit= 1;


    // loadMore function
    $scope.loadMore = function() {
      $scope.limit = 1000;
    };
      
    });
    



