define(['hbs', 'costs'], function (hbs, costs) {

    hbs.registerHelper({
        /**
         * 格式化时间
         * @param time
         * @returns {string}
         */
        'formatTime': function (time) {
            var fmt = "yyyy-MM-dd hh:mm:ss";
            if (time) {
                return (new Date(time)).format(fmt);
            } else {
                return '';
            }
        },
        'showTitle': function (title, hlTitle) {
            return hlTitle ? hlTitle : title;
        },
        /**
         * 媒体类型图标
         * @param media
         * @returns {*}
         */
        'mediaTypeIcon': function (media) {
            return (new costs()).MEDIA_TYPE_ICON[media];
        },
        /**
         * 判断{正面(0.75~*)}、{中立[0.25~0.75]}、{负面[0~0.25)}
         * @param emotion
         * @returns {*}
         */
        'newsEmotion': function (emotion) {
            var num1 = 0, num2 = 0.25, num3 = 0.75;
            if (emotion >= num1 && emotion < num2) {
                return '负面';
            } else if (emotion >= num2 && emotion <= num3) {
                return '中立';
            } else if (emotion > num3) {
                return '正面';
            }
        },
        /**
         * 判断电视或广播(1: 电视; 256:广播)
         * @param media
         * @param options
         * @returns {*}
         */
        'ifTvOrRadio': function (media, options) {
            return (media === 1 || media === 256) ? options.fn(this) : options.inverse(this);
        },
        /**
         * 判断电视
         * @param media
         * @param options
         * @returns {*}
         */
        'ifTV': function (media, options) {
            return (media === 1) ? options.fn(this) : options.inverse(this);
        },
        /**
         * 判断广播
         * @param media
         * @param options
         * @returns {*}
         */
        'ifRadio': function (media, options) {
            return (media === 256) ? options.fn(this) : options.inverse(this);
        },
        'playerStyle': function (media) {
            return (media === 1 || media === 256) ? "news-player-summary-content" : "news-summary-content";
        }
    });

    /**
     * 时间格式化
     * @param fmt
     * @returns {*}
     */
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,                   //月份
            "d+": this.getDate(),                        //日
            "h+": this.getHours(),                       //小时
            "m+": this.getMinutes(),                     //分
            "s+": this.getSeconds(),                     //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds()                  //毫秒
        };

        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }

        return fmt;
    };

});