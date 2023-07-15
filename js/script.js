'use state'

const telNumber = document.querySelector('#tel').value;
const sendBtn = document.querySelector('#btn');

window.onload = function() {
  document.getElementById("tel").focus();
}

const errorStr = ['A', 'B', 'C']
sendBtn.addEventListener("click", () => {
  if(typeof telNumber === errorStr){
    alert('qate')
  } else{
    alert('duris');
  }
})

