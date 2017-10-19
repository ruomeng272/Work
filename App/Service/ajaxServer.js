/**
 * Created by DELL on 2017/10/18.
 */
app.factory("ajaxServer",function($http,$q){
    server={
        ajax:function(type,url,data){
            var defer= $q.defer();
            if(type=="jsonp" || type=="JSONP"){
                $.ajax({
                    url:url,
                    dataType:"jsonp",
                    success:function(res){
                        defer.resolve(res);
                    },
                    error:function(err){
                        defer.reject(err);
                    }
                });
                return defer.promise;
            }else{
                $http({
                    url:url,
                    method:type || "get",
                    data:data || null
                }).then(function(res){
                    defer.resolve(res);
                }).then(function(err){
                    defer.reject();
                });
            }
            return defer.promise;
        }
    };
    return server;
});