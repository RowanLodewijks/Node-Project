function saveName() {
  var user = document.querySelector('.welcome_input').value;

  localStorage.setItem("user_name", user);
  location.href = 'rooms';
}

function room1() {
  document.querySelector('.room1 .room2 .room3 .room4').style.display = "none";
  document.querySelector('.room1').style.display = "block";
}

function room2() {
  document.querySelector('.room1 .room2 .room3 .room4').style.display = "none"
    document.querySelector('.room2').style.display = "block";
}
function room3() {
  document.querySelector('.room1 .room2 .room3 .room4').style.display = "none";
  document.querySelector('.room3').style.display = "block";
}
function room4() {
  document.querySelector('.room1 .room2 .room3 .room4').style.display = "none";
  document.querySelector('.room4').style.display = "block";
}