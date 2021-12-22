$(function(){
	//加载配置文件
	if(localStorage.getItem("auto")!=null){
		$("#auto").prop("checked","true");
	}
	
	$("#kw").change(function(){
		if($("#kw").val() !=""){
			$(".clear").css("visibility","visible");
		}else{
			$(".clear").css("visibility","hidden");
		}
	})
	$(".clear").click(function(){
		$("#kw").val("");
		$(".clear").css("visibility","hidden");
	})
	$("#kw").keydown(function(){
		if($("#kw").val() !=""){
			$(".clear").css("visibility","visible");
		}else{
			$(".clear").css("visibility","hidden");
		}
	})
	
	$(".ss").click(function(){
		$("#form").submit();
	})
	
	$("#btn_o").click(function(){
		if($("#btn_o").attr("class") == "btn_bf"){
			
			$("#btn_o").removeClass("btn_bf");
			$("#btn_o").addClass("btn_zt");
			document.getElementById("music").pause();
		}else{
			$("#btn_o").removeClass("btn_zt");
			$("#btn_o").addClass("btn_bf");
			document.getElementById("music").play();
		}
	})
	
	$(".bj_btn").click(function(){
		document.getElementById("bj_btn").click();
	})
	$(".setting").click(function(){
		$(".settings").toggle(1000);
	})
})

function over(){
	if(document.getElementById('bj_btn').files[0] != undefined){
		//把背景图片缓存到本地并替换背景图
		alert("更换背景图-->开发中...");
	}
	if($("#auto").prop("checked")==true){
		localStorage.setItem("auto","true");
		alert("由于html的扰民限制,不支持自动播放,仅写入配置文件");
	}else{
		localStorage.removeItem("auto");
	}
}

onload = function(){
	document.getElementById("music").load();
}