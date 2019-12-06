var baseUrl = 'http://localhost:8000/';

var apis = {
    // 分类的接口
    category_get: baseUrl + 'admin/category_search', // 获取分类
    category_add: baseUrl + 'admin/category_add', // 添加分类
    category_delete: baseUrl + 'admin/category_delete', // 删除分类
    category_edit: baseUrl + 'admin/category_edit', // 编辑接口


    // .....
    // 把user.js中的接口也放到这里
    // 后面的开发，把所有接口全部放到这里

    // 文章相关接口
    article_get: baseUrl + 'admin/search', // 获取文章
    article_add: baseUrl + 'admin/article_publish', // 添加文章
    // 删除文章
    // 编辑文章
}

