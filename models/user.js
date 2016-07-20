/**
 * Created by quan on 2016/7/19.
 */
"use strict";

//`id` bigint(20) NOT NULL AUTO_INCREMENT,
//    `user_no` varchar(50) DEFAULT NULL COMMENT '用户唯一标识(美丽行项目系统统一标识)',
//    `open_id` varchar(100) DEFAULT NULL COMMENT '用户的唯一标识(微信openid)',
//    `nick_name` varchar(64) DEFAULT NULL COMMENT '用户昵称',
//    `sex` int(11) DEFAULT NULL COMMENT '用户的性别，值为1时是男性，值为2时是女性，值为0时是未知',
//    `province` varchar(64) DEFAULT NULL COMMENT '用户个人资料填写的省份',
//    `city` varchar(64) DEFAULT NULL COMMENT '普通用户个人资料填写的城市',
//    `country` varchar(64) DEFAULT NULL COMMENT '国家，如中国为CN',
//    `head_img_url` varchar(512) DEFAULT NULL COMMENT '用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效。',
//    `privilege` varchar(512) DEFAULT NULL COMMENT '用户特权信息，json 数组，如微信沃卡用户为（chinaunicom）',
//    `unionid` varchar(512) DEFAULT NULL COMMENT '只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段。详见：获取用户个人信息（UnionID机制）',
//    `create_date` datetime DEFAULT NULL COMMENT '创建时间',
//    `update_date` datetime DEFAULT NULL COMMENT '更新时间',
//    `language` varchar(50) DEFAULT NULL COMMENT '语种',
//    `weixin_public_id` bigint(20) DEFAULT NULL COMMENT '微信公众号id',
//    `real_name` varchar(20) DEFAULT NULL COMMENT '真实姓名',
//    `level` varchar(20) DEFAULT NULL COMMENT '会员级别',
//    `user_type` int(11) DEFAULT '1' COMMENT '用户类型',
//    `guide_level` varchar(20) DEFAULT NULL COMMENT '导游级别',
//    `bg_img_url` varchar(255) DEFAULT NULL COMMENT '导游的背景图',
//    `age` int(10) DEFAULT NULL COMMENT '导游的年纪(80后、90后)',
//    `sign` varchar(50) DEFAULT NULL COMMENT '导游的签名',
//    `tag` varchar(255) DEFAULT NULL COMMENT '导游的标签',
//    `work_year` int(10) DEFAULT NULL COMMENT '导游的工作年限',
//    `intro` varchar(255) DEFAULT NULL COMMENT '导游的简介',
//    `guide_card_no` varchar(50) DEFAULT NULL COMMENT '导游的导游证号',
//    `mobile` varchar(20) DEFAULT NULL COMMENT '导游的手机号码',
//    `email` varchar(50) DEFAULT NULL COMMENT '导游的邮箱',
//    `id_card` varchar(20) DEFAULT NULL COMMENT '导游的身份证证件号码',
//    `id_card_front_pic` varchar(255) DEFAULT NULL COMMENT '导游的身份证正面图片地址',
//    `id_card_side_pic` varchar(255) DEFAULT NULL COMMENT '导游的身份证反面图片地址',
//    `audit_status` int(1) DEFAULT '0' COMMENT '导游的审核状态(1待审核2审核通过3审核未通过)',
//    `audio_url` varchar(255) DEFAULT NULL COMMENT '导游的语音地址',
//    `status` int(1) DEFAULT NULL COMMENT '导游的状态(1正常2禁止)',

"use strict";
module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define("user_info", {
            'id': {
                'type': DataTypes.INTEGER, // 字段类型
                autoIncrement : true,
                primaryKey : true,
                'allowNull': false,         // 是否允许为NULL
                'unique': true              // 字段是否UNIQUE
            },
            'nick_name': {
                'type': DataTypes.STRING,
                'allowNull': false
            },
        create_date : {type : DataTypes.DATE, defaultValue : DataTypes.NOW}
        }, {
            // 自定义表名
            'freezeTableName': true,
            'tableName': 'user_info',
        // 是否需要增加createdAt、updatedAt、deletedAt字段
        'timestamps': false
        }
    );

    //var User = sequelize.define("user_info", {
    //    // auto increment, primaryKey, unique
    //    id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true, unique : true},
    //    // comment
    //    user_no : {type : DataTypes.STRING, comment : '用户标识'},
    //    nick_name : {type : DataTypes.STRING, comment : '用户昵称'},
    //    // allow null
    //    //description : {type : DataTypes.TEXT, allowNull : true},
    //    // default value
    //    create_date : {type : DataTypes.DATE, defaultValue : DataTypes.NOW}
    //});

    console.log(User);

    return User;
};

