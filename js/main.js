function test() {
  const button = document.getElementById('transcribe');
  button.addEventListener('click', function () {
    alert('Hello')
  });
}


window.addEventListener('load', test)
