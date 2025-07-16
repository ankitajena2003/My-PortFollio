// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
// import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';



// Education Section Logo's
import bputLogo from './assets/education_logo/BPUT_logo.png';
import utkalLogo from './assets/education_logo/utkal_logo.png';
import chseLogo from './assets/education_logo/CHSE_logo.png';
import bseLogo from './assets/education_logo/BSE_logo.png';


// Project Section Logo's
import project1Logo from './assets/work_logo/project1.png';
import project2Logo from './assets/work_logo/project2.png';
import project3Logo from './assets/work_logo/project3.png';
import project4Logo from './assets/work_logo/project4.png';
import project5Logo from './assets/work_logo/project5.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  
  export const education = [
  {
    id: 0,
    img: bputLogo,
    school: "GIFT Autonomous,BBSR (BPUT)",
    date: "Sept 2024 - July 2026",
    grade: "9.22 CGPA in 1st sem and 9.12 CGPA in 2nd sem",
    desc: "I am currently pursuing my Master's degree (MCA) in Computer Applications from GIFT Autonomous,BBSR (BPUT). This program has helped me build a solid foundation in programming, web technologies, software engineering, and development practices. My interest in tech and problem-solving led me to this path after my graduation in Physics.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: utkalLogo,
    school: "Pattamundai College, Kendrapara (Utkal University)",
    date: "Aug 2020 - June 2023",
    grade: "8.99 CGPA (84.9%)",
    desc: "I completed my Bachelor's degree in Physics Honours from Pattamundai College, affiliated with Utkal University. Through this course, I studied core concepts such as Quantum Mechanics, Electromagnetism, Mathematical Physics, and other applied physics subjects. The analytical skills gained here laid a strong base for my MCA journey.",
    degree: "Bachelor of Science (B.Sc. Hons) - Physics",
  },
  {
    id: 2,
    img: chseLogo,
    school: "Om Shanti Women's H.S. School, Garapur(CHSE)",
    date: "Apr 2018 - Mar 2020",
    grade: "432/600 (72%)",
    desc: "I completed my Higher Secondary Education (Class 12th) in Science stream from CHSE, Odisha. My subjects included Physics, Chemistry, Biology, and Mathematics, which developed my logical thinking and problem-solving skills.",
    degree: "CHSE (XII) - Science (Physics, Chemistry, Math, Biology)",
  },
  {
    id: 3,
    img: bseLogo,
    school: "Board of Secondary Education,Odisha",
    date: "Apr 2017 - Mar 2018",
    grade: "502/600 (Grade: A2) 83%",
    desc: "I completed my Class 10 from BSE Odisha, where I studied foundational subjects including Mathematics, Science, and Social Science. This academic phase helped me develop discipline and curiosity for science.",
    degree: "BSE (X) - General (Science & Mathematics)",
  },
];
  
  export const projects = [
  {
    id: 0,
    title: 'Apple Website Clone',
    description:
      'A visually similar clone of the Apple website, showcasing clean layout, product sections, and responsiveness.',
    image: project1Logo,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/yourusername/apple-clone',
    webapp: 'https://your-apple-clone.netlify.app/',
  },
  {
    id: 1,
    title: 'Spline UI Clone',
    description: "Recreated a modern and animated user interface inspired by Spline's homepage using HTML and CSS.",

    image: project2Logo,
    tags: ['HTML', 'CSS'],
    github: 'https://github.com/yourusername/spline-clone',
    webapp: 'https://your-spline-clone.netlify.app/',
  },
  {
    id: 2,
    title: 'Nexcent UI Design',
    description:
      'Designed a professional and responsive layout similar to Nexcent’s site using HTML and CSS.',
    image: project3Logo,
    tags: ['HTML', 'CSS'],
    github: 'https://github.com/yourusername/nexcent-ui',
    webapp: 'https://your-nexcent-ui.netlify.app/',
  },
  {
    id: 3,
    title: 'Movies-House',
    description:
      'A movie web app built with React and Tailwind CSS that allows users to search and view details of various movies.',
    image: project4Logo,
    tags: ['React', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/movies-house',
    webapp: 'https://movies-house.netlify.app/',
  },
  {
    id: 4,
    title: 'Boat Rain Animation Web',
    description:
      'A creative web animation featuring a boat and rainfall effects, demonstrating CSS and JavaScript skills.',
    image: project5Logo,
    tags: ['HTML', 'CSS'],
    github: 'https://github.com/yourusername/boat-rain-animation',
    webapp: 'https://boat-rain-animation.netlify.app/',
  },
];

// export { SkillsInfo, education, projects };
