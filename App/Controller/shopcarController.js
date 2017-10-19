/**
 * Created by DELL on 2017/10/18.
 */
app.controller("shopcarController",function($scope){
   $scope.deleteItem=function(index){//子级删除
       $scope.$emit("deleteItem",index);
   };
    $scope.itemChecked=function(index){//单选
        $scope.$emit("itemChange",index)
    };
    $scope.itemCount=function(flag){//购买数量
        if(flag=="+"){
            $scope.item.num+=1;
        }else{
            if($scope.item.num<=1) return;
            $scope.item.num-=1;
        }

        $scope.$emit("countChange");
    }
});