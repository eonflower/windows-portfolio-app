import badge from "../img/badge.png"
import dice from "../img/dice.png"
import gradient from "../img/gradient.png"
import trail from "../img/trail.png"
import zen from "../img/zen.png"
import honey from "../img/honey.png"
import trash from "../img/trash-cats.png"

const data = [
    {
        id: 1,
        project: "honey hits",
        img: honey,
        description: "react built app that allows you to login to your Spotify, then has pages to show you your top favourite artists, songs, and most recently liked tracks",
        tech: "HTML, JSX, CSS, Javascript, Axios, React, Font Awesome, Spotify Web API, Lodash, Bootstrap",
        deploy: "https://honey-hits.netlify.app",
        github: "https://github.com/eonflower/honey-hits"
},
    {
        id: 2,
        project: "trash cats",
        img: trash,
        description: "app uses react forms to generate editable cards of cats. uses GET/PUT/POST/DELETE requests, but commented out for deployment. app also uses context to change theme",
        tech: "HTML, CSS, Javascript, React, Bootstrap, Axios, Context",
        deploy: "https://trash-cats.surge.sh",
        github: "https://github.com/eonflower/trash-cats"
},
    {
    id: 3,
    project: "dice roller",
    img: dice,
    description: "simple app that allows you to roll five dice, with the ability to save rolls and also reset the dice",
    tech: "HTML, CSS, Javascript, React, Font Awesome",
    deploy: "https://they-see-me-rollin.surge.sh",
    github: "https://github.com/eonflower/dice-roller"
}, {
    id: 4,
    project: "css gradient",
    img: gradient,
    description: "css gradient code generator where you can input two colors",
    tech: "HTML, CSS, Javascript, React",
    deploy: "https://css-gradient.surge.sh",
    github: "https://github.com/eonflower/css-gradient"
}, {
    id: 5,
    project: "badge creator",
    img: badge,
    description: "react form that outputs a creative badge utilizing the user-input",
    tech: "HTML, CSS, Javascript, React",
    deploy: "https://badge-creator.surge.sh",
    github: "https://github.com/eonflower/badge-creator"
}, {
    id: 6,
    project: "trail log",
    img: trail,
    description: "simple react blog post app showcasing my photos from trail",
    tech: "HTML, CSS, Javascript, React, Font Awesome",
    deploy: "https://trail-tales.surge.sh",
    github: "https://github.com/eonflower/trail-log-app"
}, {
    id: 7,
    project: "css zen garden",
    img: zen,
    description: "this was a project where I recreated a website using only CSS and HTML, and was not allowed to inspect the original code, except for photos",
    tech: "HTML, CSS",
    deploy: "https://css-zen.surge.sh",
    github: "https://github.com/eonflower/Lvl-2/tree/main/zen-garden",
    original: "http://www.csszengarden.com/"
}]

export default data;