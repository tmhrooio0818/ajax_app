function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('load', post);