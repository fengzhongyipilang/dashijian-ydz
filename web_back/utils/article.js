var article = {
    show: function (callback) {  
    $.get(apis.category_show,function(res){
     callback(res);
    })
    },
      
//热点图
hotpic: function (callback) {
        $.get(apis.article_hotpic,function (res) { 
            callback(res);
         })
     },

}