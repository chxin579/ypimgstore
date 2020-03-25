(function ($) {
        $.fn.extend({
            ImgLoading: function () {
                var defaults = {
                    errorimg: "https://cdn.jsdelivr.net/gh/chxin579/ypimgstore@20200324/img/error.jpg",
                    loadimg: "https://cdn.jsdelivr.net/gh/chxin579/ypimgstore@20200324/img/loading.jpg",
                    Node: $(this).find("img"),
                    timeout: 1000
                };
                var options = $.extend(defaults);
                var Browser = new Object();
                var plus = {
                    BrowserVerify:function(){
                        Browser.userAgent = window.navigator.userAgent.toLowerCase();
                        Browser.ie = /msie/.test(Browser.userAgent);
                        Browser.Moz = /gecko/.test(Browser.userAgent);
                    },
                    EachImg: function () {
                        defaults.Node.each(function (i) {
                            var img = defaults.Node.eq(i);
                            plus.LoadEnd(Browser, img.attr("data"), i, plus.LoadImg);
                        })
                    },
                    LoadEnd: function (Browser, url, imgindex, callback) {
                        var val = url;
                        var img = new Image();
                        if (Browser.ie) {
                            img.onreadystatechange = function () {
                                if (img.readyState == "complete" || img.readyState == "loaded") {
                                    callback(img, imgindex);
                                }
                            }
                        } else if (Browser.Moz) {
                            img.onload = function () {
                                if (img.complete == true) {
                                    callback(img, imgindex);
                                }
                            }
                        }
                        img.onerror = function () { img.src = defaults.errorimg }
                        img.src = val;
                    },
                    LoadImg: function (obj, imgindex) {
                        setTimeout(function () {
                            defaults.Node.eq(imgindex).attr("src", obj.src);
                        }, defaults.timeout);
                    }
                }
                plus.BrowserVerify();
                plus.EachImg();
            },
            DivLoading: function () {
                var defaults = {
                    errorimg: "https://cdn.jsdelivr.net/gh/chxin579/ypimgstore@20200324/img/error.jpg",
                    loadimg: "https://cdn.jsdelivr.net/gh/chxin579/ypimgstore@20200324/img/loading.jpg",
                    Node: $(this).find(".imgdiv"),
                    timeout: 1000
                };
                var options = $.extend(defaults);
                var Browser = new Object();
                var plus = {
                    BrowserVerify:function(){
                        Browser.userAgent = window.navigator.userAgent.toLowerCase();
                        Browser.ie = /msie/.test(Browser.userAgent);
                        Browser.Moz = /gecko/.test(Browser.userAgent);
                    },
                    EachImg: function () {
                        defaults.Node.each(function (i) {
                            var img = defaults.Node.eq(i);
                            plus.LoadEnd(Browser, img.attr("data"), i, plus.LoadImg);
                        })
                    },
                    LoadEnd: function (Browser, url, imgindex, callback) {
                        var val = url;
                        var img = new Image();
                        if (Browser.ie) {
                            img.onreadystatechange = function () {
                                if (img.readyState == "complete" || img.readyState == "loaded") {
                                    callback(img, imgindex);
                                }
                            }
                        } else if (Browser.Moz) {
                            img.onload = function () {
                                if (img.complete == true) {
                                    callback(img, imgindex);
                                }
                            }
                        }
                        img.onerror = function () { img.src = defaults.errorimg }
                        img.src = val;
                    },
                    LoadImg: function (obj, imgindex) {
                        setTimeout(function () {
                            defaults.Node.eq(imgindex).css("background-image","url('"+obj.src+"')");
                        }, defaults.timeout);
                    }
                }
                plus.BrowserVerify();
                plus.EachImg();
            }
        });
    })(jQuery);
