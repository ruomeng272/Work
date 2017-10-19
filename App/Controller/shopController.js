/**
 * Created by DELL on 2017/10/18.
 */
app.controller("shopController",["$scope","shopServer",function($scope,shopServer){
    $scope.flag=false;

    shopServer.getshop("get","http://localhost:8090/?shop").then(function(res){
        //console.log(res);
        $scope.shopcars=res.data;
        price();

    });
  

    $scope.$on("deleteItem", function (event, index) {//删除
        $scope.shopcars.splice(index, 1);
        price();
    });
    $scope.$on("itemChange",function(event,index){//单选
        $scope.shopcars[index].circle=!$scope.shopcars[index].circle;
        //单选全部选中时 全选按钮为选中状态
        var count=0;
        for(var i=0;i<$scope.shopcars.length;i++){
            if($scope.shopcars[i].circle){
                count++;
            }
        }
        if(count==$scope.shopcars.length){
            $scope.flag=true;
        }else{
            $scope.flag=false;
        }
        price();

    });

      $scope.$on("countChange",function(event){
        price();
    });

    $scope.check=function(){//全选
        $scope.flag=!$scope.flag;

        for(var i=0;i<$scope.shopcars.length;i++){
            if($scope.flag){
                $scope.shopcars[i].circle=true;
            }else{
                $scope.shopcars[i].circle=false;
            }

        }
        price();
    };

    function price(){//合计 和 结算
        $scope.allprice=0;
        $scope.goodsCount=0;
        $scope.shopcars.forEach(function(item,index){
            if(item.circle){
                $scope.allprice+=item.num*item.price;
                $scope.goodsCount+=item.num;
            }
        })
    }
}]);