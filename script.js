const bioLink = document.getElementById("bioLink");
const projectsLink = document.getElementById("projectsLink");
const resumeLink = document.getElementById("resumeLink");
const contactLink = document.getElementById("contactLink");
const newContent = document.getElementById("newContent");

resumeLink.addEventListener('click', ()=> {
    newContent.innerHTML = `
    <embed id="resume" src="Nathan Papa Resume.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" frameBorder="0" scrolling="auto" height="90%" width="90%"></embed>
    <a id="downloadButton" href="Nathan Papa Resume.pdf" download="Nathan Papa Resume">
    <button  type="button">Download My Resume</button>
    </a>
    `;
    const resume = document.getElementById("resume");
    const downloadButton = document.getElementById("downloadButton");

    resume.style = "margin: 0 auto";
    downloadButton.style = `
    display: inline-block;
    background-color: #BAFF39;
    cursor: pointer;
    color: #6E6E6E;
    text-align: center;
    border: solid 1px #6E6E6E;
    border-radius: 1em;
    `;
});