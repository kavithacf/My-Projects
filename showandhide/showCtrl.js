angular.module("showHide" , [])
.controller("showCtrl" ,function($scope){

	var employees = [
{name:"Mathan", salary:"23000" , subject:"social" , gender:"male" },
{name:"Michale", salary:"13000" , subject:"english" , gender:"male" },
{name:"John", salary:"15000" , subject:"computer" , gender:"male" },
{name:"Preethi", salary:"20000" , subject:"chemistry" , gender:"female" },
{name:"Edward", salary:"13000" , subject:"Physics" , gender:"male" },
{name:"Jeni", salary:"10000" , subject:"tamil" , gender:"female" }


	];
	$scope.employees = employees;

});