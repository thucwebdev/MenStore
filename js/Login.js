
// const accounts=[
//     {
//         account: "Lam113",
//         password: "123",
//         age:12
//     },
//     {
//         account: "Lam123",
//         password: "123",
//         age:1
//     },
//     {
//         account: "Lam133",
//         password: "123",
//         age:12
//     }
// ]
// localStorage.accounts = JSON.stringify(accounts)
accounts=JSON.parse(localStorage.accounts);
// localStorage.clear();
let loginUser = accounts.find((value) => {
    return value.islogIn === true;
  });
    if(loginUser) {
        loginUser.islogIn=false;
        localStorage.setItem("accounts", JSON.stringify(accounts));
    }
    else {
        document.getElementById("log-in").addEventListener("click", function () {
        CheckAccount();
});
    }
function CheckAccount(){
    let accountInput = document.getElementById("account").value.toLowerCase()
let passwordInput = document.getElementById("password").value
let result = document.getElementById("result")
    let foundUser = accounts.find((value)=>{
        return  value.account === accountInput;
    })
    
    if(!foundUser) {
        result.innerText="❌ Tài khoản không tồn tại"
        result.style.color="red"
    } else {
        if(passwordInput === foundUser.password ) {
        result.innerText="✅ Đăng nhập thành công"
        result.style.color="green"
        window.location.href = "./index.html"
        foundUser.islogIn=true;
        localStorage.setItem("accounts", JSON.stringify(accounts));
        } else {
            result.innerText="⚠️ Sai mật khẩu"
            result.style.color="orange"
        }
    }
}

document.getElementById("log-in").addEventListener("click", function () {
CheckAccount();

});
