module.exports = {

    author: "Kevin Davis",
    siteTitle: "Kevin Davis Portfolio",
    siteShortTitle: "Kevin Davis", // Used as logo text in header, footer, and splash screen
    siteDescription: "A portfolio site for Kevin Robert Davis",
    siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
    siteLanguage: "en_US",
    siteIcon: "src/content/sunflower.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantin.muenster",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/kevinrobertdavis"
        },
        {
            name: "Github",
            url: "https://github.com/thekidnamedkd"
        },
        {
            name: "Are.na",
            url: "https://www.are.na/kevin-davis"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "About",
                url: "/#about",
            },
            {
                name: "Skills & Interests",
                url: "/#skills-interests",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}