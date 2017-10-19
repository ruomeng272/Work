/**
 * Created by DELL on 2017/10/18.
 */
app.directive("shop",function(){
    return{
        restrict:"EA",
        scope:{
          item:"=item",
          index:"@index"
        },
        templateUrl:"App/view/temp/shopcar.html",
        controller:"shopcarController"

    }
});