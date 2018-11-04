angular.module('myApp',[]).controller('myCtrl' , function($scope){
	var namelists =[
	{firstName :"Mary",   lastName:"jonh" , gender:"23" , education:"B.e(computer",like: 0, dislike: 0 },
    {firstName :"Jeni",   lastName:"tan" ,  gender:"24" ,education:"B.e(computer" , like: 0, dislike: 0 },
    {firstName :"Sheeba", lastName:"jake" , gender:"27" ,education:"B.e(computer" , like: 0, dislike: 0 },
    {firstName :"Anclin", lastName:"j" ,   gender:"28" , education:"B.e(computer" , like: 0, dislike: 0 },
    {firstName :"Ragavi", lastName:"su" ,   gender:"27" , education:"B.e(computer" , like: 0, dislike: 0 }
	];
	$scope.namelists = namelists;

	$scope.incrementLike = function (namelist){
		namelist.like++;

	};
	$scope.incrementDislike = function (namelist){
		namelist.dislike++;


	};

});

