/**
 * Created by supershook on 2016/6/28.
 */
var filterApp = angular.module("myApp.filter",[])
filterApp.filter("rJS",function () {

    return function (input,n1,n2) {
        console.log(input);
        console.log(n1);
        console.log(n2);
        return input.replace(n1,n2)
    }
})
