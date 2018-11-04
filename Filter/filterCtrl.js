angular.module("filterApp" , [])
.controller("filterCtrl", function($scope) {
	var employees = [
    {name:"kani", dob: new Date("november, 2,1990"), gender:"female",salary:"3784.89", salarynum:"45545.34"},
    {name:"Clara", dob: new Date("november, 2,1990"), gender:"female",salary:"2889", salarynum:"45545.34"},
    {name:"Mark", dob: new Date("november, 2,1990"), gender:"male",salary:"23434", salarynum:"45545.34"},
    {name:"kani", dob: new Date("november, 2,1990"), gender:"male",salary:"23434", salarynum:"45545.34"},
    {name:"Ben", dob: new Date("january, 3,1898"), gender:"male",salary:"23434", salarynum:"45545.34"},
    {name:"jenfier", dob: new Date("november, 2,1990"), gender:"female",salary:"23434", salarynum:"45545.34"},
    {name:"Michale", dob: new Date("november, 2,1990"), gender:"male",salary:"23434", salarynum:"45545.34"}

	] ;
	$scope.employees = employees;
	$scope.rowLimit = 3;
});