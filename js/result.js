const board = document.getElementById("image");
canvasH = screen.height
canvasW = screen.width
board.height = canvasH
board.width = canvasW

document.getElementById("show_image").height = canvasH / 1.5
document.getElementById("show_image").width = canvasW / 1.5

const ctx = board.getContext("2d");

bg_color = "255,255,255"
text_color = "0,0,0"

draw(text_color,bg_color)

function draw(text,bg){
  ctx.clearRect(0,0,canvasW,canvasH)

  let chara = new Image();
  src_height = localStorage.getItem("height");
  src_width = localStorage.getItem("width");

  ctx.fillStyle = 'rgb(' + bg + ")";
  ctx.fillRect(0, 0, board.width, board.height);

  if(localStorage.getItem("image") != ""){
    chara.src = localStorage.getItem("image");
    chara.onload = () => {
      let imageW,imageH;
      if(src_width / src_height < canvasW / canvasH){
        imageW = canvasW;
        imageH = Math.floor(src_height * (canvasW / src_width));
        ctx.drawImage(chara, 0, (board.height - imageH) / 2, imageW, imageH);
      }else{
        imageH = canvasH;
        imageW = Math.floor(src_width * (canvasH / src_height));
        ctx.drawImage(chara, (board.width - imageW) / 2, 0, imageW, imageH);
      }
      ctx.font = board.height / 20 + 'px monospace';
      ctx.fillStyle = 'rgb(' + text + ")"
      ctx.textBaseline = 'center';
      ctx.textAlign = 'center';
      let x = (board.width / 2);
      let y = (board.height / 2);
      ctx.fillText(localStorage.getItem("input"), x, y);

      let show_image = board.toDataURL();
      document.getElementById("show_image").src = show_image
    }


  }else{
    ctx.font = board.height / 20 + 'px monospace';
    ctx.fillStyle = 'rgb(' + text + ")";
    ctx.textBaseline = 'center';
    ctx.textAlign = 'center';
    let x = (board.width / 2);
    let y = (board.height / 2);
    ctx.fillText(localStorage.getItem("input"), x, y);

    let show_image = board.toDataURL();
    document.getElementById("show_image").src = show_image
  }
}

function text_color_change_1(){
  let code = document.getElementById("text_color").value
  let red   = parseInt(code.substring(1,3), 16);
  let green = parseInt(code.substring(3,5), 16);
  let blue  = parseInt(code.substring(5,7), 16);
  text_color = red + "," + green + "," + blue;
  draw(text_color,bg_color)
}

function bg_color_change_1(){
  let code = document.getElementById("bg_color").value
  let red   = parseInt(code.substring(1,3), 16);
  let green = parseInt(code.substring(3,5), 16);
  let blue  = parseInt(code.substring(5,7), 16);
  bg_color = red + "," + green + "," + blue;
  draw(text_color,bg_color)
}

let text_color_change = document.getElementById('text_color');
text_color_change.addEventListener('change', text_color_change_1);

let bg_color_change = document.getElementById('bg_color');
bg_color_change.addEventListener('change', bg_color_change_1);
