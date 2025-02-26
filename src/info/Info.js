import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Guadalupe",
    lastName: "MartinezVargas",
    initials: "YO", // the example uses first and last, but feel free to use three or more if you like.
    position: "Licenciada en Ciencias de la Comunicación",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: "💼",
            text: "Líder Funcional"
        },
        {
            emoji: '🌎',
            text: 'Marketing Digital'
        },
        {
            emoji: '☕',
            text: 'Oracle Next Education'
        },
        {
            emoji: "📞",
            text: "5536-8082-08"
        },
        {
            emoji: "📧",
            text: "lupy.data@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.linkedin.com/in/gpemtzvgs/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Profesional con +10 años de experiencia en identificar oportunidades de mejora a través del análisis de datos, implementar soluciones innovadoras y liderar equipos para alcanzar objetivos estratégicos. Hábil en la coordinación de múltiples proyectos, garantizando cumplimiento de plazos, calidad y rentabilidad.",
    skills:
        {
            proficientWith: ['Office 365', 'Premiere', 'Illustrator', 'Inglés B2', 'Git', 'Github', 'Power BI', 'Figma'],
            exposedTo: ['Javascript', 'Python', 'SQL']
        }
    ,
    hobbies: [
        {
            label: 'Mascota',
            emoji: '🐕'
        },
        {
            label: 'Cine y Series',
            emoji: '📺'
        },
        {
            label: 'Música',
            emoji: '🎶'
        },
        {
            label: 'Cocina',
            emoji: '👩‍🍳'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Proyecto 1",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Proyecto 2",
            live: "",
            source: "",
            image: mock2
        },
        {
            title: "Proyecto 3",
            live: "",
            source: "",
            image: mock3
        }
    ]
}