       
        var data1;//全局变量，用来接收ajax返回的数据。由于jq-ajax方法是参数中的方法，return无法将其取出。
        var role;
		var state;
        
        
        //初始化方法
		$(document).ready(function(){

			creatTable();//进入页面时生成表格

			//页码配置
			Page({
				num:5,					//页码数
				elem:$('#page1'),		//指定的元素
				callback:function(n){   //回调函数
					role = $("#role").val();
					state = $("#state").val();
					getPage(n,role,state,null);
				}
			});			
		
		});
		
		//使用选择框
		$("select").change(function(){				
			 role = $("#role").val();
			 state = $("#state").val();
			 getPage(1,role,state,null);
			 console.log(data1);
			    //查看用户类型改变后从新生成页码
				Page({
					num:data1.totalPage,					//页码数
					elem:$('#page1'),		//指定的元素
					callback:function(n){   //回调函数
						role = $("#role").val();
					    state = $("#state").val();//获取查看用户类型
		                getPage(n,role,state);//异步		
					}
				});		
		});
		
		//批量选择
		$("#ckbox").click(function(){
			if($("#ckbox").is(':checked')==true){
				console.log($("#ckbox").is(':checked'));
				$("input[type=checkbox]").each(function(){
					this.checked=true;
				})
			}else{
				$("input[type=checkbox]").each(function(){
					this.checked=false;
				})
			}
		});
		
		
		//批量操作事件
		$(".btn1").click(function(){
			var text;
			if($(this).attr("id")=="delete"){
               text = getCheckbox();
			}else{
			   if(text.length>3){
			   	alert("不能同时管理多个！");
			   }else{
			   	
			   }
			   
			}
		});
		
		
		//搜索框事件
		$("#search").click(function(){
        	var search = $("input[name=search]").val();
        	console.log(search);
        	role = $("#role").val();
			 state = $("#state").val();
			 getPage(1,role,state,search);
			 console.log(data1);
			    //搜索关键字改变后从新生成页码
				Page({
					num:data1.totalPage,					//页码数
					elem:$('#page1'),		//指定的元素
					callback:function(n){   //回调函数
						search = $("input[name=search]").val();
						role = $("#role").val();
					    state = $("#state").val();//获取查看用户类型
		                getPage(n,role,state,search);//异步		
					}
		       });
		});
		
		//增加按钮
		$(".add").click(function(){
			var id = $(this).attr("id");
			addUser(id);
		});
		

/*-----------------------------下面是需要调用的js函数------------------------------------------*/
		//异步获取后台数据		
        function getPage(n,role,state,search){
        	$.ajax({
        		type:"post",
        		url:"",
        		async:false,
        		data:{"pageName":n,
        		"role":role,
        		"state":state,
        		"search":search,
        		},
        		success:function(data){
        			 data1 = data ;
        			 console.log();
        		},error:function(){
        			alert("获取数据失败");
        		}
        
        	});
        }
        
        //动态遍历json生成表格。
        function creatTable(data){
        	
        	$("#table tbody").empty();//清空tbody
 
        	 $.each(data,function(index,user){
        	 	var str = '<tr>'
        	 	          +'<td><input  type="checkbox" name="item" value="'+user.uid+'" /></td>'
        	 	          +'<td>'+user.uid+'</td>'
        	 	          +'<td>'+user.account+'</td>'
        	 	          +'<td>'+user.name+'</td>'
        	 	          +'<td>'+user.role+'</td>'
        	 	          +'<td>'+user.state+'</td>'
        	 	          +'<td><button id="'+user.uid+'" class="btn btn-default btn-xs add">查看详细</button><button class="btn btn-danger btn-xs">封禁</button></td>'
        	 	          +'</tr>';
        	 	$("#table tbody").append(str); 
        	 	
        	 });
        }
        
        //获取被选中的表格行
        function getCheckbox(){
        	var text="";
        	$("input[name=item]").each(function(){
        		if($(this).is(':checked')==true){
        			text += ","+$(this).val(); 
        		}
        	});
        	return text;
        	console.log(text);
        }
        
        //根据参数呼出相应的窗口
        function addUser(id){
        	layer.open({
			  type: 2,
			  area: ['700px', '450px'],
			  fixed: false, //不固定
			  maxmin: true,
			  content: 'test/iframe'+id
			});
			layer.msg('test/iframe/'+id);
        }

        