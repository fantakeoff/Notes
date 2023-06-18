        //侦听明细表源单单据字段的变化
        WfForm.bindDetailFieldChangeEvent(wldmid,function(id,rowIndex,value){
         
            var fieldvalue = facctid;
            
            if(!fieldvalue)
            {
              if(WfForm.getDetailRowCount("detail_1") != 0){
                Dialog.alert("账套不能为空！")
              }
              WfForm.delDetailRow("detail_1", "all");
              return
            }
            
              $.ajax({
                 type:'GET',
                 dataType:"json",
                 url:'http://172.16.14.154:5555/api/oAPurchaseOrderInfo/itemInfoByPoRequestEntryId',
                 data:{fDetailID:value,FAcctID:fieldvalue},


                 success:function(response){
                   if(JSON.parse(response.result)[0])
                   {
                   WfForm.changeFieldValue(wldmid+"_"+rowIndex, {
                   value: JSON.parse(response.result)[0].FItemID},
                   specialobj: [
                       {id:JSON.parse(response.result)[0].FItemID},{name:JSON.parse(response.result)[0].FName}
                   ])
                }
            }
        }
              )
    }
        )
          