var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//引用artTemplate模块
var template = require('art-template');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置存放模板文件的路径，其中__dirname为全局变量，存放当前脚本所在目录
//——————————————start
//用art-template引擎替换默认的jade引擎
//app.set('view engine', 'jade');//为设置模板引擎为ejs
/**
 * 对日期进行格式化，
 * @param date 要格式化的日期
 * @param format 进行格式化的模式字符串
 *     支持的模式字母有：
 *     y:年,
 *     M:年中的月份(1-12),
 *     d:月份中的天(1-31),
 *     h:小时(0-23),
 *     m:分(0-59),
 *     s:秒(0-59),
 *     S:毫秒(0-999),
 *     q:季度(1-4)
 * @return String
 * @author yanis.wang
 * @see	http://yaniswang.com/frontend/2013/02/16/dateformat-performance/
 */
template.helper('dateFormat', function (date, format) {
  if(date === undefined || date === '' || date.replace(/ /g).length <= 0){
    return '';
  }
  if (!isNaN(parseFloat(date))&&isFinite(date)) {
    date = Number(date);
  }
  date = new Date(date);

  var map = {
    "M": date.getMonth() + 1, //月份
    "d": date.getDate(), //日
    "h": date.getHours(), //小时
    "m": date.getMinutes(), //分
    "s": date.getSeconds(), //秒
    "q": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  format = format.replace(/([yMdhmsqS])+/g, function(all, t){
    var v = map[t];
    if(v !== undefined){
      if(all.length > 1){
        v = '0' + v;
        v = v.substr(v.length-2);
      }
      return v;
    }
    else if(t === 'y'){
      return (date.getFullYear() + '').substr(4 - all.length);
    }
    return all;
  });
  return format;
});
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');
//——————————————end

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));//express依赖于connect这里就内建中间件会输出一些日志
app.use(bodyParser.json());//用以解析请求体，这里就会把字符串动态转换为json对象
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
