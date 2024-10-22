const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function (box){
  box.addEventListener('click',function(color){
    if(color.target.id==='box1'){
      body.style.backgroundColor = 'darkkhaki'
    }
    if(color.target.id==='box2'){
      body.style.backgroundColor = 'rgb(15, 245, 118)'
    }
    if(color.target.id==='box3'){
      body.style.backgroundColor = 'rgb(204, 0, 255)'
    }
    if(color.target.id==='box4'){
      body.style.backgroundColor = 'coral'
    }
    if(color.target.id==='box5'){
      body.style.backgroundColor = 'rgb(0, 255, 157)'
    }
  })
});