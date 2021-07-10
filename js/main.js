setInterval('form()',100);

file_url = ""
var url
var height
var width

function form(){
  if(document.getElementById("select_image").value != ""){
    document.getElementById("select_image_form").innerHTML = "選択を解除";
    document.getElementById('select_image_form').style.backgroundColor = 'lightgray';
  }else{
    document.getElementById("select_image_form").innerHTML = "画像を選択";
    document.getElementById('select_image_form').style.backgroundColor = 'dimgray';
  }
}

function select_image(){
  if(document.getElementById("select_image").value != ""){
    document.getElementById("select_image").value = "";
    document.getElementById("select_image_form").innerHTML = "画像を選択";
    document.getElementById("select_image").type = "text"
    document.getElementById('select_image_form').style.backgroundColor = 'lightgray';
  }else{
    document.getElementById("select_image").type = "file"
    document.getElementById('select_image_form').style.backgroundColor = 'dimgray';
  }
}

function perform(){
  let input = document.getElementById("input").value;
  let image = document.getElementById("select_image").value;


  if(input == ""){
    alert("文字を入力して下さい");
  }else{
    localStorage.setItem("input",input);
    if(image != ""){
      localStorage.setItem("image",url);
      localStorage.setItem("height",height);
      localStorage.setItem("width",width);
    }else{
      localStorage.setItem("image","");
      localStorage.setItem("height","");
      localStorage.setItem("width","");
    }
    window.location.href = "result.html";
  }
}

document.getElementById("select_image").addEventListener('change', function(e){
  file_url = e.target.files[0];
  let reader = new FileReader();
  reader.onload = function(){
    url = reader.result;
    let img = new Image()
    img.onload = function(){
      width = img.width
      height = img.height
    }
    img.src = url
  }
  reader.readAsDataURL(file_url)
});

function info(){
  let result = window.confirm("使い方ページに飛びますか？")
  if(result){
    window.location.href = "https://github.com/kyurururn/Yoteikun"
  }
}