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

  var userName = "kalki";
  var passWord = 9090;
  var check = false

  for (let i of datas) {
    if (userName == i.username && passWord === i.password) 

     
     
    
    
    {
      alert("your login sucees");
    }
     else {
      alert("your login failed");
    }
  }
}
