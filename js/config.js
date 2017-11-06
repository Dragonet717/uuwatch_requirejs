requirejs.config({
    baseUrl: 'js/lib', /** 基准url：指定requireJs加载js文件的根路径,它是相对于引用require.js的html页面来定的 */
    paths: {
        app: '../app',

        /** LIB */
        jquery: 'jquery',   /** jquery */
        jPlayer: 'jPlayer', /** jPlayer */
        text: 'text',       /** 模板加载引擎 */
        hbs: 'handlebars',  /** handlebars模板引擎 */

        /** UTIL */
        hbsUtil: '../util/HbsUtil',         /** handlebars的自定义标签扩展工具 */
        generalUtil: '../util/GeneralUtil', /** 页面元素渲染工具 */

        /** COMMON */
        costs: '../common/Constants' /** 常量 */

    }
});