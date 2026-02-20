import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const PROJECTS = [
    {
        id: 1,
        title: 'Example React Application',
        description: 'A React application that I built, involving JS and core web dev concepts!',
        link: 'https://github.com/rdennison12/react-bootcamp/tree/master/portfolio',
        image: project1
    },
    {
        // To link to a GitHub repo in a main repo, add /tree/master/name_of_repo
        id: 2,
        title: "My API",
        description: 'A REST API that I built from scratch with GET and POST requests',
        link: 'https://github.com/rdennison12/react-bootcamp/tree/master/portfolio',
        image: project2
    },
    {
        id: 3,
        title: 'Operating Systems Final Project',
        description: 'My unique final project for my university operating systems class.',
        link: 'https://github.com/rdennison12/react-bootcamp',
        image: project3
    }
];
export default PROJECTS;