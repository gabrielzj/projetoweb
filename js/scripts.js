const d = document.querySelector('.darker');
const div = document.querySelector('.cd');
// const div2 = document.querySelector('.cd');
const containerForm = document.querySelector('#container-form');
// tst = document.getElementsByClassName('.test');
// div.addEventListener('click', function(){
//     containerForm.style.display = 'none';
// });
// div2.addEventListener('click', function(){
//     containerForm.style.display = 'flex';
// });
div.addEventListener('click', function () {
    if (containerForm.className == 'test-none' && d.className == 'darker') {
        containerForm.className = 'test';
        d.className = 'darker-none'
    } else {
        containerForm.className = 'test-none';
        d.className = 'darker'
    }
});

// form de login

const inputEmail = document.querySelector('#mail');
const inputPassword = document.querySelector('#pass');
const submitButton = document.querySelector('.b-login');

const candidate = document.querySelector('.person');
const welcome = document.querySelector('.person2');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const email = inputEmail.value;
    const password = inputPassword.value;
    

    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // candidate.className = "person-none"
        console.log(candidate.textContent = "Olá, bem-vindo");
    })
    
    
})


// var request = new XMLHttpRequest();
// request.open('GET', 'https://reqres.in/', true);
// request.onload = function (){
//     console.log(request.responseText);
// };
// request.send();