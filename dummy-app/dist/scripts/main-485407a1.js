"use strict";var myApp=angular.module("myApp",["ngRoute","myApp.utilityService","myApp.constants","myApp.directives","myApp.filters","myApp.services","myApp.controller"]);myApp.config(["$routeProvider",function(e){e.when("/page1",{templateUrl:"partials/page1.html",controller:"sampleCtrl"}),e.otherwise({redirectTo:"/page1"})}]);var controllerModule=angular.module("myApp.controller",[]);controllerModule.controller("sampleCtrl",["$scope",function(){}]);var serviceModule=angular.module("myApp.services",[]);serviceModule.factory("sampleFactory",["$http",function(e){return{testFunction:function(){return e.get("http://www.td.com/api/getContacts")},testFunction2:function(){return"test2"}}}]);var directiveModule=angular.module("myApp.directives",[]);directiveModule.directive("sampleDirective",["$scope",function(){return{restrict:"E",transclude:!0,scope:{},controller:function(){},link:function(){},replace:!0,templateUrl:""}}]);var filtersModule=angular.module("myApp.filters",[]);filtersModule.filter("simpleFilter",function(){return function(e){try{}catch(t){console.log("utcToDate :::::: ERROR: "+t)}return e}});var constantsModule=angular.module("myApp.constants",[]);constantsModule.constant("liaisonConstants",{appName:"Liaison My Psych Track",loginErrorUsernamePassword:"You must enter username and password to log in",loginErrorInvalidCredentials:"Invalid credentials,Try Again!"});var utilityModule=angular.module("myApp.utilityService",[]);utilityModule.service("utilService",["$timeout",function(e){this.showLoader=function(){e(function(){},2e3)},this.dismissProgress=function(){e(function(){},2e3)}}]);