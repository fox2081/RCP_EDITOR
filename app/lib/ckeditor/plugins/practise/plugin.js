/**
 * Created by mj on 2015/2/3.
 */
CKEDITOR.plugins.add('practise',{
    lang:"zh",
    icons:'practise',
    init:function(editor){


        editor.addCommand('practise',{
            exec:function(editor,func){

                var parentIndex = -1;
                var cutElement = null;
                var selectChild = $(editor.getSelection().getStartElement().$);
                if(selectChild.hasClass('cke_editable_inline')){
                    editor.insertHtml( '<p><br></p>' );
                }
                setTimeout(function(){

                    selectChild = $(editor.getSelection().getStartElement().$);
                    console.log(selectChild)
                    var selectParents = selectChild.parents();
                    selectParents.each(function(index,element){
                        if($(element).hasClass('cke_editable_inline')){
                            parentIndex = index;
                        }
                    });
                    if(-1 == parentIndex){
                        return
                    }

                    if(0 == parentIndex){
                        cutElement = selectChild.nextAll();
                    }else{
                        cutElement = $(selectParents.get(parentIndex - 1)).nextAll();
                    }

                    cutElement.remove();

                    editor.fire('refData');

                    func(cutElement)
                })

            }
        });
        editor.on("practiseEvent",function(){

        });

        editor.ui.addButton('Practise',{
            label:editor.lang.practise.title,
            command:"practise",
            icon:this.path + "icons/practise.png"
            //toolbar:'course'
        });
    }
});