var datas = [
  {
    username: "jovince",
    password: 1234,
  },
  {
    username: "kalki",
    password: 9090,
  },
  {
    username: "shan",
    password: 1010,
  },
];

function validateCredentials() {
  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  var check = false;

  for (let i of datas) {
    if (username == i.username && password == i.password) {
      check = true;
      break;

    }
  }
  if(check){
    alert('login')
  }
  else{
    alert('login faild')
  }
}
