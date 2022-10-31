const d = document.querySelector('.darker')
const div = document.querySelector('.cd')
// const div2 = document.querySelector('.cd');
const containerForm = document.querySelector('#container-form')
// tst = document.getElementsByClassName('.test');
// div.addEventListener('click', function(){
//     containerForm.style.display = 'none';
// });
// div2.addEventListener('click', function(){
//     containerForm.style.display = 'flex';
// });
div.addEventListener('click', function () {
    if (containerForm.className == 'test-none' && d.className == 'darker') {
        containerForm.className = 'test'
        d.className = 'darker-none'
    } else {
        containerForm.className = 'test-none'
        d.className = 'darker'
    }
});

// form de login

const inputEmail = document.querySelector('#mail')
const inputPassword = document.querySelector('#pass')
const submitButton = document.querySelector('.b-login')

const candidate = document.querySelector('.person')
const welcome = document.querySelector('.person2')

const search = document.querySelector('#pt2')

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
     
    const email = inputEmail.value
    const password = inputPassword.value

    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // candidate.className = "person-none"
        if(data.token != ''){
            candidate.textContent = "Olá, bem-vindo"
        }
        containerForm.style.display = "none"
        search.style.display = 'none'
    }) 
})

const searchButton = document.querySelector('#searchBtn')

// searchButton.addEventListener('click', () =>{
//     async function loadPost() {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')

//         const json = await response.json()
//         const post = json.slice(0, 10)
    
//         post.forEach(post => {
//             let div = document.createElement('#postContainer')
//             div.classList.add('card-item')
//             div.innerHTML = `
//             <h3>${post.title}</h3>
//             <p>${post.body}</p>
//           `
//           postscontainer.appendChild(div)
//         });
//     }
//     loadPost('https://jsonplaceholder.typicode.com/posts')    
// })

async function getPost() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const postscontainer = document.querySelector('#postContainer')
    postscontainer.innerHTML = `<h3>${response.url}</h3>`
    postscontainer.innerHTML = `<p>${response.url}</p>`

}

localStorage.setItem('email', 'eve.holt@reqres.in')








