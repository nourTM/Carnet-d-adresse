var ii =0;

/*a*/
var A = [];
var a = 0;

/*b*/
var B = [];
var b =0;

/*c*/
var C = [];
var c =0;

/*D*/
var D = [];
var d =0;

/*E*/
var E = [];
var e =0;

/*F*/
var F = [];
var f =0;

/*G*/
var G = [];
var g =0;

/*H*/
var H = [];
var h =0;

/*I*/
var I= [];
var i =0;

/*J*/
var J = [];
var j =0;

/*K*/
var K = [];
var k =0;

/*L*/
var L = [];
var l =0;

/*M*/
var M = [];
var m =0;

/*N*/
var N = [];
var n =0;

/*O*/
var O = [];
var o =0;

/*P*/
var P = [];
var p =0;


/*Q*/
var Q = [];
var q =0;


/*R*/
var R = [];
var r =0;


/*S*/
var S= [];
var s =0;


/*T*/
var T = [];
var t =0;


/*U*/
var U = [];
var u =0;


/*V*/
var V = [];
var v =0;


/*W*/
var W = [];
var w =0;

/*X*/
var X = [];
var x =0;

/*Y*/
var Y = [];
var y =0;

/*Z*/
var Z = [];
var z =0;



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

function affichercontact(clas,T,n,l){
		var div = $("<div></div>").attr("id","c"+l+n).css({"width":"100%","height":"70px","position":"relative","z-index":"1"});//.width(100);"margin-top":"9px""display":"inline-block",
		$("#"+clas).append(div);
		var image = $("<div></div>").attr("id","image"+l+n).css({"width":"15%","float":"left","height":"70px","padding-top":"10px"});//.width(20%);
		$("#c"+l+n).append(image);
		var user = $("<img>").attr("src",T[n-1].img).css({"height":"60px","width":"60px"});//.width(60).height(60);
		$("#image"+l+n).append(user);
		var setting = $("<div></div>").attr("id","setting"+l+n).css({"width":"10%","height":"70px","float":"right"});//.width(80%);
		$("#c"+l+n).append(setting);
		var modf = $("<img>").attr("src","modifier.png").css({"height":"30px","width":"30px"});
		$("#setting"+l+n).append(modf);
		var supp = $("<img>").attr("src","trash.png").css({"height":"30px","width":"30px","margin-bottom":"5px"});
		$("#setting"+l+n).append(supp);
		var info = $("<div></div>").attr("id","info"+l+n).css({"width":"50%","height":"70px","float":"right"});//.width(80%);
		$("#c"+l+n).append(info);
		var nom = $("<p></p>").text(T[n-1].nom);
		$("#info"+l+n).append(nom);
		var prenom = $("<p></p>").text(T[n-1].prenom);
		$("#info"+l+n).append(prenom);
		var email = $("<p></p>").text(T[n-1].email);
		$("#info"+l+n).append(email);
		var hr = document.createElement("hr");
		$("#"+clas).append(hr);
}


function ListerA(){
	for(ii=0;ii<a;ii++){
		affichercontact("contactA",A);
	}
}

