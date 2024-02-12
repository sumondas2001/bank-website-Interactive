// step =>1 button add
document.getElementById('btn-login').addEventListener('click', function(){
     // step => 2 email input add
     const inputEmail = document.getElementById('input-email');
     const email = inputEmail.value;
     

     // step => 3 input password
     const inputPssword = document.getElementById('input-password');
     const password = inputPssword.value;
     
     // console.log(email, password);

     if(email === "sumon1010@gmail.com" && password === '1010'){
          window.location.href = 'bank.html';
     }else{
          alert('invalid user');
     }
    

})