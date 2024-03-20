import roadtobacon from './roadtobacon.png';
import sierpinski from './sierpinski.png';
import tmxconverter from './tmxconverter.png';

type Project = {
  title: string;
  thumbnail: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
};

const projects: Project[] = 
  [
    {
      "title":"Road to Bacon",
      "thumbnail":roadtobacon,
      "description":"A game born out of a passion for movies and a quirky party trick ability to connect actors to Kevin Bacon.",
      "technologies": ["ReactJS", "JavaScript", "HTML", "CSS", "REST API", "Netlify"],
      "link": "https://roadtobacon.com/",
      "github": "https://github.com/alejotsv/get-my-bacon"
    },
    {
      "title":"Sierpinski Triangle",
      "thumbnail": sierpinski,
      "description":"This program automatically recreates the Sierpiński triangle following a series of simple steps, after the user selects a number of dots to be drawn (from 1 to 25,000)",
      "technologies": ["ReactJS", "JavaScript", "HTML", "CSS", "Canvas"],
      "link":"https://alejotsv.github.io/sierpinski-triangle/",
      "github": "https://github.com/alejotsv/sierpinski-triangle"
    },
    {
      "title":"TMX Cleaner and Converter",
      "thumbnail": tmxconverter,
      "description":"Application to upload a TMX file and convert it into a clean CSV version.",
      "technologies": ["ReactJS", "JavaScript", "HTML", "CSS"],
      "link":"https://alejotsv.github.io/tmx-converter/",
      "github": "https://github.com/alejotsv/tmx-converter"
    },
    // {
    //   "title":"TMX Cleaner and Converter",
    //   "thumbnail": tmxconverter,
    //   "description":"Application to upload a TMX file and convert it into a clean CSV version.",
    //   "technologies": ["ReactJS", "JavaScript", "HTML", "CSS"],
    //   "link":"https://alejotsv.github.io/tmx-converter/",
    //   "github": "https://github.com/alejotsv/tmx-converter"
    // }     
  ]

export default projects;