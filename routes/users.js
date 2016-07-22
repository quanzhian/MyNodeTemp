var models = require('../models');
var pagination = require('../common/pagination');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {

    //console.log(req.query);
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
    }).catch (function(err){
        res.status(500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });

});

/* GET users list listing. */
router.get('/list', function (req, res) {

    //console.log(req.query);
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
    }).catch (function(err){
        res.status(500);
        res.render('error', {
            message: err.message,
            error: err
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
    //{title:req.body.title}
    req.body.id = "UFX" + Math.round(100000);
    //console.log(req.body);
    models.cms_admin_user.create(req.body).then(function () {
        res.redirect('/users');
    }).catch (function(err){
        res.status(500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });

});

/**
 * 更新
 */
router.get('/:id/update', function (req, res) {
    models.cms_admin_user.findById(req.params.id).then(function (users) {
        res.render('users_edit', {title: '用户编辑', data: users});
    }).catch (function(err){
        res.status(500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
});

/**
 * 更新
 */
router.post('/update', function (req, res) {
    //console.log(req.body);
    //{title:req.body.title}
    var _id = req.body.id;
    delete req.body.id;
    models.cms_admin_user.update(req.body,{
        'where':{
            'id':_id
        }
    }).then(function () {
        res.redirect('/users');
    }).catch (function(err){
        res.status(500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
});

/**
 * 删除
 */
router.get('/:id/delete', function (req, res) {
    models.cms_admin_user.destroy({
        'where': {'id': req.params.id}
    }).then(function () {
        res.redirect('/users');
    }).catch (function(err){
        res.status(500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });

});

module.exports = router;
