/**
 * Created by DELL on 2017/10/18.
 */
app.controller("shopcarController",function($scope){
   $scope.deleteItem=function(index){//�Ӽ�ɾ��
       $scope.$emit("deleteItem",index);
   };
    $scope.itemChecked=function(index){//��ѡ
        $scope.$emit("itemChange",index)
    };
    $scope.itemCount=function(flag){//��������
        if(flag=="+"){
            $scope.item.num+=1;
        }else{
            if($scope.item.num<=1) return;
            $scope.item.num-=1;
        }

        $scope.$emit("countChange");
    }
});