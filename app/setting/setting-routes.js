module.exports = [
    '$routeProvider',
function (
    $routeProvider
) {
    /* todo: these routes should only exist when the user is admin! */
    $routeProvider
    .when('/settings', {
        redirectTo: '/settings/general'
    })
    .when('/settings/general', {
        controller: require('./controllers/setting-general-controller.js'),
        templateUrl: 'templates/settings/settings.html'
    })
    .when('/settings/appearance', {
        controller: require('./controllers/setting-map-settings.js'),
        templateUrl: 'templates/settings/map-settings.html'
    })
    .when('/settings/plugins', {
        controller: require('./controllers/setting-plugins-controller.js'),
        templateUrl: 'templates/settings/todo.html'
    })
    .when('/settings/forms', {
        controller: require('./controllers/setting-forms-controller.js'),
        templateUrl: 'templates/settings/todo.html'
    })
    .when('/settings/categories', {
        controller: require('./controllers/setting-categories-controller.js'),
        templateUrl: 'templates/settings/categories.html'
    })
    .when('/settings/categories/create', {
        controller: require('./controllers/setting-categories-create-controller.js'),
        templateUrl: 'templates/settings/categories-edit.html'
    })
    .when('/settings/categories/:id', {
        controller: require('./controllers/setting-categories-edit-controller.js'),
        templateUrl: 'templates/settings/categories-edit.html'
    })
    .when('/settings/views', {
        controller: require('./controllers/setting-views-controller.js'),
        templateUrl: 'templates/settings/todo.html'
    })
    .when('/settings/users', {
        controller: require('./controllers/setting-users-controller.js'),
        templateUrl: 'templates/settings/users.html'
    })
    .when('/settings/users/create', {
        controller: require('./controllers/setting-users-create-controller.js'),
        templateUrl: 'templates/settings/users-edit.html'
    })
    .when('/settings/users/:id', {
        controller: require('./controllers/setting-users-edit-controller.js'),
        templateUrl: 'templates/settings/users-edit.html'
    })
    .when('/settings/roles', {
        controller: require('./controllers/setting-roles-controller.js'),
        templateUrl: 'templates/settings/todo.html'
    });

}];
