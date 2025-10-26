import Typed from 'typed.js';
import Alpine from 'alpinejs';
import languageColors from "./data/language_colors.json";

window.Alpine = Alpine
Alpine.store('languages', [])
Alpine.store('pinnedRepos', [])

Alpine.start();
var generateStars = function () {

    var $galaxy = document.querySelector(".galaxy");
    var iterator = 0;

    while (iterator <= 100) {
        var xposition = Math.random();
        var yposition = Math.random();
        var star_type = Math.floor((Math.random() * 3) + 1);
        var position = {
            "x": (parseFloat(getComputedStyle($galaxy, null).width.replace("px", "")) * xposition) + 'px',
            "y": (parseFloat(getComputedStyle($galaxy, null).height.replace("px", "")) * yposition) + 'px'
        };
        let star = document.createElement("div");
        $galaxy.appendChild(star);
        star.outerHTML = '<div class="star star-type' + star_type + '" style=top:' + position.y + ';left:' + position.x + '></div>';

        iterator++;
    }

};
async function getPinnedRepos() {
    let response = await fetch("https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=tomatopickle");
    if (response.ok) {
        let json = await response.json();
        Alpine.store('pinnedRepos', json);
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

async function getMostUsedLanguages() {
    let response = await fetch("https://api.github.com/users/tomatopickle/repos");
    let languages = {};
    let repoNo = 0;
    let percentages = [];
    if (response.ok) {
        let json = await response.json();
        for (index in json) {
            const repo = json[index];
            if (repo.language != null) {
                if (!languages[repo.language]) {
                    languages[repo.language] = 0;
                }
                languages[repo.language]++;
                repoNo++;
            }
        }
        for (i in languages) {
            for (color in languageColors) {
                if (color.toLowerCase() == i.toLowerCase()) {
                    percentages.push({ name: i, percentage: Math.round((languages[i] / repoNo) * 100), color: languageColors[color].color })
                }
            }
        }

        Alpine.store('languages', percentages)
        
    } else {
        alert("HTTP-Error: " + response.status);
    }
}
generateStars();
getMostUsedLanguages();
getPinnedRepos();
new Typed('#about_brief', {
    strings: ["Full stack web developer", "Loves Vue and Stylus", "let backend_experience = 'nodejs';", "Currently a student"],
    typeSpeed: 75,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// window.addEventListener("scroll", function () {
//     console.log("scrolled");
//     scrollFunction()
// }, false);
// let scrollUpButton = document.getElementById("scroll_up_button");
// function scrollFunction() {
//     console.log("scrolled")
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         scrollUpButton.classList.add("open")
//     } else {
//         scrollUpButton.classList.remove("open")
//     }
// }
