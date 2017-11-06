define(['jquery', './controller/c'], function ($, controller) {
    $.getJSON("/tpl/json/data.json", function (result) {
        controller.setModel(result);
        controller.render();
    });
});