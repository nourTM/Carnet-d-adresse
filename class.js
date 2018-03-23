var i =0;

/*a*/
var A = [];
var a = 0;

/*b*/
var B = [];
var b =0;

/*c*/
var C = [];
var c =0;



/*function Contact(){
}*/
function Contact(nom,prenom,adresse,email,numero,siteweb){
	this.nom = nom;
	this.prenom = prenom;
	this.adresse = adresse;
	this.email = email; 
	this.numero = numero;
	this.siteweb = siteweb;
	this.img = "user.png";
}

function affichercontact(clas,T,n){
		var div = $("<div></div>").attr("id","c"+n).css({"width":"100%","height":"70px","position":"relative","z-index":"1"});//.width(100);"margin-top":"9px""display":"inline-block",
		$("#"+clas).append(div);
		var image = $("<div></div>").attr("id","image"+n).css({"width":"10%","float":"left","height":"70px","padding-top":"10px"});//.width(20%);
		$("#c"+n).append(image);
		var user = $("<img>").attr("src",T[n-1].img).css({"height":"60px","width":"60px"});//.width(60).height(60);
		$("#image"+n).append(user);
		var info = $("<div></div>").attr("id","info"+n).css({"width":"80%","margin-left":"5px","height":"70px"});//.width(80%);
		$("#c"+n).append(info);
		var nom = $("<p></p>").text(T[n-1].nom);
		$("#info"+n).append(nom);
		var prenom = $("<p></p>").text(T[n-1].prenom);
		$("#info"+n).append(prenom);
		var email = $("<p></p>").text(T[n-1].email);
		$("#info"+n).append(email);	
		var hr = document.createElement("hr");
		$("#"+clas).append(hr);
}


function ListerA(){
	for(i=0;i<a;i++){
		affichercontact("contactA",A);
	}
}

function ListerB(){
	for(i=0;i<b;i++){
		affichercontact("contactB",B);
	}
}
function ListerC(){
	for(i=0;i<c;i++){
		affichercontact("contactC",C);
	}
}



$(function(){
	$("#plus").click(function(){
			$(".main").show();
			$("#register").click(function() {
				var fname = $("#fname").val();
				var lname = $("#lname").val();
				var email = $("#email").val(); 
				var num = $("#num").val();
				if (fname == '' || lname == '' || ((email == '')&&(num == ''))) {
					alert("the registration is failed");
				} else {
					if ((fname[0]=="a")||(fname[0]=="A")){
						A[a] = new Contact(fname,lname,"@",email,num,"gn_");
						a++;
						affichercontact("contactA",A,a);
					} else if((fname[0]=="b")||(fname[0]=="B")){
							B[b] = new Contact(fname,lname,"@",email,num,"gn_");
							b++;
							affichercontact("contactB",B,b);
					} else{  //((fname[0]=="c")||(fname[0]=="C")){
							alert(c);
							C[c] = new Contact(fname,lname,"@",email,num,"gn_");
							c++;
							affichercontact("contactC",C,c);
					}
					alert("you have Successfully register");
					$("form")[0].reset();
					/*$.post("register.php", {
						name1: name,
						email1: email,
						}, function(data) {
							if (data == 'You have Successfully Registered.....') {
							$("form")[0].reset();
						}
						alert(data);
					});*/
				}
			});

	});
	$("#exit").click(function(){
		$("#register").off("click");
		$(".main").hide();
	});
		
	$("#A").click(function(){
		if (($("#contactA").css("display"))=="none"){
			$("#contactA").css("display","block");
			//ListerA();
		}else {
			$("#contactA").css("display","none");
		}
	});
	$("#B").click(function(){
	if (($("#contactB").css("display"))=="none"){
		$("#contactB").css("display","block");
	    // ListerB();
	}else {
		$("#contactB").css("display","none");
	}
		
	});
	
	$("#C").click(function(){
		if (($("#contactC").css("display"))=="none"){
		$("#contactC").css("display","block");
	     ListerC();
	}else {
		$("#contactC").css("display","none");
	}	
	});
})


