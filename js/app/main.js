define(['jquery', 'app/controller/c'], function ($, controller) {
    $.getJSON("/uuwatch_requirejs/json/data.json")
        .done(function (result) {
            controller.setModel(result);
            controller.render();
        })
        .fail(function (error) {
            alert('error');
        });
});