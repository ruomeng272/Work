/**
 * Created by DELL on 2017/10/18.
 */
app.factory("shopServer",["ajaxServer",function(ajaxServer){
    var shopInfo={
            getshop:function(type,url){
                return ajaxServer.ajax(type,url);
            }
    };
    return shopInfo;
}]);