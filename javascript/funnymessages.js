var msg = document.getElementById("text");
 
function fun1() {
   var myIntervalID = setInterval(function () {
       msg.innerHTML += "<p>fun1 started :)</p>";
       msg.innerHTML += "<p>fun1 ended :)</p>";
    },6000);
    setTimeout (function(){clearInterval(myIntervalID);},30000);
}
function fun2() {
    msg.innerHTML += "<p>Hello People! How fun is coding! :)</p>";
    fun1();
    msg.innerHTML += "<p>fun2 ended :)</p>";
}

fun2();
      