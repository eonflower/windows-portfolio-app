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
import genius from "../img/listGeniusVid.mp4"

const data = [
    {
        id: 1,
        project: "List Genius",
        img: genius,
        description: "Led development of a full-stack smart shopping application that learns from users' purchasing patterns to provide intelligent suggestions. Implemented core prediction algorithm and Firebase database integration, while establishing WCAG-compliant UI components. Drove project success through agile methodologies including bi-weekly sprints and code reviews.",
        tech: "Javascript, TailwindCSS, React, Firebase, Git/GitHub",
        deploy: "https://tcl-66-smart-shopping-list.web.app/",
        github: "https://github.com/the-collab-lab/tcl-66-smart-shopping-list"
    },
    {
        id: 2,
        project: "Trail Chum",
        img: chum,
        description: "Developed and currently modernizing a full-stack application for long-distance backpackers, migrating from MERN stack to Firebase for improved scalability. Implemented secure authentication using Google OAuth and email verification, with optimized data structures for fast load times. Features include personalized trail creation, mileage tracking, and trail note management.",
        tech: "Javascript, React, Firebase, Google OAuth, TailwindCSS",
        deploy: "https://trail-chum.onrender.com",
        github: "https://github.com/eonflower/trail-chum"
    }, 
{
    id: 3,
    project: "gentle critter",
    img: pets,
    description: "This SPA React app for pet sitting has a clean and responsive design, featuring an integrated contact form for potential customers to connect with me easily. It showcases my skills as a developer and highlights my ability to create professional and user-friendly platforms.",
    tech: "JSX, CSS, React, Emailjs, Netlify",
    deploy: "https://gentle-critter.netlify.app",
    github: "https://github.com/eonflower/pet-sitting"
},
{
    id: 4,
    project: "Weather App",
    img: weather,
    description: "Built a mobile-first weather application using React Native that features persistent location storage and dynamic UI. Implemented AsyncStorage for seamless user experience across sessions, and created responsive design elements that adapt to both time of day and current weather conditions.",
    tech: "React Native, React, Expo, TailwindCSS, AsyncStorage, Weather API",
    deploy: "",
    github: "https://github.com/eonflower/weather-app-rn"
}, {
    id: 5,
    project: "honey hits",
    img: honey,
    description: "This is a React app that leverages the OAuth2.0 flow to seamlessly connect to the Spotify Web API, providing users with instant access to their top artists, tracks, and recently liked songs. The app is currently in the development stages. I plan to continue refining its features and functionalities to offer a streamlined and personalized music experience for users.",
    tech: "Javascript, CSS, React, Spotify Web API, Bootstrap",
    deploy: "",
    github: "https://github.com/eonflower/honey-hits"
}, 
// {
//     id: 6,
//     project: "truth of pine",
//     img: sunset,
//     description: "This project's focal point was to utilize Figma to create a dynamic background that could be exported as an SVG and used for a parallex scroll effect.",
//     tech: "Javascript, CSS, React, Figma",
//     deploy: "https://pining.netlify.app",
//     github: "https://github.com/eonflower/sunset-play"
// }, 
// {
//     id: 6,
//     project: "dev trip",
//     img: devTrip,
//     description: "Full-stack React app built for users to compile tech and photo gear in a wishlist. Has integrated search feature and interactive UI design. This was a group project built with Matthew Robinson. Currently in the works for deployment.",
//     tech: "CSS, Javascript, React, Font Awesome, Express, Mongoose, MongoDB",
//     deploy: "",
//     github: "https://github.com/Mattrob10/Travel-Gear"
// }, 
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
    id: 7,
    project: "my portfolio",
    img: portfolio,
    description: "What could be a more engaging way to demonstrate my expertise in web development than through a dynamic and imaginative rendition of the iconic Windows 98 theme for my portfolio?",
    tech: "CSS, Javascript, React, Font Awesome, Github Pages",
    deploy: "https://littlebugbest.com",
    github: "https://github.com/eonflower/windows-portfolio-app"
}, 

]

export default data;