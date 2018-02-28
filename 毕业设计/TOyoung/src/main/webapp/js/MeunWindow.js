
/**
 * 这些方法是拿来控制导航栏的弹出层的
 * 
 * author：小周
 */
function followWindows(){
			layer.open({
			  type: 2,
			  skin: 'layui-layer-molv',
			  title: '关注列表',
			  resize: false,
			  shade: 0.8,
			  area: ['380px', '580px'],
			  content: '/Appbar/tomyattention' 
			}); 
		}
		
		function MessageWindow(){
			layer.open({
			  type: 2,
			  skin: 'layui-layer-molv',
			  title: '新消息',
			  resize: false,
			  shade: 0.8,
			  area: ['380px', '580px'],
			  content: '/Appbar/tomessage' 
			}); 
		}
		
		function infoWindow(){
			layer.open({
			  type: 2,
			  skin: 'layui-layer-molv',
			  title: '修改个人信息',
			  resize: false,
			  shade: 0.8,
			  area: ['420px', '580px'],
			  content: '/Appbar/toupdateinfo'
			}); 
		}
		
		function UpdatePwdWindow(){
			layer.open({
			  type: 2,
			  skin: 'layui-layer-molv',
			  title: '修改密码',
			  resize: false,
			  shade: 0.8,
			  area: ['420px', '580px'],
			  content: '/Appbar/toupdatepassword'
			}); 
		}
		
		/*function UpdatePwdWindow(){
			layer.open({
			  type: 2,
			  skin: 'layui-layer-molv',
			  title: '修改密码',
			  resize: false,
			  shade: 0.8,
			  area: ['420px', '400px'],
			  content: '/Appbar/tomyattention'
			}); 
		}*/
		
		function UpdatePic(){
			layer.open({
			  type: 2,
			  skin: 'layui-layer-molv',
			  title: '修改头像',
			  resize: false,
			  shade: 0.8,
			  area: ['420px', '580px'],
			  content: '/Appbar/toupdatepicture'
			}); 
		}
		
		function Collection(){
			layer.open({
			  type: 2,
			  skin: 'layui-layer-molv',
			  title: '我的收藏',
			  resize: false,
			  shade: 0.8,
			  area: ['420px', '580px'],
			  content: '/Appbar/tocollect'
			}); 
		}
				
		function LoginWindow(){
			layer.open({
			  type: 2,
			  skin: 'layui-layer-molv',
			  title: '登录',
			  resize: false,
			  shade: 0.8,
			  area: ['500px', '500px'],
			  content: '/login/doLogin' 
			}); 
		}
		function RegistWindow(){
			layer.open({
			  type: 2,
			  skin: 'layui-layer-molv',
			  title: '注册',
			  resize: false,
			  shade: 0.8,
			  area: ['600px', '600px'],
			  content: '/login/Regist' 
			}); 
		}
		
		function exit(){
			$.ajax({
				type:"post",
	    		url:"/Appbar/doExit",
	    		async:false,
	    		
	    		success:function(data){
	    			layer.msg("退出成功");
	    		},error:function(){
	    			alert("获取数据失败");
	    		}
			});
		}