/******/!function(a){function t(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return a[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}// webpackBootstrap
/******/
var e={};return t.m=a,t.c=e,t.p="",t(0)}([function(a,t,e){"use strict";function n(a){return a&&a.__esModule?a:{"default":a}}var r=e(1),o=n(r),i=e(2),s=n(i);angular.module("upStartUp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ngRoute"]).controller("MainCtrl",o["default"]).controller("NavbarCtrl",s["default"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}])},function(a,t,e){"use strict";function n(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function o(a){n(this,o),a.awesomeThings=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"ES6 (Babel formerly 6to5)",url:"https://babeljs.io/",description:"Turns ES6+ code into vanilla ES5, so you can use next generation features today.",logo:"babel.png"}],a.awesomeThings.forEach(function(a){a.rank=Math.random()})};r.$inject=["$scope"],t["default"]=r,a.exports=t["default"]},function(a,t,e){"use strict";function n(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function o(a){n(this,o),a.date=new Date};r.$inject=["$scope"],t["default"]=r,a.exports=t["default"]}]),angular.module("upStartUp").run(["$templateCache",function(a){a.put("app/main/main.html",'<div class="container"><div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p><a class="btn btn-lg btn-success" ng-href="#">Splendid!</a></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{awesomeThing.logo}}" alt="{{awesomeThing.title}}"><div class="caption"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href="{{awesomeThing.url}}">{{awesomeThing.url}}</a></p></div></div></div></div><hr><div class="footer"><p>With ♥ from <a href="https://twitter.com/Swiip">@Swiip</a></p></div></div>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>')}]);