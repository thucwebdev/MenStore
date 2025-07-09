let accounts=[
    {
        account: "lam113",
        password: "123",
        islogIn: false
    },
]
localStorage.accounts = JSON.stringify(accounts)
accounts = JSON.parse(localStorage.accounts);
// localStorage.clear()
function SignUp() {
  let accountInput = document.getElementById("account").value.toLowerCase();
  let passwordInput = document.getElementById("password").value;
  let repasswordInput = document.getElementById("repassword").value;
  let result = document.getElementById("result");
  let foundUser = accounts.find((value) => {
    return value.account === accountInput;
  });

  if (!foundUser) {
    if(accountInput.length < 8) {
    result.innerText = "❌ Tài khoản chứa ít nhất 8 kí tự";
    result.style.color = "red";
    }
    else if (passwordInput !== repasswordInput) {
      result.innerText = "❌ Mật khẩu nhập lại không đúng";
      result.style.color = "red";
    } else {
      let acc = {
        account: accountInput,
        password: passwordInput,
        islogIn: false,
      };
      accounts.push(acc);
      JSON.stringify(accounts);
      localStorage.accounts = JSON.stringify(accounts);
      result.innerText = "✅ Đăng ký thành công";
      result.style.color = "green";     
      window.location.href = "./login.html"
    }
  } else {
    result.innerText = "❌ Tài khoản Đã tồn tại";
    result.style.color = "red";
  }
}

document.getElementById("signup").addEventListener("click", function () {
  SignUp();
});
