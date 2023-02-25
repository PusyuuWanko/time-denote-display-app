console.log("test_script")
window.addEventListener("load",function(){
  var ele=document.getElementsByTagName("output")[0];
  setInterval(function(){
    var date2 = new Date();
    ele.innerHTML=date2;
  },100);
  },false)