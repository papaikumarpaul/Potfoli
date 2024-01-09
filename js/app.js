const responsiveMenu = document.getElementById('menu-tab');
const navBar = document.querySelector('.header');
navBar.addEventListener('click',navMenu);
responsiveMenu.addEventListener('click',navMenu);
function navMenu(){
    navBar.classList.toggle('responsive-nav');
}

// Email
// const form=document.querySelector("form");
// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "papaikumarpaul@gmail.com",
//         Password : "0C1432B12EC27133D01C2FE0B000D98E77A8",
//         To : 'papaikumarpaul@gmail.com',
//         From : "papaikumarpaul@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     sendEmail();
//   })

