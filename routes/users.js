var models = require('../models');
var pagination = require('../common/pagination');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {

    console.log(req.query);
    // find
    var pagesize = req.query.pagesize || 20, pageno = req.query.pageno || 1;
    pagesize = parseInt(pagesize);
    var _offset = parseInt(pagesize * (pageno - 1 > 0 ? pageno - 1 : 0));
    models.cms_admin_user.findAndCountAll({
        'limit': pagesize,                      // 每页多少条
        'offset': _offset  // 跳过多少条
    }).then(function (data) {
        res.render('users_list', {
            title: '用户列表',
            list: data.rows,
            paginator: pagination(pageno, pagesize, data.rows.length, data.count, req.baseUrl)
        });
    });

});

/* GET users list listing. */
router.get('/list', function (req, res) {

    console.log(req.query);
    // find
    var pagesize = req.query.pagesize || 20, pageno = req.query.pageno || 1;
    pagesize = parseInt(pagesize);
    var _offset = parseInt(pagesize * (pageno - 1 > 0 ? pageno - 1 : 0));
    console.log(typeof _offset);
    models.cms_admin_user.findAll({
        'limit': pagesize,                      // 每页多少条
        'offset': _offset  // 跳过多少条
    }).then(function (users) {
        res.render('users_list', {
            title: '用户列表',
            list: users
        });
    });

});

/**
 * 创建
 */
router.get('/create', function (req, res) {
    res.render('users_create', {title: '用户列表', data: []});
});

/**
 * post保存新增数据
 */
router.post('/create', function (req, res) {
    models.cms_admin_user.create({
        username: req.body.username
    }).then(function () {
        res.redirect('/users');
    });
});

/**
 * 更新
 */
router.get('/:id/update', function (req, res) {
    models.cms_admin_user.findById(req.params.id).then(function (users) {
        res.render('users_edit', {title: '用户编辑', data: users});
    });
});

/**
 * 更新
 */
router.post('/update', function (req, res) {
    console.log(req.body);
    models.cms_admin_user.update({
        title: req.body.title
    }).then(function () {
        res.redirect('/');
    });
});

/**
 * 删除
 */
router.get('/:id/delete', function (req, res) {
    models.cms_admin_user.destroy({
        'where': {'id': req.params.id}
    }).then(function () {
        res.redirect('/');
    });

});

module.exports = router;
