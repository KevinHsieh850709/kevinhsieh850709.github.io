var site=null;
var xmlhttp=null;

function setCookie(cname,cvalue) {
  document.cookie=cname+"="+cvalue;
}

function getCookie(cname) {
  var name=cname+"=";
  var ca=document.cookie.split(';');
  for (var i=0; i<ca.length; i++) {
    var c=ca[i].trim();
    if (c.indexOf(name)==0)
      return c.substring(name.length,c.length);
  };
  return "";
}

function loadSiteMap() {
  var xmlhttp=null; 
  if (window.XMLHttpRequest) { 
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {
    // code for IE6, IE5 
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  };
  xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      site=eval("("+xmlhttp.responseText+")");
    };
  };
  xmlhttp.open("GET", "sitemap.json", false);
  xmlhttp.send();
}

function loadMenu() {
  var txt="";
  for (var x1 in site){
    txt+="<li>"+x1;
    txt+="<ul id='sub-menu'>";
    for (var j=0; j<site[x1].length; j++){
      for (var x2 in site[x1][j]){
        if (site[x1][j][x2].substr(site[x1][j][x2].length-3,3)=="htm"){
          txt+="<li><a href='#' onClick=\"displayHTML('"+site[x1][j][x2]+"','content');\">"+x2+"</a></li>";
        };
        if (site[x1][j][x2].substr(site[x1][j][x2].length-3,3)=="xml"){
          txt+="<li><a href='#' onClick=\"displayXSLT('"+site[x1][j][x2]+"','content');\">"+x2+"</a></li>";
        };
      };
    };
    txt+="</ul>";
    txt+="</li>";
  }
  document.getElementById("menu").innerHTML=txt;                                    
}

function displayHTML(fname,dname) {
  showBreadcrumb(fname);
  var xmlhttp=null;
  if (window.XMLHttpRequest) {
    xmlhttp=new XMLHttpRequest();
  } else {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET",fname,true);
  xmlhttp.send();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById(dname).innerHTML=xmlhttp.responseText;
    }
  }
} 

function loadXML(fname){
	if (window.ActiveXObject){
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} else {
		xmlhttp = new XMLHttpRequest();
	}
	xmlhttp.open("GET", fname, false);
	try {xmlhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
	xmlhttp.send("");
	return xmlhttp.responseXML;
}

function displayXSLT(fname,dname){
  showBreadcrumb(fname);
  xml=loadXML(fname);
  xsl=loadXML(fname.substr(0,fname.length-3)+"xsl");
	// code for IE
	if (window.ActiveXObject || xmlhttp.responseType=="msxml-document"){
		ex=xml.transformNode(xsl);
		document.getElementById(dname).innerHTML=ex;
	}
	// code for Chrome, Firefox, Opera, etc.
	else if (document.implementation && document.implementation.createDocument){
	  xsltProcessor=new XSLTProcessor();
	  xsltProcessor.importStylesheet(xsl);
	  resultDocument=xsltProcessor.transformToFragment(xml,document);
	  document.getElementById(dname).innerHTML="";
	  document.getElementById(dname).appendChild(resultDocument) ; 
	}
}

function showBreadcrumb(fname){
  var txt=""; 
  for (var x1 in site){
    var flag=false;
    for (var j=0; j<site[x1].length; j++){
      for (var x2 in site[x1][j]){
        if (site[x1][j][x2]==fname){
          flag=true;
          txt=x1+" >> "+x2;
          break;
        }
      }
      if (flag==true){
        break;
      };
    }
  }
  document.getElementById("breadcrumb").innerHTML=txt;  
}