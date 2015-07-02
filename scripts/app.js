/**
 * Created by Renan on 01/07/2015.
 */
angular.module('appRCM', ['ngNewRouter']);

angular.module('appRCM').controller('AppController', AppController);

AppController.$inject = ['$router'];

function AppController($router){
    console.log('AppController instantiated');
    $router.config([
        { path: '/', component: 'home' },
        { path: '/about', component: 'about'},
        { path: '/detail', component: 'detail' }
    ]);
    this.name = "Renan Morais";
}
