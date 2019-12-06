// var baseUrl = 'http://localhost:8000/';

var user = {
    // 登录方法
    login: function (username, password, callback) {
        $.post(baseUrl + 'admin/login', { user_name: username, password: password }, function (res) {
            console.log(res);
            callback(res);
            // alert(res.msg); 
        });
    },

    // 退出方法
    logout: function (callback) {
        $.post(baseUrl + 'admin/logout', function (res) {
            // res = {"msg":"登出成功","code":200}
            callback(res);
        });
    },

    // 获取用户信息
    getInfo: function (callback) {
        $.get(baseUrl + 'admin/getuser', function (res) {
            callback(res);
            // console.log(res);
        });
    }
};