jQuery(function($){
    // ul要素を入れておく
    var rssBlock = $('#rss').append('<ul/>');
    // RSSの取得
    $.ajax({
        // 読み込むデータはXML
        dataType: 'xml',
        // 読み込みたいデータのURL"http://blog.livedoor.jp/itsoku/index.rdf"
        url: 'sample.xml',
        // Ajaxの通信が成功した場合
        success: function(data) {
            
            // RSSにitem要素がひとつもなかった場合
            if( $('item', data).length<1 ) {
                $('ul', rssBlock).append('<li>記事がありません。</li>');
                return false;
            }
            
            // item毎に･･･
            $('item', data).each(function() {
                
                // itemの中のlinkとtitleを抜き出してulに追加する
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
            $('#rss').append('<p>読み込み失敗<\/p>');
        }
    });
});