import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    flutter,
    dart,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    firebase,
    git,
    docker,
    kohbee,
    brainpodium,
    digichorus,
    webrtc,
    foodie,
    faceauth,
    netflix,
    notes,
    vocalisai,
    kaushik,
  } from "../assets/index";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Flutter Developer Intern",
      company_name: "Kohbee Technologies Pvt Ltd",
      icon: kohbee,
      iconBg: "#1D797E",
      date: "Nov 2022 - May 2023",
      points: [
        "Extended app localisation capabilities to support multilingual user experiences.",
        "Wrote integration tests from scratch to ensure the reliability and functionality of the app.",
        "Developed internal tools and admin-specific flows in the app to manage client on-boarding and other controls for client management.",
        "Developed Trusted Web Activities (TWAs) to deliver customised apps for clients, contributing to their business growth.",
        "Added additional modules to enhance the overall functionality and user experience of the app.",
      ],
    },
    {
      title: "Freelance Flutter Developer",
      company_name: "Brain Podium Technologies Pvt Ltd",
      icon: brainpodium,
      iconBg: "#FFFFFF",
      date: "Jan 2023 - June 2023",
      points: [
        "Project #1",
        "Integrated a comprehensive chat module into Livelong Wealth app, resulting in increased customer engagement and retention. The chat module included features such as image and video sharing, link sharing, user tagging, message reactions, push notifications and more.",
        "Improved UI/UX of the whole app | Added Animations | Worked on UI bug fixes.",
        "Project #2",
        "Developed two apps for a food token management system within an organization. The first app allowed users to redeem tokens using face authentication technology, while the second app served as an admin tool for user management and monitoring of token availability records.",
        "Used google_ml_kit and flutter_face_api packages to implement face authentication and wrote custom face comparison logic to reduce the face comparison time.",
        "Integrated excel to assess and update the user token usage records.",
      ],
    },
    {
      title: "Flutter Developer",
      company_name: "Digichorus Technologies Pvt Ltd",
      icon: digichorus,
      iconBg: "#FFFFFF",
      date: "July 2023 - Present",
      points: [
        "Developed mobile app solution for clients Qatar National Bank (QNB), Doha Commercial bank (DCB) and Qatar Insurance Corporation (QIC)",
        "Led initial development and architecture of mobile applications for QNB and DCB.",
        "Created a comprehensive design system for standardizing UI components.",
        "Improved QIC's existing Flutter web performance by 60% and provided tailored solution for payment platform integration.",
        "Trained a team of 4 at QIC on writing clean, scalable code in Flutter using Clean Architecture.",
        "Researched Micro-App Architecture in Flutter using git submodules and Melos.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "A very dedicated developer. He has an eye for detailing and awesome work ethics. He never said no for any difficult tasks too. Would highly recommend Muhammad Aslam for any Flutter development tasks.",
      name: "Kaushik Chandrasekaran ",
      designation: "SDE2",
      company: "Kohbee Technologies Pvt Ltd",
      image: kaushik,
    },
  ];
  
  const projects = [
    {
      name: "WebRTC Peer Chat",
      description:
        "Peer to Peer Video Chat application using WebRTC Protocol. Agora realtime messaging is used for signalling.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "webrtc",
          color: "pink-text-gradient",
        },
      ],
      image: webrtc,
      source_code_link: "https://github.com/AslamThachapalli/webrtc-peer-chat",
    },
    {
      name: "Vocalis AI",
      description:
        "This is a voice assistant app developed with flutter using OpenAI apis. The app uses ChatGPT and Dall-E AI image generation.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "openai-api",
          color: "green-text-gradient",
        },
      ],
      image: vocalisai,
      source_code_link: "https://github.com/AslamThachapalli/vocalis_ai",
    },
    {
      name: "Face Authentication",
      description:
        "Face authentication app (SignUp + SignIn) written in flutter using flutter_face_api and google_ml_kit_face_detection",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "regula",
          color: "pink-text-gradient",
        },
      ],
      image: faceauth,
      source_code_link: "https://github.com/AslamThachapalli/face-authentication-app",
    },
    {
      name: "Netflix Clone",
      description:
        "A netflix_clone app designed in Clean Architecture + TDD approach. The code passed in total of 90 Unit Tests.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "clean-architecture",
          color: "green-text-gradient",
        },
        {
          name: "unit-test",
          color: "pink-text-gradient",
        }
      ],
      image: netflix,
      source_code_link: "https://github.com/AslamThachapalli/Netflix_Clone_App",
    },
    {
      name: "Foodiee App",
      description:
        "An e-commerce app programmed in DDD architecture. App contains payment integrations using Razorpay, map integration using Mapbox Api and more.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "DDD",
          color: "pink-text-gradient",
        }
      ],
      image: foodie,
      source_code_link: "https://github.com/AslamThachapalli/foodiee_app",
    },
    {
      name: "Notes App",
      description:
        "A personalised notes taking app designed in DDD architecture. Bloc is used for state management and firebase as backend.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "DDD",
          color: "pink-text-gradient",
        }
      ],
      image: notes,
      source_code_link: "https://github.com/AslamThachapalli/Notes_App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };