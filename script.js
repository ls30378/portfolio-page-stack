// rotate Hamburger menu and show menu

const menuButton = document.querySelector('.nav--menu-button');
const headerMenu = document.querySelector('.header--menu');
const aboutSection = document.getElementById('about');
const projectSection = document.getElementById('project');
const aboutLink = document.getElementById('aboutLink');
const projectLink = document.getElementById('projectLink');

function toggleActive() {
    menuButton.classList.toggle('active');
    headerMenu.classList.toggle('active');
    aboutSection.classList.toggle('active');
    projectSection.classList.toggle('active');

}

function switchProject() {
    if (projectSection.classList.contains('active')) {
        if (projectSection.classList.contains('second')) {
            aboutSection.classList.toggle('first');
            aboutSection.classList.add('second');
            projectSection.classList.toggle('second');
            projectSection.classList.add('first');
        }
        toggleActive();
    }


}
function switchAbout() {
    if (aboutSection.classList.contains('active')) {
        if (aboutSection.classList.contains('second')) {
            projectSection.classList.toggle('first');
            projectSection.classList.add('second');
            aboutSection.classList.toggle('second');
            aboutSection.classList.add('first');
        }
        toggleActive();
    }


}

menuButton.addEventListener('click', toggleActive);
aboutSection.addEventListener('click', switchAbout);
projectSection.addEventListener('click', switchProject);

aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    switchAbout();
})

projectLink.addEventListener('click', (event) => {
    event.preventDefault();
    switchProject();
})



