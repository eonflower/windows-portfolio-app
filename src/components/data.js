import badge from "../img/badge.png"
import dice from "../img/dice.png"
import gradient from "../img/gradient.png"
import trail from "../img/trail.png"
import portfolio from "../img/portfolio.png"
import pets from "../img/pet-app.png"
import honey from "../img/honey-hits-vid.mp4"
import devTrip from "../img/dev-trip.mp4"
import trash from "../img/trash-cats.png"
import chum from "../img/green.mp4"
import weather from "../img/weather.mp4"
import sunset from "../img/sunset.mp4"

const data = [
{
    id: 1,
    project: "trail chum",
    img: chum,
    description: "Designed for long distance backpackers, this full-stack app allows users to create and personalize trails, efficiently manage trail notes and mileage, and conveniently track their starting and ending points. Built with the MERN stack and featuring user authentication, it provides a user-friendly platform for passionate backpacking enthusiasts.",
    tech: "Javascript, CSS, React, Express, MongoDB, JWT, Mongoose, Render, Node",
    deploy: "https://trail-chum.onrender.com",
    github: "https://github.com/eonflower/trail-chum"
}, 
{
    id: 2,
    project: "gentle critter",
    img: pets,
    description: "This static React app for pet sitting has a clean and responsive design, featuring an integrated contact form for potential customers to connect with me easily. It showcases my skills as a developer and highlights my ability to create professional and user-friendly platforms.",
    tech: "JSX, CSS, React, Emailjs, Netlify",
    deploy: "https://gentle-critter.netlify.app",
    github: "https://github.com/eonflower/pet-sitting"
},
{
    id: 3,
    project: "weather app",
    img: weather,
    description: "Mobile app created with React Native that utilizes Weather API. User location saves asynchronously using AsyncStorage, and the background changes by time of day and weather.",
    tech: "React Native, React, Expo, Tailwindcss, Canva, lodash, Date-fns, react-native-async-storage",
    deploy: "",
    github: "https://github.com/eonflower/weather-app-rn"
}, {
    id: 4,
    project: "honey hits",
    img: honey,
    description: "This is a React app that leverages the OAuth2.0 flow to seamlessly connect to the Spotify Web API, providing users with instant access to their top artists, tracks, and recently liked songs. The app is currently in the development stages. I plan to continue refining its features and functionalities to offer a streamlined and personalized music experience for users.",
    tech: "Javascript, CSS, React, Font Awesome, Spotify Web API, lodash, Bootstrap",
    deploy: "",
    github: "https://github.com/eonflower/honey-hits"
}, {
    id: 5,
    project: "truth of pine",
    img: sunset,
    description: "This project's focal point was to utilize Figma to create a dynamic background that could be exported as an SVG and used for a parallex scroll effect.",
    tech: "Javascript, CSS, React, Figma, SVGs, Font Awesome",
    deploy: "https://pining.netlify.app",
    github: "https://github.com/eonflower/sunset-play"
}, 
{
    id: 6,
    project: "dev trip",
    img: devTrip,
    description: "Full-stack React app built for users to compile tech and photo gear in a wishlist. Has integrated search feature and interactive UI design. This was a group project built with Matthew Robinson. Currently in the works for deployment.",
    tech: "CSS, Javascript, React, Font Awesome, Express, Mongoose, MongoDB",
    deploy: "",
    github: "https://github.com/Mattrob10/Travel-Gear"
}, 
// {
//     id: 7,
//     project: "trash cats",
//     img: trash,
//     description: "This project uses React forms and a REST API to generate customizable cat cards, with dynamic theming powered by React's Context feature.",
//     tech: "JSX, CSS, React, Bootstrap, Axios",
//     deploy: "https://trash-cats.netlify.app",
//     github: "https://github.com/eonflower/trash-cats"
// }, 
// {
//     id: 5,
//     project: "dice roller",
//     img: dice,
//     description: "A fun and interactive React app that lets users roll five dice with just a click of a button. With the ability to save rolls and reset the dice, the app offers a simple yet clean experience for dice rolling.",
//     tech: "HTML, CSS, Javascript, React, Font Awesome",
//     deploy: "https://they-see-me-rollin.surge.sh",
//     github: "https://github.com/eonflower/dice-roller"
// }, {
//     id: 6,
//     project: "trail log",
//     img: trail,
//     description: "A React blog app showcasing my personal photos from hiking. With a simple interface, this mock app is the base project for a further, more immersive and personalized experience for nature enthusiasts and bloggers alike.",
//     tech: "HTML, CSS, Javascript, React, Font Awesome",
//     deploy: "https://trail-tales.surge.sh",
//     github: "https://github.com/eonflower/trail-log-app"
// }, {
//     id: 7,
//     project: "badge creator",
//     img: badge,
//     description: "A React-based form that lets you create personalized badges using your own input.",
//     tech: "HTML, CSS, Javascript, React",
//     deploy: "https://badge-creator.surge.sh",
//     github: "https://github.com/eonflower/badge-creator"
// }, 
{
    id: 8,
    project: "my portfolio",
    img: portfolio,
    description: "What could be a more engaging way to demonstrate my expertise in web development than through a dynamic and imaginative rendition of the iconic Windows 98 theme for my portfolio?",
    tech: "CSS, Javascript, React, Font Awesome, Github Pages",
    deploy: "https://littlebugbest.com",
    github: "https://github.com/eonflower/windows-portfolio-app"
}, 

]

export default data;