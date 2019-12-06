// var baseUrl = 'http://localhost:8000/';

var category = {
    // 获取分类
    get: function (callback) {
        $.ajax({
            type: 'GET',
            // url: baseUrl + 'admin/category_search',
            url: apis.category_get,
            success: function (res) {
                // console.log(res);
                callback(res);
            }
        });
    },

    // 新增分类
    add: function (name, slug, callback) {
        $.post(apis.category_add, { name, slug }, function (res) {
            // console.log(res);
            callback(res);
        });
    },

    // 删除分类
    delete: function (id, callback) {
        // 根据ES6的新语法，对象的属性名和值如果一样，则可以省略值。比如 {id: id} 可以简写为 {id}
        $.post(apis.category_delete, {id}, function (res) {
            callback(res);
        });
    },

    // 编辑分类
    edit: function (id, name, slug, callback) {
        $.post(apis.category_edit, {id, name, slug}, function (res) {
            callback(res);
        });
    }

    // ....
};