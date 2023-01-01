const bioLink = document.getElementById("bioLink");
const projectsLink = document.getElementById("projectsLink");
const resumeLink = document.getElementById("resumeLink");
const contactLink = document.getElementById("contactLink");
const newContent = document.getElementById("newContent");
const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");

bioLink.style.display = "none";

lightMode.addEventListener('click', ()=> {
    document.body.style = ``;
})

darkMode.addEventListener('click', ()=> {
    document.body.style = ``;
})

bioLink.addEventListener('click', ()=> {
    newContent.innerHTML = `<p>I am Nathan Papa.</p>`;
    bioLink.style.display = "none";
    projectsLink.style.display = "inline";
    resumeLink.style.display = "inline";
    contactLink.style.display = "inline";
});

projectsLink.addEventListener('click', ()=> {
    newContent.innerHTML = ``;
    bioLink.style.display = "inline";
    projectsLink.style.display = "none";
    resumeLink.style.display = "inline";
    contactLink.style.display = "inline";
});

resumeLink.addEventListener('click', ()=> {
    newContent.innerHTML = `<embed id="resume" src="Nathan Papa Resume.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" frameBorder="0" scrolling="auto" height="90%" width="90%"></embed>
    <div style="display: inline-block; text-align: center;">
    <a href="Nathan Papa Resume.pdf" download="Nathan Papa Resume"><button id="downloadButton" type="button">Download My Resume</button></a>
    </div>
    `;
    const resume = document.getElementById("resume");
    const downloadButton = document.getElementById("downloadButton");

    resume.style = "margin: 0 auto";
    downloadButton.style = `
    display: inline;
    background-color: #BAFF39;
    cursor: pointer;
    color: #6E6E6E;
    margin: 2% auto;
    text-align: center;
    border: solid 1px white;
    border-radius: 1em;
    `;
    downloadButton.addEventListener('mouseover', ()=> {
        downloadButton.style.filter = "grayscale(100%);";
    });
    bioLink.style.display = "inline";
    projectsLink.style.display = "inline";
    resumeLink.style.display = "none";
    contactLink.style.display = "inline";
});

contactLink.addEventListener('click', ()=> {
    newContent.innerHTML = ``;
    bioLink.style.display = "inline";
    projectsLink.style.display = "inline";
    resumeLink.style.display = "inline";
    contactLink.style.display = "none";
});