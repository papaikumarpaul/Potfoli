const responsiveMenu = document.getElementById('menu-tab');
const navBar = document.querySelector('.header');
navBar.addEventListener('click',navMenu);
responsiveMenu.addEventListener('click',navMenu);
function navMenu(){
    navBar.classList.toggle('responsive-nav');
}

// Email
const form=document.querySelector("form");
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "papaikumarpaul@gmail.com",
        Password : "0C1432B12EC27133D01C2FE0B000D98E77A8",
        To : 'papaikumarpaul@gmail.com',
        From : "papaikumarpaul@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();
  })

// function resume(){
//     var resumeContainer = document.createElement("div");
//     resumeContainer.className = "resume-container";
//     resumeContainer.appendChild(`${ <div className="resume-box">
//     <iframe src={} title="Resume" class="resume-iframe" />
//   </div>
//   <a href={} target="_blank" rel="noopener noreferrer" class="resume-link">
//     View Resume
//   </a>}`)
// }



//   function resume() {
//     console.log("Resume function called.");
  
    
//     let resumeID="1PRCTeglotCi3Mpv3DCt4RXluctRDabN9"
//     var resumePdfUrl = `https://drive.google.com/drive/u/0/folders/${resumeID}`;
  
//     var resumeContainer = document.createElement("div");
//     resumeContainer.className = "resume-container";
  
   
//     var resumeBox = document.createElement("div");
//     resumeBox.className = "resume-box";
  
//     var resumeIframe = document.createElement("iframe");
//     resumeIframe.src = resumePdfUrl;
//     resumeIframe.title = "Resume";
//     resumeIframe.className = "resume-iframe";
  
    
//     resumeBox.appendChild(resumeIframe);
  
 
    
//     var resumeLink = document.createElement("a");
//     resumeLink.href = resumePdfUrl;
//     resumeLink.target = "_blank";
//     resumeLink.rel = "noopener noreferrer";
//     resumeLink.className = "resume-link";
//     resumeLink.textContent = "View Resume";
  
    
//     resumeContainer.appendChild(resumeBox);
//     resumeContainer.appendChild(resumeLink);
  

//     // var resumeWrapper = document.getElementById("resume-wrapper");
//     // resumeWrapper.appendChild(resumeContainer);
//   }

function resume(){
    console.log("resume");
    let resumeID="1PRCTeglotCi3Mpv3DCt4RXluctRDabN9"
   let resumePdfUrl = `https://drive.google.com/drive/u/0/folders/${resumeID}`;
    window.open(resumePdfUrl, '_blank');
}

  

