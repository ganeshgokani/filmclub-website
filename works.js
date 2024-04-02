window.onload = function() {
    document.querySelector(".loader").style.display = "none";
};


//loading animation


function showSidebar()
{
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='flex'


}

function hideBar(event) {
event.stopPropagation();
const sidebar = document.querySelector('.sidebar');
sidebar.style.display = 'none';
}


function hideBar()
{
    sidebar.style.display='none'
}



function showSidebar() {
const sidebar = document.querySelector('.sidebar');
sidebar.style.display = 'flex';
}

function hideBar() {
const sidebar = document.querySelector('.sidebar');
sidebar.style.display = 'none';
}

//navigation bar menu bar



document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start", 
                    inline: "nearest"
                });
       hideBar()     }
        });
    });
});

//Navigate to respective section


