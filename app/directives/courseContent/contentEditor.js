/**
 * Created by Fox2081 on 2015/10/15.
 */
module.directive('contentEditor', function($timeout) {
    return {
        require : '?ngModel',
        scope:{
            args: "=args",
            scope: "=scope",
            getEditor:"=getEditor"
        },
        link : function(scope, element, attr, ngModel) {
            var ckeditor = null;

            scope.scope = scope;

            attr.id = Date.parse(new Date());

            console.log(scope.getEditor);



            /**
             * Store the current mouse-position, so we can position the toolbar near the cursor
             */
            setMousePos = function(data) {
                var selectChild = $(ckeditor.getSelection().getStartElement().$);
                if(selectChild.hasClass('cke_textarea_inline')){
                    //ckeditor.insertHtml( '<br>' );
                }
                console.log(data);

                var editorAddBtn = $('#editorAddBtn');
                if(!ckeditor.getSelection().isLocked){
                    if(editorAddBtn.length){
                        editorAddBtn.css({'left':'200px','top':''+data.pageY+'px'});
                    }else{
                        var new_obj = $("<div id='editorAddBtn' style='cursor: pointer;z-index: 999;position: absolute;width: 20px;height: 20px;text-align: center;background-color: #000;color: white;font-weight: bold'>＋</div>");
                        new_obj.css({'left':'200px','top':''+data.pageY+'px'});
                        $('body').append(new_obj)
                    }
                }else{
                    if(editorAddBtn.length){
                        editorAddBtn.remove();
                    }
                }


            };



            console.log(scope.args);

            scope.init = function(){
                if(ckeditor!=null)return;
                //CKEDITOR.disableAutoInline = true;
                //CKEDITOR.inline( 'editable' );
                //ckeditor = CKEDITOR.replace(element[0], {

                var config =  {
                    //customConfig:"../../common/directive/course/examEditorConfig.js",
                    //allowedContent: true,
                    width: attr["width"], //宽度
                    height: attr["height"],
                    extraPlugins : 'language,practise',
                    removePlugins: 'resize',
                    sharedSpaces: {
                        top: 'topEditor'
                    },
                    //skin: 'v2',
                    toolbar: 'Full',
                    //toolbar:[[ 'Undo', 'Redo' ], [ 'Bold', 'Italic', 'Underline' ],['Practise']]
                    //toolbar:[
                    //    ['Bold']
                    //    ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print'],
                    //    ['Undo','Redo','-','Find','Replace','-','SelectAll'/*,'RemoveFormat'*/],
                    //    ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
                    //    ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
                    //    ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
                    //    ['Link','Unlink'],
                    //    [/*'Table','HorizontalRule',*/'Smiley','SpecialChar','PageBreak'],
                    //    ['Font','FontSize'],
                    //    ['TextColor','BGColor'],
                    //    [ 'ShowBlocks'],['Img'],
                    //    //['Practise']
                    //].config.floatingtools = 'Basic';
                };
                //ckeditor = CKEDITOR.replace(''+scope.args.id,config);
                ckeditor = CKEDITOR.inline(''+scope.args.id,config);
                //ckeditor = CKEDITOR.appendTo(''+scope.args.id,config);

                //scope.args.getEditor(ckeditor);

                ckeditor.on('instanceReady', function() {
                    ckeditor.setData(ngModel.$viewValue);
                    console.log(CKEDITOR);
                    console.log(ckeditor);
                    //ckeditor.focus();
                });
                ckeditor.on('pasteState', function(ev) {
                    //console.log(ev)
                    //ev.editor.execCommand( 'toolbarCollapse');
                    ngModel.$setViewValue(ckeditor.getData());
                    //scope.$apply(function() {
                    //    ngModel.$setViewValue(ckeditor.getData());
                    //});
                });

                ckeditor.on('refData', function() {
                    ngModel.$setViewValue(ckeditor.getData());
                    //scope.editor = ckeditor;
                });

                ckeditor.on('focus', function() {

                    console.log('focus')
                    scope.getEditor(ckeditor);

                    //$('#'+scope.args.id)[0].setAttribute('contenteditable',true)

                    //scope.editor = ckeditor;
                });
                ckeditor.on("blur",function(){
                    //var editorAddBtn = $('#editorAddBtn')
                    //if(editorAddBtn.length){
                    //    editorAddBtn.remove();
                    //}

                    //$('#'+scope.args.id)[0].setAttribute('contenteditable',false);

                    //ckeditor.destroy();
                    //ckeditor = null;
                    //ckeditor.remove();
                    //CKEDITOR.remove(ckeditor);
                });
                ngModel.$render = function(value) {
                    ckeditor.setData(ngModel.$viewValue);
                };

                ckeditor.on('contentDom', function( event ) {

                    console.log('contentDom');
                    //scope.getEditor(ckeditor);

                    /**
                     * Attach an eventhandler to the mouse-up event
                     */
                    ckeditor.document.on('mouseup', function( mouse_event ) {
                        console.log('mouseup');
                        //setMousePos (mouse_event.data.$);

                    });
                    ckeditor.document.on('keyup', function( key_event ) {
                        console.log('keyup');
                        //setMousePos (key_event.data.$);
                    });
                });

            };


            //$timeout(function(){
            //    scope.init();
            //})

        }
    };
});