/**
 * Created by quan on 2016/7/19.
 */
"use strict";
//module.exports = function (sequelize, DataTypes) {
//
//    var User = sequelize.define("user_info", {
//            'id': {
//                'type': DataTypes.INTEGER, // 字段类型
//                autoIncrement : true,
//                primaryKey : true,
//                'allowNull': false,         // 是否允许为NULL
//                'unique': true              // 字段是否UNIQUE
//            },
//            'nick_name': {
//                'type': DataTypes.STRING,
//                'allowNull': false
//            },
//        create_date : {type : DataTypes.DATE, defaultValue : DataTypes.NOW}
//        }, {
//            // 自定义表名
//            'freezeTableName': true,
//            'tableName': 'user_info',
//        // 是否需要增加createdAt、updatedAt、deletedAt字段
//        'timestamps': false
//        }
//    );
//
//    //var User = sequelize.define("user_info", {
//    //    // auto increment, primaryKey, unique
//    //    id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true, unique : true},
//    //    // comment
//    //    user_no : {type : DataTypes.STRING, comment : '用户标识'},
//    //    nick_name : {type : DataTypes.STRING, comment : '用户昵称'},
//    //    // allow null
//    //    //description : {type : DataTypes.TEXT, allowNull : true},
//    //    // default value
//    //    create_date : {type : DataTypes.DATE, defaultValue : DataTypes.NOW}
//    //});
//
//    console.log(User);
//
//    return User;
//};
module.exports = function (sequelize, DataTypes) {

    // 默认表名（一般这里写单数），生成时会自动转换成复数形式
    // 这个值还会作为访问模型相关的模型时的属性名，所以建议用小写形式
    var CmsAdminUser = sequelize.define("cms_admin_user", {
        'id': {
            'type': DataTypes.STRING, // 字段类型
            autoIncrement: false,      // 是否是自增
            primaryKey: true,         // 是否是主键
            'allowNull': false,        // 是否允许为NULL
            'comment': '用户唯一ID（UUID）',    // 备注
            'unique': true             // 字段是否UNIQUE
        }
        ,
        'user_login': {
            'type': DataTypes.STRING,  // 字段类型
            'comment': '用户名（登录账号）',    // 备注
            'allowNull': true         // 是否允许为NULL
        }
        ,
        'password': {
            'type': DataTypes.STRING,  // 字段类型
            'comment': '密码',    // 备注
            'allowNull': true         // 是否允许为NULL
        }
        ,
        'display_name': {
            'type': DataTypes.STRING,  // 字段类型
            'comment': '显示名',    // 备注
            'allowNull': true         // 是否允许为NULL
        }
        ,
        'real_name': {
            'type': DataTypes.STRING,  // 字段类型
            'comment': '真实姓名',    // 备注
            'allowNull': true         // 是否允许为NULL
        }
        ,
        'email': {
            'type': DataTypes.STRING,  // 字段类型
            'comment': '邮箱',    // 备注
            'allowNull': true         // 是否允许为NULL
        }
        ,
        'mobile': {
            'type': DataTypes.STRING,  // 字段类型
            'comment': '手机号码',    // 备注
            'allowNull': true         // 是否允许为NULL
        }
        ,
        'user_url': {
            'type': DataTypes.STRING,  // 字段类型
            'comment': '头像',    // 备注
            'allowNull': true         // 是否允许为NULL
        }
        ,
        'status': {
            'type': DataTypes.INTEGER,  // 字段类型
            'comment': '用户状态（0：正常；1：暂停）',    // 备注
            'allowNull': true         // 是否允许为NULL
        }
        ,
        'salt': {
            'type': DataTypes.STRING,  // 字段类型
            'comment': '盐',    // 备注
            'allowNull': true         // 是否允许为NULL
        }
    },
        {
            'freezeTableName': true,      // 是否自定义表名
            'tableName': 'cms_admin_user',//自定义表名
            'timestamps': false          // 是否需要增加createdAt、updatedAt、deletedAt字段
        }
    );
        return CmsAdminUser;
};


