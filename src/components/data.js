import badge from "../img/badge.png"
import dice from "../img/dice.png"
import gradient from "../img/gradient.png"
import trail from "../img/trail.png"
import portfolio from "../img/portfolio.png"
import pets from "../img/pet-app.png"
import honey from "../img/honey-hits-vid.mp4"
import devTrip from "../img/dev-trip.mp4"
import trash from "../img/trash-cats.png"

const data = [
    {
        id: 1,
        project: "honey hits",
        img: honey,
        description: "This is a React app that leverages the OAuth2.0 flow to seamlessly connect to the Spotify Web API, providing users with instant access to their top artists, tracks, and recently liked songs. The app is currently in the development stages. I plan to continue refining its features and functionalities to offer a streamlined and personalized music experience for users.",
        tech: "JSX, CSS, Axios, React, Font Awesome, Spotify Web API, Lodash, Bootstrap",
        deploy: "",
        github: "https://github.com/eonflower/honey-hits"
},
    {
        id: 2,
        project: "trash cats",
        img: trash,
        description: "This project uses React forms and a REST API to generate customizable cat cards, with dynamic theming powered by React's Context feature.",
        tech: "JSX, CSS, React, Bootstrap, Axios, useContext",
        deploy: "https://trash-cats.netlify.app",
        github: "https://github.com/eonflower/trash-cats"
},
    {
    id: 3,
    project: "dice roller",
    img: dice,
    description: "A fun and interactive React app that lets users roll five dice with just a click of a button. With the ability to save rolls and reset the dice, the app offers a simple yet clean experience for dice rolling.",
    tech: "HTML, CSS, Javascript, React, Font Awesome",
    deploy: "https://they-see-me-rollin.surge.sh",
    github: "https://github.com/eonflower/dice-roller"
}, 
{
    id: 4,
    project: "gentle critter",
    img: pets,
    description: "This React app for pet sitting has a clean and responsive design, featuring an integrated contact form for potential customers to connect with me easily. It showcases my skills as a developer and highlights my ability to create professional and user-friendly platforms.",
    tech: "JSX, CSS, React, Emailjs, Netlify, React-slick",
    deploy: "https://gentle-critter.netlify.app",
    github: "https://github.com/eonflower/pet-sitting"
}, 
{
    id: 5,
    project: "badge creator",
    img: badge,
    description: "A React-based form that lets you create personalized badges using your own input.",
    tech: "HTML, CSS, Javascript, React",
    deploy: "https://badge-creator.surge.sh",
    github: "https://github.com/eonflower/badge-creator"
}, {
    id: 6,
    project: "trail log",
    img: trail,
    description: "A React blog app showcasing my personal photos from hiking. With a simple interface, this mock app is the base project for a further, more immersive and personalized experience for nature enthusiasts and bloggers alike.",
    tech: "HTML, CSS, Javascript, React, Font Awesome",
    deploy: "https://trail-tales.surge.sh",
    github: "https://github.com/eonflower/trail-log-app"
}, {
    id: 7,
    project: "dev trip",
    img: devTrip,
    description: "Full-stack React app built for users to compile tech and photo gear in a wishlist. Has integrated search feature and interactive UI design. This was a group project built with Matthew Robinson. Currently in the works for deployment.",
    tech: "HTML, CSS, JSX, React, Font Awesome, Git, Axios, Express, Mongoose, MongoDB, Postman",
    deploy: "",
    github: "https://github.com/Mattrob10/Travel-Gear"
}, {
    id: 8,
    project: "my portfolio",
    img: portfolio,
    description: "What could be a more engaging way to demonstrate my expertise in web development than through a dynamic and imaginative rendition of the iconic Windows 98 theme for my portfolio?",
    tech: "HTML, CSS, JSX, React, Font Awesome, Github Pages",
    deploy: "",
    github: "https://github.com/eonflower/windows-portfolio-app"
}, 
// {
//     id: 7,
//     project: "css zen garden",
//     img: zen,
//     description: "this was a project where I recreated a website using only CSS and HTML, and was not allowed to inspect the original code, except for photos",
//     tech: "HTML, CSS",
//     deploy: "https://css-zen.surge.sh",
//     github: "https://github.com/eonflower/Lvl-2/tree/main/zen-garden",
//     original: "http://www.csszengarden.com/"
// }
]

export default data;