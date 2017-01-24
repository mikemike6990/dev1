jQuery(function($){
    // ul�v�f�����Ă���
    var rssBlock = $('#rss').append('<ul/>');
    // RSS�̎擾
    $.ajax({
        // �ǂݍ��ރf�[�^��XML
        dataType: 'xml',
        // �ǂݍ��݂����f�[�^��URL"http://blog.livedoor.jp/itsoku/index.rdf"
        url: 'sample.xml',
        // Ajax�̒ʐM�����������ꍇ
        success: function(data) {
            
            // RSS��item�v�f���ЂƂ��Ȃ������ꍇ
            if( $('item', data).length<1 ) {
                $('ul', rssBlock).append('<li>�L��������܂���B</li>');
                return false;
            }
            
            // item���ɥ��
            $('item', data).each(function() {
                
                // item�̒���link��title�𔲂��o����ul�ɒǉ�����
                var item = $(this);
                $('ul', rssBlock).append(
                    $('<li/>').append(
                        $('<a/>', {
                            href: $('link', item).text(),
                            text: $('title', item).text()
                        })
                    )
                );
            });
        },
        error: function(xml){
            $('#rss').append('<p>�ǂݍ��ݎ��s<\/p>');
        }
    });
});