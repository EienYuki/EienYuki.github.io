var nav_item = [
    {
        "name": "info",
        "text": "About",
        "index": 0
    },
    {
        "name": "projects",
        "text": "Projects",
        "index": 1
    },
    {
        "name": "skill",
        "text": "Skill",
        "index": 2
    },
    {
        "name": "history",
        "text": "History",
        "index": 3
    }
]
var skill_item = [
    {
        "name":"後端",
        "index":0,
        "sub":[
            {"name":"PHP","size":"width: 50%;height: 45%"},
            {"name":"MySQL","size":"width: 50%;height: 45%"},
            {"name":"Node js","size":"width: 50%;height: 55%"},
            {"name":"MongoDB","size":"width: 50%;height: 55%"}
        ]
    },
    {
        "name":"前端",
        "index":1,
        "sub":[
            {"name":"HTML/CSS/JS","size":"width: 50%;height: 100%"},
            {"name":"Botstrap","size":"width: 50%;height: 50%"},
            {"name":"Vue js","size":"width: 50%;height: 50%"}
        ]
    },
    {
        "name":"其他",
        "index":2,
        "sub":[
            {"name":"Python","size":"width: 50%;height: 100%"},
            {"name":"C#","size":"width: 50%;height: 50%"},
            {"name":"Java","size":"width: 50%;height: 25%"},
            {"name":"C++","size":"width: 50%;height: 25%"}
        ]
    }
]
var projects_item = [
    {
        "name": "PHP專題",
        "index":0,
        "img": "./img/shop0.png",
        "url": "https://shop0.asutora.com"
    }
]

var history_item = [
    {
        "type":"date",
        "text":"2014~2015",
        "sub":[
            {
                "type":"text",
                "text":"開始接觸Linux"
            },
            {
                "type":"text",
                "text":"在家裡架設了檔案伺服器＆VPN"
            },
            {
                "type":"text",
                "text":"學習 VB.Net、C#"
            }
        ]
    },
    {
        "type":"date",
        "text":"2016",
        "sub":[
            {
                "type":"text",
                "text":"學習 Python 等程式語言"
            },
            {
                "type":"text",
                "text":"把伺服器的系統換成 Proxmox"
            },
        ]
    },
    {
        "type":"date",
        "text":"2017",
        "sub":[
            {
                "type":"text",
                "text":"學習 PHP、MySQL、MongoDB 等前端框架"
            },
            {
                "type":"text",
                "text":"開始接觸 機器學習"
            },
            {
                "type":"text",
                "text":"把路由器換成 RouterOS 真的好用"
            }
        ]
    },
    {
        "type":"date",
        "text":"2018",
        "sub":[
            {
                "type":"text",
                "text":"學習 Node js"
            }
        ]
    }
]

var app = new Vue({
    data: {
        current: 0,
        nav_item: nav_item,
        skill_item: skill_item,
        projects_item: projects_item,
        history_item: history_item
    },
    created () {
        window.addEventListener('resize', this.page_update)
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.page_update)
    },
    methods: {
        handleScroll (event) {
            var tmp = (($(window).scrollTop()/window.innerHeight))
            this.nav_click(parseInt(tmp), false)
        },
        page_update: function(){
            var show = $($("div.show"));
            for(var i=0; i<show.length; i++){
                var show_box = $(show[i]).find(".box");
                var size = show_box[0].offsetWidth
                for (var j = 0; j < show_box.length; j++) {
                    show_box[j].style = "left: " + (show_box[j].dataset.index * size) + "px";
                }
            }
            this.index_click("#skill", 0)
        },
        nav_click: function(index, mode=true){
            $("nav a").removeClass("ac")
            $("nav a[data-index="+index+"]").addClass("ac")
            this.current = index
            if(mode){
                $('html, body').animate({
                    scrollTop: $(".book").height() * index
                }, 500)
            }
        },
        index_click: function(page, index){
            var width = $(page + " .show .box")[0].offsetWidth
            $(page + " .show").css("transform","translateX(-"+width*index+"px)")
            $(page + " .index .item").removeClass('ac')
            $(page + " .index .item[data-index="+index+"]").addClass('ac')
        },
        projects_goto: function(url){
            window.open(url, '_blank')
        }
    },
    mounted: function(){
        var _this = this
        _this.page_update()
        setTimeout(function(){
            $('.load').fadeOut('fast')
            setTimeout(function(){
                $('#app').animate({opacity: 1}, 1000)
                _this.nav_click(0)
                _this.index_click("#skill", 0)
            },500);
        },0)
    }
}).$mount('#app')