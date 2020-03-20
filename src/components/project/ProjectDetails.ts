import { ProjectProps } from "./Project";

export const experience = [
  {
    title: "The AirLab, Carnegie Mellon University",
    subtitle: "Research Associate I",
    techStack: ["Python", "C++", "ROS", "TensorFlow", "PX4", "Unreal Engine", "Computer Vision", "Docker"],
    duration: "June 2021 - Present",
    details: `

*Advisor: [Professor Sebastian Scherer](https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/)*

- Working on autonomous mission execution for teams of reconnaissance UAVs for the [Office of Naval Research](https://www.onr.navy.mil/)
- Researching human-in-the-loop image segmentation techniques alongside developing ofautonomous informative path planning algorithms
`
  },
  {
    title: "Jet Propulsion Laboratory, NASA - Group 347J (Perception Systems)",
    subtitle: "Research Intern | Advisors: Shreyansh Daftry, Dr. Masahiro Ono",
    techStack: ["Python", "C++", "TensorFlow", "Meta Learning", "Algorithm Selection", "Computer Vision"],
    duration: "October 2020 - April 2021",
    details: `

*Advisors: [Shreyansh Daftry](https://www-robotics.jpl.nasa.gov/people/Shreyansh_Daftry/), 
[Dr. Masahiro Ono](https://www-robotics.jpl.nasa.gov/people/Masahiro_Ono/)*

- Researched context-aware adaptive algorithm selection using deep learning for motion planning
- Responsible for ideating, designing and implementing experiments from scratch
- Engineered deep learning pipeline for further research and development
- Joined the project at its inception and contributed critical design ideas and directions for exploration
`
  },
  {
    title: "Language Technologies Institute, Carnegie Mellon University",
    subtitle: "Research Intern | Advisors: Vasu Sharma, Amir Zadeh, Professor Louis-Philippe Morency",
    techStack: ["Python", "C++", "PyTorch", "LibTorch", "MKLDNN", "HDF5", "DLib", "OpenCV", "Computer Vision", "Knowledge Distillation", 
    "Neural Network Optimization"],
    duration: "May 2019 - August 2020",
    details: `

*Advisors: [Vasu Sharma](https://vasusharma.github.io/), [Amir Zadeh](https://www.amir-zadeh.com/), 
[Professor Louis-Philippe Morency](https://www.lti.cs.cmu.edu/people/18870/louis-philippe-morency)*

- Researched CNN algorithms using asymmetric correlations for Facial Action Unit Detection
- Achieved an average of 4% improvement on the BP4D dataset over State-of-the-Art
- Achieved an average 27% improvement on rare Action Units (e.g. AUs 1, 2, 4, 15, 17, 23)
- Designed custom loss function using Jaccard coefficient correlations to train a novel neural network to improve
Action Unit detection. Designed and implemented all architectures and experiments during the course of my
involvement with the project
`
  },
  {
    title: "Indian Institute of Technology, Kharagpur",
    subtitle: "Research Intern",
    techStack: ["Python", "PyTorch", "C++", "ROS"],
    duration: "December 2018 – Jan 2019",
    details: `
*Advisor: [Professor D K Pratihar](http://www.iitkgp.ac.in/department/ME/faculty/me-dkpra) *

- Developed a deep Q-learning model to perform adaptive PID optimization for DC motors
- Achieved an average convergence time of 15 minutes, a 78% improvement over previous approaches
`
  },
] as Array<ProjectProps>;

export const projects = [
  {
    title: "The Errand Company",
    techStack: ["Java", "JavaScript", "Google Firebase", "Android Studio"],
    details: `
- Developed and published an ecommerce mobile application on Play Store that allows home deliveries, 
domesticservices and serves as an aggregator platform for local businesses
- Developed in the span of 1 one month after my parents were forced to shutdown their 
business during the height ofCovid-19 lockdowns in India, the app was meant to support 
affected local businesses by allowing them to be listed on the platform while also reaching
 customers who were equally affected, thus helping their revenue as well asserving the community’s supply needs
`,
    repositoryLink: "https://github.com/satrajit-chatterjee/errand",
    webLink: "https://play.google.com/store/apps/details?id=com.errandcompany.errand",
  },
  {
    title: "Myna",
    techStack: ["Python", "SpaCy", "NLTK"],
    details: `
- Developed a domain agnostic chatbot using a state transition rule-engine that can converse on any knowledge base
- Able to take restaurant orders on multiple different menus without any down-time in between
`,
  },
  {
    title: "Friends",
    techStack: ["Java", "MongoDB", "Android Studio", "Postman"],
    details: `
- Developed a social media, companionship and lifestyle app for senior citizens that allows
 Senior Citizens to hirecollege students for part-time assistance services.  The app also helps 
 senior citizens find friends based on mutualinterests, organize social event, etc.  
 Won 10th place out of 150 teams at SRM Hackathon’18 - one of India’s largestnational hackathons
`,
  }
] as Array<ProjectProps>;
