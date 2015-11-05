'use strict';

// Declare app level module which depends on views, and components
var module = angular.module('myApp', [
    'ngRoute',
    'ephox.textboxio'
]);
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

module.controller("ctrl", function ($rootScope, $scope, $timeout) {



    //------------------------------------------------------------------------------------------------------------------


    var type = {
        "practise": "练习",
        "content": "图文",
        "titleFirst": "一级标题",
        "titleSecond": "二级标题",
        "file": "文件",
        "videoLocal": "本地视频",
        "videoLink": "引用视频",
    };

    $scope.curPosition = {
        type: "practice",
        level: 1,
        first: 0,
        second: 0,
        index: 0
    };
    $scope.setPosition = function (type, level, first, second, index) {
        $scope.curPosition = {
            type: type,
            level: level,
            first: first,
            second: second,
            index: index
        };
        console.log('pos', $scope.curPosition);
    };

    var localStorage = window.localStorage;

    $scope.contentOrigin = {
        name: "",
        childItems: [
            {
                name: "第一章",
                time: "",
                content: [
                    {
                        type: "practise",
                        data: {
                            id: "3322211",
                            name: "测试试卷"
                        },
                        scope: null
                    }
                ],
                childItems: [
                    {
                        name: "第一节",
                        time: "",
                        content: [
                            {
                                type: "practise",
                                data: {
                                    id: "3322211",
                                    name: "小节测试试卷"
                                },
                                scope: null
                            }
                        ]
                    }
                ]
            }
        ]
    };
    $scope.content = JSON.parse(localStorage.getItem('data')) || $scope.contentOrigin;

    $scope.testContent = '<p>测试内容</p>' +
        '<p>测试内容</p>' +
        '<p>' +
        '<strong>求职意向</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' +
        '<table border="0" cellpadding="0" cellspacing="0">' +
        '<tbody>' +
        '<tr>' +
        '<td>' +
        '<p>期望工作地区：</p>' +
        '</td>' +
        '<td>' +
        '<p>广州</p>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<p>期望月薪：</p>' +
        '</td>' +
        '<td>' +
        '<p>6001-8000元/月</p>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<p>目前状况：</p>' +
        '</td>' +
        '<td>' +
        '<p>我目前处于离职状态，可立即上岗</p>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<p>期望工作性质：</p>' +
        '</td>' +
        '<td>' +
        '<p>全职</p>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<p>期望从事职业：</p>' +
        '</td>' +
        '<td>' +
        '<p>WEB前端开发</p>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<p>期望从事行业：</p>' +
        '</td>' +
        '<td>' +
        '<p>互联网/电子商务</p>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<h2><del><strong>自我评价</strong>&nbsp;&nbsp;</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>' +
        '<p>做事认真执着，从不轻言放弃的我善于与他人合作，学习能力强，业余时间喜欢阅读技术类相<ins>关书籍、喜欢研究New Skill，接下来学习规划主要往Node.JS方向发展。为人热情有活力、业余时间也喜欢去玩玩摄影。知乎主要关注前端开发还有JavaScript等领域，经常去的前端技术论坛国内有大前端（腾讯前端Team技术交流分享论坛），博客园（不过目前活跃度相对减少</ins>），前端乱炖（前端人员必去之地）国外主要以Github（各大知名项目的issue论坛）。立志成为一个全栈工程师。</p>' +
        '<p><strong>工作经历</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>' +
        '<table border="0" cellpadding="0" cellspacing="0">' +
        '<tbody>' +
        '<tr>' +
        '<td colspan="2">' +
        '<p><strong>2014.02 - 2015.02&nbsp;&nbsp;</strong><strong>海印股份有限公司</strong>&nbsp;&nbsp;<strong>（</strong><strong>1</strong><strong>年） </strong></p>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<p><strong>WEB</strong><strong>前端开发</strong><strong> | 4001-6000</strong><strong>元</strong><strong>/</strong><strong>月 </strong></p>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<p>互联网/电子商务 | 企业性质：上市公司 | 规模：1000-9999人</p>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<p>工作描述：</p>' +
        '</td>' +
        '<td>' +
        '<p>根据提供的设计图进行切图，采用DIV+CSS的方式对网站进行布局，使用JavaScript、JQuery等实现页面上的动态效果以及跟用户的交互效果，并解决各主浏览器的兼容问题。</p>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<p><strong>教育经历</strong><strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></p>' +
        '<table border="0" cellpadding="0" cellspacing="0">' +
        '<tbody>' +
        '<tr>' +
        '<td>' +
        '<p>2015.08 - 至今&nbsp;&nbsp;华南师范大学&nbsp;&nbsp;计算机科学与技术&nbsp;&nbsp;本科</p>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<p>2012.03 - 2014.06&nbsp;&nbsp;华南师范大学&nbsp;&nbsp;工商管理&nbsp;&nbsp;大专</p>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<p>&nbsp;</p> ';

    $scope.plugins = {
        'content': {
            type: "content",
            data: {
                id: 312,
                type: "content",
                name: "测试内容",
                content: $scope.testContent,
                //getEditor: function (editor) {
                //    $scope.editor = editor;
                //}
            },
            scope: null
        },
        'practise': {
            type: "practise",
            data: {
                id: "3322211",
                name: "测试试卷"
            },
            scope: null
        },
        'video': {
            type: "video",
            data: {
                id: "3322211",
                name: "测试视频"
            },
            scope: null
        },
        'titleFirst': {
            type: "titleFirst",
            data: {
                id: "3322211",
                name: "测试视频"
            },
            name: "新章",
            content: [],
            childItems: []
        },
        'titleSecond': {
            type: "titleSecond",
            data: {
                id: "3322211",
                name: "测试视频"
            },
            name: "新节",
            content: [],
            childItems: []
        },
    };

    $scope.getPlugin = function (arg_type, arg_content) {
        var data = $scope.plugins[arg_type];

        data.id = Date.parse(new Date());
        if (arg_content) {
            data.data.content = arg_content;
        }

        return angular.copy(data);
    };

    $scope.getEditor = function (editor) {
        console.log("$scope.getEditor",editor)
        $scope.editor = editor;
    };

    /**
     * 新增元素
     * @param args {
     *                  type: <string>,      //类型
     *                  level: <integer>,    //层级 1为一级标题，2为2级标题
     *                  first: <integer>,    //父级层级的序列号
     *                  second: <integer>,   //子级层级的序列号
     *                  index: <integer>,    //所在内容组序列号
     *           }
     */
    $scope.newItem = function (args, data) {
        console.log("$scope.newItem",args)

        if (args.level == 1) {
            if (args.type == 'titleFirst') {
                $scope.content.childItems.splice(args.index, 0, $scope.getPlugin(args.type, data));
            } else {
                $scope.content.childItems[args.first].content.splice(args.index, 0, $scope.getPlugin(args.type, data));
            }
        } else {

            if (args.type == 'titleSecond') {
                $scope.content.childItems[args.first].childItems[args.second].splice(args.index, 0, $scope.getPlugin(args.type, data));
            } else {
                $scope.content.childItems[args.first].childItems[args.second].content.splice(args.index, 0, $scope.getPlugin(args.type, data));
            }
        }
        $scope.curPosition = args;


        if(args.type == 'content'){
            $timeout(function(){
                //$scope.editor.focus();
            },200)
        }
    };


    $scope.moveItem = function (arg_arr, arg_index, arg_type) {

        if ((arg_type === 'up' && arg_index == 0) || (arg_type === 'down' && arg_index == arg_arr.length - 1)) {
            return
        }

        var target = arg_arr[arg_index];
        arg_arr.splice(arg_index, 1);
        if (arg_type == 'up') {
            arg_arr.splice(arg_index - 1, 0, target);
        }
        if (arg_type == 'down') {
            arg_arr.splice(arg_index + 1, 0, target);
        }
    };


    $scope.editor = {t: 1};


    $scope.getData = function () {
        $scope.content = JSON.parse(localStorage.getItem('data'));
    };

    $scope.clearData = function () {
        localStorage.clear();
    };

    $scope.setData = function () {
        console.log("$scope.content", $scope.content);
        var data = JSON.stringify($scope.content);
        localStorage.setItem('data', data);
    };


    $scope.execCmd = {
        "showAll": function () {
            console.log($scope.editor.commands);
        },
        "fontColor": function () {
            //$scope.editor.toolbar[11].items[0].click(this);
            //CKEDITOR.tools.callFunction(164, '#000000', 'fore');
        },
        "contentInsert": function (arg_type) {


            if ($scope.curPosition.type == 'content') {
                setTimeout(function () {
                    $scope.editor.execCommand('practise', function (arg_content) {
                        var content = "";
                        arg_content.each(function (index, element) {
                            content += element.outerHTML;
                        });
                        var param = angular.copy($scope.curPosition);
                        param.type = arg_type;
                        param.index++;
                        if (arg_type) {
                            $scope.newItem(param);
                        }
                        param.index++;
                        param.type = 'content';
                        $scope.newItem(param, content);
                    });
                }, 100);
            } else {
                var param = angular.copy($scope.curPosition);
                param.type = arg_type;
                param.index++;
                $scope.newItem(param);
            }
        },

        "undo": function () {
            setTimeout(function () {
                $scope.editor.execCommand('undo');
            }, 100);
        },
        "redo": function () {
            setTimeout(function () {
                $scope.editor.execCommand('redo');
            }, 100);
        },
        "find": function () {
            setTimeout(function () {
                $scope.editor.execCommand('find');
            }, 100);
        },
        "replace": function () {
            setTimeout(function () {
                $scope.editor.execCommand('replace');
            }, 100);
        },
        "specialChar": function () {
            setTimeout(function () {
                $scope.editor.execCommand('specialchar');
            }, 100);
        },
        "table": function () {
            setTimeout(function () {
                $scope.editor.execCommand('table');
            }, 100);
        },
        "horizontalRule": function () {
            setTimeout(function () {
                $scope.editor.execCommand('horizontalrule');
            }, 100);
        },
        "justifyRight": function () {
            setTimeout(function () {
                $scope.editor.execCommand('justifyright');
            }, 100);
        },
        "justifyCenter": function () {
            setTimeout(function () {
                $scope.editor.execCommand('justifycenter');
            }, 100);
        },
        "justifyLeft": function () {
            setTimeout(function () {
                $scope.editor.execCommand('justifyleft');
            }, 100);
        },
        "justifyBlock": function () {
            setTimeout(function () {
                $scope.editor.execCommand('justifyblock');
            }, 100);
        },
        "bold": function () {
            setTimeout(function () {
                console.log($scope.editor);
                $scope.editor.execCommand('bold');
            }, 100);
        },
        "italic": function () {
            setTimeout(function () {
                $scope.editor.execCommand('italic');
            }, 100);
        },
        "underline": function () {
            setTimeout(function () {
                $scope.editor.execCommand('underline');
            }, 100);
        },
        "strike": function () {
            setTimeout(function () {
                $scope.editor.execCommand('strike');
            }, 100);
        },
        "link": function () {
            setTimeout(function () {
                $scope.editor.execCommand('link');
            }, 100);
        },
        "unlink": function () {
            setTimeout(function () {
                $scope.editor.execCommand('unlink');
            }, 100);
        },
        "cut": function () {
            setTimeout(function () {
                $scope.editor.execCommand('cut');
            }, 100);
        },
        "copy": function () {
            setTimeout(function () {
                $scope.editor.execCommand('copy');
            }, 100);
        },
        "paste": function () {
            setTimeout(function () {
                $scope.editor.execCommand('paste');
            }, 100);
        },
        "pasteText": function () {
            setTimeout(function () {
                $scope.editor.execCommand('pastetext');
            }, 100);
        },
        "pasteFromWord": function () {
            setTimeout(function () {
                $scope.editor.execCommand('pastefromword');
            }, 100);
        }
    };
});
