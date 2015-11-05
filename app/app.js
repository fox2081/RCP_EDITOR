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


    $scope.testContent = {
        "iframe": '<iframe src="http://www.tudou.com/programs/view/html5embed.action?type=1&code=nm9KfauLtuM&lcode=ybpcJljfNU8&resourceId=363454370_06_05_99" allowtransparency="true" allowfullscreen="true" allowfullscreenInteractive="true" scrolling="no" border="0" frameborder="0" style="width:480px;height:400px;"></iframe>',
        "embed": '<embed src="http://www.tudou.com/l/ybpcJljfNU8/&bid=05&iid=240981764&rpid=363454370&resourceId=363454370_05_05_99/v.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="480" height="400"></embed>'
    };

    var customItems = [
        {
            id: 'practice',
            text: 'practice',
            icon: '',
            action: function (editor) {
                var html = "<div><div class='practise-plugin' contenteditable='false' draggable='false' style='resize: none' id='12345' data-d='3212' pid='321'>" +
                    "<div class='content'>3124{{test}}<a class='edit'>编辑</a> <a class='delete'>删除</a> </div>" +
                    "</div></div>" +
                    "<p><br></p>";
                editor.content.insertHtmlAtCursor(html);

                var element = editor.content.documentElement().body;
                var e = $(element).find('#12345');

                e.find('.edit').on('click', function () {
                    alert("edit")
                });
                e.find('.delete').on('click', function () {
                    e.remove();
                });
                e.find('.preview').on('click', function () {
                    alert("preview")
                });
            }
        },
        {
            id: 'firstTitle',
            text: 'firstTitle',
            icon: '',
            action: function (editor) {

                editor.content.insertHtmlAtCursor(' [red] 2 [/red] ');
            }
        }
    ];

    var config = {
        css:{
            documentStyles : 'body { background: white; }',
            stylesheets : ['app.css']
        },
        codeview: {
            enabled: false // Disables code view feature, default is true (enabled)
        },
        ui: {
            fonts: ['Helvetica', '微软雅黑', 'Times New Roman', '"Comic Sans MS", cursive, sans-serif'],
            toolbar: {
                items: [
                    {
                        //  Toolbar group object with custom command
                        label: 'Toolbar Group 2',
                        items: ['undo', 'redo']
                    },
                    {
                        //  Toolbar group object with custom command
                        label: 'custom',
                        items: customItems
                    }
                ],
                draggable: false,
                offset: {
                    top: -50,
                    left: 0
                },
                visible: true
            }
        }
    };

    $scope.test = "HELLO!";

    $scope.editor = textboxio.replace('#myEditor',config);
    $scope.editorInline = textboxio.inline('#inlineEditor', config);


    $scope.editor.macros.addSimpleMacro('[red]', '[/red]', function(match){
        console.log(match)
        return '<span style="color: red">' + match + '</span>'
    });

    $scope.editor.content.set("<div style='height: 30px;'>1<span> [red] 2 [/red] </span>3</div>");


    $scope.mce = new tinymce.Editor("mceText", {
        some_setting: 1
    }, tinymce.EditorManager);

    $scope.tbio = null;

    tinymce.init({
        selector: "#mce",
        inline: false,
        theme: "modern",
        plugins: [
            "advlist autolink lists link image charmap print preview hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime media nonbreaking save table contextmenu directionality",
            "emoticons template paste textcolor colorpicker textpattern imagetools"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        toolbar2: "print preview media | forecolor backcolor emoticons",
        image_advtab: true,
        templates: [
            {title: 'Test template 1', content: '<b>Test 1</b>'},
            {title: 'Test template 2', content: '<em>Test 2</em>'}
        ]
    });


    $timeout(function () {
        console.log($scope.editor)
        console.log(textboxio)
        console.log(textboxio.definePlugin('123',{},function(){
            alert(123)
        }))
        console.log($scope.tbio)
        console.log(tinymce)
    }, 300);


    $scope.command = function(arg_str){
        $scope.editor.command(arg_str);
    };




    //------------------------------------------------------------------------------------------------------------------


    var type = {
        "practise":"练习",
        "content":"图文",
        "titleFirst":"一级标题",
        "titleSecond":"二级标题",
        "file":"文件",
        "videoLocal":"本地视频",
        "videoLink":"引用视频",
    };

    $scope.content = {
        name: "",
        childItems: [
            {
                name: "",
                time: "",
                content: [
                    {
                        type: "content",
                        data: {}
                    }
                ],
                childItems:[
                    {
                        name: "",
                        time: "",
                        content: [
                            {
                                type: "content",
                                data: {}
                            }
                        ]
                    }
                ]
            }
        ]
    };


    /**
     * \
     * @param args {
     *                  type: <string>,      //类型
     *                  level: <integer>,    //层级 1为一级标题，2位2级标题
     *                  parent: <integer>,    //父级层级的序列号
     *                  index: <integer>,    //所在层级的序列号
     *           }
     */
    $scope.newItem = function(args){


        if(args.level == 1){
            $scope.content.childItems[args.index].content.splice(index,0,"123");
        }else{
            $scope.content.childItems[args.parent].childItems[args.index].content.splice(index,0,"123");
        }

    }
});
