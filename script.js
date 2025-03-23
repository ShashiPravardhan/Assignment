const works = {
    "task1": { "title": "Project 1", "url": "works/task1/taskk.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/demo.html" },
    "task4": { "title": "Project 4", "url": "works/task4/shashi.html" },
    "task5": { "title": "Project 5", "url": "works/task5/html.html" },
    "task6": { "title": "Project 6", "url": "works/task6/html.html" },
    "task7": { "title": "Project 7", "url": "works/task7/calu.html" },
    "task8": { "title": "Project 8", "url": "works/task8/shashi-1.html" },
    "task9": { "title": "Project 9", "url": "works/task9/new.html" },
    "task10": { "title": "Project 10", "url": "works/task10/stack-1.html" },
    "task11": { "title": "Project 11", "url": "works/task11/script.html" },
    "task12": { "title": "Project 12", "url": "works/task12/script-1.html" },
    "task13": { "title": "Project 13", "url": "works/task13/objects.html" },
    "task14": { "title": "Project 14", "url": "works/task14/math.html" },
    "task15": { "title": "Project 15", "url": "works/task15/new-1.html" },
};

function createNav() {
    const navPanel = document.getElementById("navPanel");
    navPanel.innerHTML = "";

    const fragment = document.createDocumentFragment();

    Object.values(works).forEach(work => {
        let link = document.createElement("a");
        link.textContent = work.title;
        link.href = "#";
        link.classList.add("nav-link");

        link.onclick = function (event) {
            event.preventDefault();
            loadWork(work.url);
            highlightActiveLink(link);
        };

        fragment.appendChild(link);
    });

    navPanel.appendChild(fragment);
}

function loadWork(url) {
    const iframe = document.getElementById("contentFrame");

    if (iframe.src.split('/').pop() === url.split('/').pop()) return;

    iframe.src = url;
    
    iframe.onload = () => console.log("Content loaded successfully.");
    
    iframe.onerror = () => {
        iframe.srcdoc = `<h2 style="color: red; text-align: center; margin-top: 20px;">404 - File Not Found</h2>`;
    };

    iframe.scrollIntoView({ behavior: "smooth", block: "start" });
}


function highlightActiveLink(activeLink) {
    document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
    activeLink.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const scrollMenu = document.querySelector(".scrollmenu");
    document.querySelector(".scroll-btn.left").addEventListener("click", () => scrollMenu.scrollLeft -= 200);
    document.querySelector(".scroll-btn.right").addEventListener("click", () => scrollMenu.scrollLeft += 200);
    createNav();
});
