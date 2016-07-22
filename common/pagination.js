/**
 * Created by quan on 2016/7/22.
 */
"use strict";
/**
 * 分页对象
 * @param pageno 当前页号
 * @param pagesize 每页数量
 * @param rows 当前页条数
 * @param count 总条数
 * @param pathname 当前请求的链接 例如 /users
 */
var obj = function(pageno,pagesize,rows,count,pathname){
    var pagination = {};
    pagination.pgRowCount = rows || 0;
    pagination.totalCount = count || 0;
    pagination.currentPage = pageno || 1;
    pagination.pageSize = pagesize || 10;
    pagination.pathName = pathname || "/";
    pagination.totalPages = Math.ceil(pagination.totalCount / pagination.pageSize);
    pagination.next_Page = pagination.currentPage >= pagination.totalPages ? pagination.totalPages : pagination.currentPage + 1;
    pagination.prev_Page = pagination.currentPage <= 1 ? 1 : pagination.currentPage - 1;
    pagination.prevDisabled = pagination.currentPage <= 1 ? "disabled" : false;
    pagination.nextDisabled = pagination.currentPage >= pagination.totalPages ? "disabled" : false;
    pagination.showPages = [];
    var showCount = 5;
    var startPage = pagination.currentPage;
    var endPage = pagination.currentPage + showCount;
    endPage = endPage <= pagination.totalPages ? endPage : pagination.totalPages;
    if(endPage - startPage <= 4){
        startPage = endPage - showCount < 0 ? 1 : startPage;
    }
    for(startPage;startPage <= endPage;startPage++){
        pagination.showPages.push(startPage);
    }
    return pagination;
}

//var _k = obj(1,10,10,200,"/users");
//console.log(_k);

module.exports = obj;
