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

var user = "jovince";
var pswrd = 1234;

function validateCredentials() {
  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  for (let i of datas) {
    if (username == i.username && password === i.password) {
      console.log("your login sucees");
    } else {
      console.log("your login failed");
    }
  }
}
