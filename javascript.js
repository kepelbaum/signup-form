let passone = document.querySelector('#password');
let passtwo = document.querySelector('#confirm');

passone.addEventListener('input', checkPass);
passtwo.addEventListener('input', checkPass);

function checkPass(e) {
    if (document.getElementById('confirm').value !== document.getElementById('password').value) {
        passone.style.border = '3px solid red';
        passtwo.style.border = '3px solid red';
    }
     else {
         passone.style.border = '';
         passtwo.style.border = ''; 
     }
}