function ListerB(){
	for(ii=0;ii<b;i++){
		affichercontact("contactB",B);
	}
}
function ListerC(){
	for(ii=0;i<c;ii++){
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
				} 
				else {
					if ((fname[0]=="a")||(fname[0]=="A")){
						A[a] = new Contact(fname,lname,"@",email,num,"gn_");
						a++;
						affichercontact("contactA",A,a,"a");
					} 
					else if((fname[0]=="b")||(fname[0]=="B")){
							B[b] = new Contact(fname,lname,"@",email,num,"gn_");
							b++;
							affichercontact("contactB",B,b,"b");
					     } 
					else if((fname[0]=="c")||(fname[0]=="C")){
							C[c] = new Contact(fname,lname,"@",email,num,"gn_");
							c++;
							affichercontact("contactC",C,c,"c");
					     }
				    else if((fname[0]=="d")||(fname[0]=="D")){
							D[d] = new Contact(fname,lname,"@",email,num,"gn_");
							d++;
							affichercontact("contactD",D,d,"d");
					     }
				    else if((fname[0]=="e")||(fname[0]=="E")){
							E[e] = new Contact(fname,lname,"@",email,num,"gn_");
							e++;
							affichercontact("contactE",E,e,"e");
					     }
					else if((fname[0]=="F")||(fname[0]=="f")){
							F[f] = new Contact(fname,lname,"@",email,num,"gn_");
							f++;
							affichercontact("contactF",F,f,"f");
					     }
				    else if((fname[0]=="g")||(fname[0]=="G")){
							G[g] = new Contact(fname,lname,"@",email,num,"gn_");
							g++;
							affichercontact("contactG",G,g,"g");
					     }
			        else if((fname[0]=="H")||(fname[0]=="h")){
							H[h] = new Contact(fname,lname,"@",email,num,"gn_");
							h++;
							affichercontact("contactH",H,h,"h");
					     }
				    else if((fname[0]=="i")||(fname[0]=="I")){
							I[i] = new Contact(fname,lname,"@",email,num,"gn_");
							i++;
							affichercontact("contactI",I,i,"i");
					     }
				    else if((fname[0]=="j")||(fname[0]=="J")){
							J[j] = new Contact(fname,lname,"@",email,num,"gn_");
							j++;
							affichercontact("contactJ",J,j,"j");
					     }
				    else if((fname[0]=="k")||(fname[0]=="K")){
							K[k] = new Contact(fname,lname,"@",email,num,"gn_");
							k++;
							affichercontact("contactK",K,k,"k");
					     }
				    else if((fname[0]=="L")||(fname[0]=="l")){
							L[l] = new Contact(fname,lname,"@",email,num,"gn_");
							l++;
							affichercontact("contactL",L,l,"l");
					     }
				    else if((fname[0]=="m")||(fname[0]=="M")){
							M[m] = new Contact(fname,lname,"@",email,num,"gn_");
							m++;
							affichercontact("contactM",M,m,"m");
					     }
				    else if((fname[0]=="n")||(fname[0]=="N")){
							N[n] = new Contact(fname,lname,"@",email,num,"gn_");
							n++;
							affichercontact("contactN",N,n,"n");
					     }
				    else if((fname[0]=="o")||(fname[0]=="O")){
							O[o] = new Contact(fname,lname,"@",email,num,"gn_");
							o++;
							affichercontact("contactO",O,o,"o");
					     }
                      else if((fname[0]=="p")||(fname[0]=="P")){
							P[p] = new Contact(fname,lname,"@",email,num,"gn_");
							p++;
							affichercontact("contactP",P,p,"p");
					     }
				      else if((fname[0]=="q")||(fname[0]=="Q")){
							Q[q] = new Contact(fname,lname,"@",email,num,"gn_");
							q++;
							affichercontact("contactQ",Q,q,"q");
					     }	
				      else if((fname[0]=="r")||(fname[0]=="R")){
							R[r] = new Contact(fname,lname,"@",email,num,"gn_");
							q++;
							affichercontact("contactR",R,r,"r");
					     }
				     else if((fname[0]=="s")||(fname[0]=="S")){
							S[s] = new Contact(fname,lname,"@",email,num,"gn_");
							s++;
							affichercontact("contactS",S,s,"s");
					     }
				    else if((fname[0]=="T")||(fname[0]=="t")){
							T[t] = new Contact(fname,lname,"@",email,num,"gn_");
							t++;
							affichercontact("contactT",T,t,"t");
					     }
				    else if((fname[0]=="t")||(fname[0]=="T")){
							T[t] = new Contact(fname,lname,"@",email,num,"gn_");
							t++;
							affichercontact("contactT",T,t,"t");
					     }
				    else if((fname[0]=="u")||(fname[0]=="U")){
							U[u] = new Contact(fname,lname,"@",email,num,"gn_");
							u++;
							affichercontact("contactU",U,u,"u");
					     }
				    else if((fname[0]=="v")||(fname[0]=="V")){
							V[v] = new Contact(fname,lname,"@",email,num,"gn_");
							v++;
							affichercontact("contactV",V,v,"v");
					     }
                      else if((fname[0]=="w")||(fname[0]=="W")){
							W[w] = new Contact(fname,lname,"@",email,num,"gn_");
							w++;
							affichercontact("contactW",W,w,"w");
					     }
				      else if((fname[0]=="x")||(fname[0]=="X")){
							X[x] = new Contact(fname,lname,"@",email,num,"gn_");
							x++;
							affichercontact("contactX",X,x,"x");
					     }	
				      else if((fname[0]=="y")||(fname[0]=="Y")){
							Y[y] = new Contact(fname,lname,"@",email,num,"gn_");
							y++;
							affichercontact("contactY",Y,y,"y");
					     }
				     else if((fname[0]=="z")||(fname[0]=="Z")){
							Z[z] = new Contact(fname,lname,"@",email,num,"gn_");
							z++;
							affichercontact("contactZ",Z,z,"z");
					     }
					




					alert("you have Successfully register");
					$("form")[0].reset();
						$("#register").off("click");
						$(".main").hide();		
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
	     //ListerC();
	}else {
		$("#contactC").css("display","none");
	}	
	});
	$("#D").click(function(){
		if (($("#contactD").css("display"))=="none"){
		$("#contactD").css("display","block");
	     //ListerC();
	}else {
		$("#contactD").css("display","none");
	}	
	});
	$("#E").click(function(){
		if (($("#contactE").css("display"))=="none"){
		$("#contactE").css("display","block");
	     //ListerC();
	}else {
		$("#contactE").css("display","none");
	}	
	});
	$("#F").click(function(){
		if (($("#contactF").css("display"))=="none"){
		$("#contactF").css("display","block");
	     //ListerC();
	}else {
		$("#contactF").css("display","none");
	}	
	});
	$("#G").click(function(){
		if (($("#contactG").css("display"))=="none"){
		$("#contactG").css("display","block");
	     //ListerC();
	}else {
		$("#contactG").css("display","none");
	}	
	});
	$("#H").click(function(){
		if (($("#contactH").css("display"))=="none"){
		$("#contactH").css("display","block");
	     //ListerC();
	}else {
		$("#contactH").css("display","none");
	}	
	});
	$("#I").click(function(){
		if (($("#contactI").css("display"))=="none"){
		$("#contactI").css("display","block");
	     //ListerC();
	}else {
		$("#contactI").css("display","none");
	}	
	});
	$("#J").click(function(){
		if (($("#contactJ").css("display"))=="none"){
		$("#contactJ").css("display","block");
	     //ListerC();
	}else {
		$("#contactJ").css("display","none");
	}	
	});
	$("#K").click(function(){
		if (($("#contactK").css("display"))=="none"){
		$("#contactK").css("display","block");
	     //ListerC();
	}else {
		$("#contactK").css("display","none");
	}	
	});
	$("#L").click(function(){
		if (($("#contactL").css("display"))=="none"){
		$("#contactL").css("display","block");
	     //ListerC();
	}else {
		$("#contactL").css("display","none");
	}	
	});
	$("#M").click(function(){
		if (($("#contactM").css("display"))=="none"){
		$("#contactM").css("display","block");
	     //ListerC();
	}else {
		$("#contactM").css("display","none");
	}	
	});
	$("#N").click(function(){
		if (($("#contactN").css("display"))=="none"){
		$("#contactN").css("display","block");
	     //ListerC();
	}else {
		$("#contactN").css("display","none");
	}	
	});
	$("#O").click(function(){
		if (($("#contactO").css("display"))=="none"){
		$("#contactO").css("display","block");
	     //ListerC();
	}else {
		$("#contactO").css("display","none");
	}	
	});
	$("#P").click(function(){
		if (($("#contactP").css("display"))=="none"){
		$("#contactP").css("display","block");
	     //ListerC();
	}else {
		$("#contactP").css("display","none");
	}	
	});
	$("#Q").click(function(){
		if (($("#contactQ").css("display"))=="none"){
		$("#contactQ").css("display","block");
	     //ListerC();
	}else {
		$("#contactQ").css("display","none");
	}	
	});
	$("#R").click(function(){
		if (($("#contactR").css("display"))=="none"){
		$("#contactR").css("display","block");
	     //ListerC();
	}else {
		$("#contactR").css("display","none");
	}	
	});
	$("#S").click(function(){
		if (($("#contactS").css("display"))=="none"){
		$("#contactS").css("display","block");
	     //ListerC();
	}else {
		$("#contactS").css("display","none");
	}	
	});
	$("#T").click(function(){
		if (($("#contactT").css("display"))=="none"){
		$("#contactT").css("display","block");
	     //ListerC();
	}else {
		$("#contactT").css("display","none");
	}	
	});
	$("#U").click(function(){
		if (($("#contactU").css("display"))=="none"){
		$("#contactU").css("display","block");
	     //ListerC();
	}else {
		$("#contactU").css("display","none");
	}	
	});
	$("#W").click(function(){
		if (($("#contactW").css("display"))=="none"){
		$("#contactW").css("display","block");
	     //ListerC();
	}else {
		$("#contactW").css("display","none");
	}	
	});
	$("#X").click(function(){
		if (($("#contactX").css("display"))=="none"){
		$("#contactX").css("display","block");
	     //ListerC();
	}else {
		$("#contactX").css("display","none");
	}	
	});
	$("#Y").click(function(){
		if (($("#contactY").css("display"))=="none"){
		$("#contactY").css("display","block");
	     //ListerC();
	}else {
		$("#contactY").css("display","none");
	}	
	});
	$("#Z").click(function(){
		if (($("#contactZ").css("display"))=="none"){
		$("#contactZ").css("display","block");
	     //ListerC();
	}else {
		$("#contactZ").css("display","none");
	}	
	});
	

})


