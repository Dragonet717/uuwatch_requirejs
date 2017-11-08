define(['jquery', 'jPlayer', 'hbs', 'hbsUtil', 'generalUtil', 'text!list'], function ($, jPlayer, hbs, hbsUtil, gUtil, html) {
    function controllerBase() {
    }

    controllerBase.prototype = {
        APP_PREFIX: 'http://una.uuwatch.com/info/',
        MODULE_MONITOR: 'monitor/',
        setModel: function (model) {
            this.model = model;
        },
        render: function () {
            $('head').append(html);

            $('body').html((hbs.compile($('#tpl').html())(this.model.data)));

            this.domBindData();

            this.addEvent();
        },
        domBindData: function () {
            var prefix = "news_";
            var generalUtil = new gUtil();
            var flashHtml = generalUtil.flash.build();
            var data = this.model.data.data;
            for (var i = 0, len = data.length; i < len; i++) {
                var news = data[i];

                // 绑定数据到dom
                $('#' + prefix + news.id).data(prefix + news.id, news);

                // tv
                if (news.media === 1) {
                    $('#img_' + news.id).attr('src', generalUtil.tv.outPath(news.code, 'png'));
                    $("#emb_" + news.id).html(flashHtml);
                }

                // radio
                if (news.media === 256) {
                    generalUtil.radio.play(news.id, news.code);
                }
            }
        },
        addEvent: function () {
            var self = this;

            /** 电视图片&播放按钮事件绑定 */
            $('.tv-play').bind('click', function() {self.playTV(this);});

            /** 底部标签事件绑定 */
            /** 标记正负面 */
            $('.news-emotion').bind('click', function() {self.del(this);});
            /** 分享新闻 */
            $('.c_btn_share').bind('click', function() {self.share(this);});
            /** 添加报告 */
            $('.c_btn_report').bind('click', function() {self.addReport(this);});
            /** 添加标签 */
            $('.c_btn_tag').bind('click', function() {self.tagMark(this);});
            /** 原始新闻 */
            $('.c_btn_link').bind('click', function() {self.originalLink(this);});
            /** 新闻快照 */
            $('.c_btn_cache').bind('click', function() {self.cache(this);});
            /** 删除新闻 */
            $('.c_btn_remove').bind('click', function () {self.del(this);});
        },
        getNewsItem: function (obj) {
            return $("#" +$(obj).closest('.news').attr('id')).data($(obj).closest('.news').attr('id'));
        },
        playTV: function(obj) {
            (new gUtil()).tv.play(this.getNewsItem(obj).id);
        },
        /**
         * 删除新闻
         * @param obj
         */
        del: function (obj) {
            var newsItem = this.getNewsItem(obj);
            console.log('Del Code:' + newsItem.code);
        },
        /**
         * 新闻快照
         * @param obj
         */
        cache: function (obj) {
            window.open(this.APP_PREFIX + this.MODULE_MONITOR + this.getNewsItem(obj).code);
        },
        /**
         * 原始新闻
         * @param obj
         */
        originalLink: function (obj) {
            window.open(this.getNewsItem(obj).url);
        },
        /**
         * 书签
         */
        bookmark: function (obj) {
            console.log('current method => bookmark()');
        },
        /**
         * 加入报告
         * @param obj
         */
        addReport: function (obj) {
            console.log('current method => addReport()');
        },
        /**
         * 分享新闻
         * @param obj
         */
        share: function (obj) {
            console.log('current method => share()');
        },
        /**
         * 新闻纠错
         * @param obj
         */
        correct: function (obj) {
            console.log('current method => correct()');
        },
        /**
         * 合并相似新闻
         * @param obj
         */
        merge: function (obj) {
            console.log('current method => merge()');
        },
        /**
         * 添加标签
         * @param obj
         */
        tagMark: function (obj) {
            console.log('current method => tagMark()');
        },
        /**
         * 彩信推送
         * @param obj
         */
        sendMessage: function (obj) {
            console.log('current method => sendMessage()');
        },
        /**
         * 标记正负面
         * @param obj
         */
        sentimentMark: function (obj) {
            console.log('current method => sentimentMark()');
        }
    };

    return controllerBase;
});