let islogIn=false;
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
function CheckAccount(){
    let accountInput = document.getElementById("account").value
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
        } else {
            result.innerText="⚠️ Sai mật khẩu"
            result.style.color="orange"
        }
    }
}


document.getElementById("log-in").addEventListener("click", function () {
CheckAccount();

});
