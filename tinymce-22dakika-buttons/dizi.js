jQuery(document).ready(function($) {
    tinymce.create('tinymce.plugins.dizi_shortcode_plugin', {
        init : function(ed, url) {
                ed.addCommand('dizi_insert_shortcode', function() {
                    selected = tinyMCE.activeEditor.selection.getContent();

                    if (selected){
                        content = '[dizi]' + selected + '[/dizi]';
                    }else{
                        content = '[dizi][/dizi]';
                    }

                    tinymce.execCommand('mceInsertContent', false, content);
                });
            ed.addButton('dizi_button', {title : 'Dizi ekle', cmd : 'dizi_insert_shortcode', image: url + '/dizi.png'});
        },   
    });
    tinymce.PluginManager.add('dizi_button', tinymce.plugins.dizi_shortcode_plugin);
});