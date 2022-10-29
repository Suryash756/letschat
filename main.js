function check(){
  user_name=document.getElementById("value").value;
  localStorage.setItem("user_name",user_name);
  window.location = "index2.html";
}