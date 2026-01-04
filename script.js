function upper(){
  const text = document.getElementById('text').value;
  document.getElementById('out').innerText = text.toUpperCase();
}

function lower(){
  const text = document.getElementById('text').value;
  document.getElementById('out').innerText = text.toLowerCase();
}
