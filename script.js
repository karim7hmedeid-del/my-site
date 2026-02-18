document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  const msg = document.getElementById("msg");
  msg.textContent = "تسجيل الدخول مؤقت: مفيش Backend متوصّل لسه";
});
