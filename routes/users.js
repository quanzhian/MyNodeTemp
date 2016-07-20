var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  console.log(models);
  // find
  var countPerPage = 20, currentPage = 1;
  models.user_info.findAll({
    'limit': countPerPage,                      // 每页多少条
    'offset': countPerPage * (currentPage - 1)  // 跳过多少条
  }).then(function(users) {
    res.render('layout', {
      title: '用户列表',
      list: users
    });
  });


  //models.user_info.findAll({limit : 10, order : 'id asc'}, {raw : true, logging : true, plain : false}).on('success', function(res){
  //  console.log(res);
  //  res.render('layout', {
  //    title: '用户列表',
  //    list: res
  //  });
  //}).on('failure', function(err){
  //  console.log(err);
  //})

});

router.post('/create', function(req, res) {
  models.User.create({
    username: req.body.username
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/destroy', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/:user_id/tasks/create', function (req, res) {
  models.Task.create({
    title: req.body.title,
    UserId: req.params.user_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
  models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;
