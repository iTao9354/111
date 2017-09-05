$(function(){
	$("#chatRoom").chatRoom({
		onlineUserUrl:webpath +"websocket/onlineUser",
		socketUrl:"ws://"+pathUrl + webpath + "websocket.ws",
		info:{
			sendUser:{
				userName:userName,
				userId:userId,
				loginId:loginId
				}
			},
			onOpen:function(){
				$.ajax({url:webpath + "websocket/onlineNum",dataType:"json",success:function(data){
					console.log(data);
					$("#onlineUserCount").html(data);
				}});
				$.ajax({url:webpath + "websocket/onlineUser",dataType:"json",success:function(data){
					for(var i = 0;i<data.length;i++){
						$("#chatRoom").append('<li>'
				        +'<a href="javascript:void(0);">'
				        +'<span  class="time" ></span>'
				        +'<span class="details" >'+data[i].userName+'</span>'
				        +'</a>'
				        +'</li>');
					}
				}});
			}
		});
});