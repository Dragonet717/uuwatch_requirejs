/**
 * @file 公共配置文件
 * @author zhoufei@uuwatch.com
 */
(function () {

    // 项目根路径，这个会跟着外层入口index.html而变化
    var app_controller = '../app/controller/';
    var app_model = '../app/model/';
    var common = '../common/';
    var util = '../util/';

    var tpl = '/uuwatch_requirejs/tpl/';

    requirejs.config({
        baseUrl: 'js/lib', /** 基准url：指定requireJs加载js文件的根路径,它是相对于引用require.js的html页面来定的 */
        paths: {
            /** LIB(第三方库) */
            jquery: 'jquery',   /** jquery */
            jPlayer: 'jPlayer', /** jPlayer */
            text: 'text',       /** 模板加载引擎 */
            hbs: 'handlebars',  /** handlebars模板引擎 */

            /** APP -> CONTROLLER */
            ctrlBase: app_controller + 'Base', /** controller base*/
            ctrl1: app_controller + 'c1', /** controller c1 */

            /** APP -> MODEL */
            modelBase: app_model + 'Base', /** model base */
            model1: app_model + 'm1', /** model m1 */

            /** UTIL */
            hbsUtil: util + 'HbsUtil',         /** handlebars的自定义标签扩展工具 */
            generalUtil: util + 'GeneralUtil', /** 页面元素渲染工具 */

            /** COMMON */
            costs: common + 'Constants', /** 常量 */

            /** TPL */
            list: tpl + 'list.html' /** 列表模板 */
        }
    });
})();