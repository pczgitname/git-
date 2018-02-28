
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>图样视频首页</title>
        <script type="text/javascript" src="js/jquery.js" ></script>
        <script type="text/javascript" src="js/bootstrap.min.js" ></script>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <style type="text/css">
			#logo {
			padding: 10px;
			}
			#search{
			padding: 20px;
			}
			#user_login{
			padding: 10px;
			}
			html, body {width:100%;height:100%;} /*非常重要的样式让背景图片100%适应整个屏幕*/  
        .my-navbar {padding:20px 0;transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;}  
        .my-navbar a{background:transparent !important;color:#fff !important}  
        .my-navbar a:hover {color:#45bcf9 !important;background:transparent;outline:0}  
        .my-navbar a {transition: color 0.5s ease-in-out;}/*-webkit-transition ;-moz-transition*/  
        .top-nav {padding:0;background:#000;}  
        button.navbar-toggle {background-color:#fbfbfb;}/*整个背景都是transparent透明的，会看不到，所以再次覆盖一下*/  
        button.navbar-toggle > span.icon-bar {background-color:#dedede}  
		</style>
    </head>
    <body>
    	<div class="row" style="background-image:url(img/bg.jpg);height: 250px;">
    		
    		<nav class="navbar navbar-transparent my-navbar" role="navigation">
		<div class="container-fluid">
		<div class="col-sm-4 column" >
		<div class="navbar-header" id="logo">
		
		</div><br>
			<img src="img/logo.png" />
		</div>
		<div class="col-sm-4 column" >
		<ul class="nav navbar-nav">
		<div id="search" >
			<form class="form-inline" action="#" method="post">
				<input style="width:230px" type="text" class="form-control" id="name" placeholder="视频、up主">
				<button type="submit" class="btn btn-default">提交</button>
			</form>
		</div>
		</ul>
		</div>
		<div class="col-sm-4 column" >
		<div style="float:right" id="user_login">
		<ul class="nav navbar-nav">
			<li><a href="#">投稿</a></li>
			<li><a href="#">动态</a></li>
			<li><a href="#">历史</a></li>
			<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
					<img height="35px" width="35px"  class="img-circle" src="img/moren.jpg"  />
					<b class="caret"></b>
				</a>
				<ul class="dropdown-menu">
					<li><a href="#">用户名</a></li>
					<li class="divider"></li>
					<li><a href="#">修改头像</a></li>
					<li><a href="#">修改密码</a></li>
					<li><a href="#">关注收藏</a></li>
					<li><a href="#">退出</a></li>
					<!--<li class="divider"></li>
					<li><a href="#">另一个分离的链接</a></li>-->
				</ul>
			</li>
		</ul>
		</div>
		</div>
		</div>  
	</nav>
    	</div><!--row-->
    	<!--
    	导航栏
        -->
    <div class="row">
    <div id="line" style="width:724px;height: 50px;" class="col-sm-7 column">
    <ul class="nav navbar-nav">
    <li><a href="##">首页</a></li>
    <!-- 二级菜单-->
    <!--<li class="dropdown">
      <a href="##" data-toggle="dropdown" class="dropdown-toggle">系列教程<span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="##">CSS3</a></li>
        <li><a href="##">JavaScript</a></li>
        <li class="disabled"><a href="##">PHP</a></li>
      </ul>
    </li>-->
    <li><a href="##">动画</a></li>
    <li><a href="##">番剧</a></li>
    <li><a href="##">国产</a></li>
    <li><a href="##">音乐</a></li>
    <li><a href="##">舞蹈</a></li>
    <li><a href="##">科技</a></li>
    <li><a href="##">电影</a></li>
    <li><a href="##">生活</a></li>
    <li><a href="##">时尚</a></li>
    <li><a href="##">电视剧</a></li>
    <li><a href="##">纪录片</a></li>
  </ul>
  
  </div>
  <div id="myCarousel" class="carousel slide col-sm-7 column" style="width: 660px;height: 340px;">
    <!-- 轮播（Carousel）指标 -->
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>   
    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner" style="width: 645px;height: 340px;">
        <div class="item active">
            <img src="img/bg.jpg" alt="First slide">
        </div>
        <div class="item">
            <img  src="img/bg.jpg" alt="Second slide">
        </div>
        <div class="item">
            <img  src="img/bg.jpg" alt="Third slide">
        </div>
    </div>
    <!-- 轮播（Carousel）导航 -->
    <a class="carousel-control left" href="#myCarousel" 
        data-slide="prev">
    </a>
    <a class="carousel-control right" href="#myCarousel" 
        data-slide="next">
    </a>
</div>

<!--
	轮播图右边推荐
    -->
	<div id="four_video" class="col-sm-5 column" style="float: right;width:410px;height:370px;">
		
		<img src="img/moren.jpg" style="width: 165px;height: 165px;margin-right: 10px;"/>
		<img src="img/moren.jpg" style="width: 165px;height: 165px;"/>
		
		<img src="img/moren.jpg" style="width: 165px;height: 165px;margin-top: 10px;margin-right: 10px;"/>
		<img src="img/moren.jpg" style="width: 165px;height: 165px;margin-top: 10px;"/>
		
	</div>
</div>

<div id="cartoon">
	<div class="row carousel slide col-sm-2 column">
		<a href="#" style="color: black;"><h2>动画</h2></a>
	</div>
	
</div>
<div id="dance">
	<div class="row carousel slide col-sm-2 column">
		<a href="#" style="color: black;"><h2>舞蹈</h2></a>
	</div>
	
</div>
<div id="music">
	<div class="row carousel slide col-sm-2 column">
		<a href="#" style="color: black;"><h2>音乐</h2></a>
	</div>
	
</div>



 	
 	<script>  
        $(window).scroll(function () {  
            if ($(".navbar").offset().top > 50) {$(".navbar-fixed-top").addClass("top-nav");  
            }else {$(".navbar-fixed-top").removeClass("top-nav");}  
        })</script>  
</html>