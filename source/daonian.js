(function(){
  var json;
  var contentCSS = document.querySelector("html") | document.query;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/daonianinfo.json", true);
  xhr.send()
  xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      json = JSON.parse(xhr.responseText);
    }
  }
  if(json.enable){
    document.body.style.filter = "grayscale(1)";
  }
})()
