const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
    "task4": { "title": "Project 4", "url": "works/task3/index.html" },
};

function createNav() {
    const navPanel = document.getElementById("navPanel");

    Object.values(works).forEach(work => {
        let link = document.createElement("a");
        link.textContent = work.title;
        link.href = "#";
        link.classList.add("nav-link");
        link.onclick = function () {
            loadWork(work.url);
            highlightActiveLink(link);
            return false;
        };
        navPanel.appendChild(link);
    });
}

function loadWork(url) {
    const iframe = document.getElementById("contentFrame");
    if (iframe.src !== url) {
        iframe.src = url;
    }
}

function highlightActiveLink(activeLink) {
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => link.classList.remove("active"));
    activeLink.classList.add("active");
}

createNav();
