export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building Reseach and Development projects",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "EvoGym - Gym Profile Website",
        des: "Unrivaled Gym. Unparalleled Training Experience. Unmatched Results. Get The Body You Want",
        img: "/project/evogym.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
        link: "https://gym-vite-typescript.pages.dev/",
    },
    {
        id: 2,
        title: "Polytama Propindo Distribution System",
        des: "A distribution system for Polytama Propindo, a company that specializes in the distribution of chemicals.",
        img: "/project/polytama.png",
        iconLists: [
            "/php.svg",
            "/mysql.svg",
            "/larav.svg",
            "/bootstrap.svg",
        ],
        link: "https://github.com/GrimsAlphaDev/polytama-distribution-system",
    },
    {
        id: 3,
        title: "Plane Ticket Booking System",
        des: "A plane ticket booking system that allows users to book tickets for their desired destinations.",
        img: "/project/ticket.png",
        iconLists: [
            "/java.svg",
            "/mysql.svg",
            "/netbeans.svg",
        ],
        link: "https://github.com/GrimsAlphaDev/pembayaran-tiket-pesawat",
    },
    {
        id: 4,
        title: "Cinebuy",
        des: "A movie purchasing system that allows users to purchase movie online.",
        img: "/project/cinebuy.png",
        iconLists: [
            "/dart.svg",
            "/flutter.svg",
        ],
        link: "https://github.com/GrimsAlphaDev/mini_project_m_haikal_as_cinebuy",
    },
];

export const testimonials = [
    {
        quote: "Congratulations! You have successfully developed two of our websites, and we couldn't be happier with the results. We hope you continue to thrive and apply the knowledge you've gained wherever you go. Your skills are truly invaluable!.",
        name: "Taharudin S.E",
        title: "Management Information System Superintendent",
    },
    {
        quote: "Thank you so much! I am incredibly satisfied with your work. Your dedication and effort truly shine through, and I appreciate everything you’ve done.",
        name: "Septian",
        title: "Sekolah Tinggi Teknologi Bandung Undergraduate",
    },
    {
        quote: "I never expected that collaborating with you would provide me with such valuable new experiences. The results have exceeded my expectations, and I am truly impressed!",
        name: "Rifqy Kurnia",
        title: "Padjadjaran University Undergraduate",
    },
];

export const companies = [
    {
        id: 1,
        name: "Catur Insan Cendekia University",
        img: "/ucic.png",
        nameImg: "Catur Insan Cendekia University",
    },
    {
        id: 2,
        name: "Polytama",
        img: "/polytama.png",
        nameImg: "PT Polytama Propindo",
    },
    {
        id: 3,
        name: "nds",
        img: "/nds.png",
        nameImg: "PT Nusha Digital Solution",
    },
    {
        id: 4,
        name: "Sucofindo",
        img: "/sucofindo.png",
        nameImg: "PT Sucofindo",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Application Developer Intern - PT Polytama Propindo",
        desc: "Developed and maintained PT Polytama Distribution System using Laravel and PostgreSQL.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Front End Developer - PT Nusha Digital Solution",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "IT Officer Intern - PT Sucofindo",
        desc: "Developed and Data Entry for PT Sucofindo Lab System using Laravel",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Fullstack Multiplatform Developer Freelance",
        desc: "Freelance Fullstack Developer for various clients, developing websites and mobile applications.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/GrimsAlphaDev"
    },
    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/haikal-alfandi-61836922a/"
    },
];
