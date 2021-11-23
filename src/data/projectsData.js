import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Map Reduce Search Engine',
        projectDesc: 'Application that triggers inverted index jobs on the entire project guetenberg repository',
        tags: ['AppEngine', 'CloudShell','Python'],
        code: 'https://github.com/shubhpatr/scalable-mapr',
        demo: 'https://fa21ecc40249shubham.uc.r.appspot.com/',
        image: 'https://cdn.pixabay.com/photo/2016/03/04/19/36/gears-1236578__340.jpg'
    },
    {
        id: 2,
        projectName: 'MHC Class-1 Binding Site Predictor',
        projectDesc: 'A matrix based methodology python implementation to calculate potential binding sites for a virus on 47 MHC Class-1 Alleles with a threshold setting of upto 10\%. The matrices were imported via webscrapping and app was developed using NextJS and Python FastAPI',
        tags: ['NextJS', 'Python', 'Webscrapping'],
        code: 'https://github.com/shubhpatr/mhc-allele-predictor',
        demo: 'https://mhc-classifier.herokuapp.com/',
        image: 'https://www.teahub.io/photos/full/75-757951_2562x1442-dna-wallpapers-data-id-106412-data-src.jpg'
    },
    {
        id: 3,
        projectName: 'Covid-19 Vaccine Notifier',
        projectDesc: 'A simple website that registers users for notifications on coronavirus vaccine slots using ReactJS, ExpressJS, MongoDB, Python and Co-win API which enabled 1,000+ registered users to book about 1,500+ vaccine slots seamlessly',
        tags: ['Python', 'NodeJS', 'MongoDB'],
        code: 'https://github.com/shubhpatr/Cowin-Notify',
        demo: 'https://cowin21-notifier.herokuapp.com',
        image: 'https://images.theconversation.com/files/368988/original/file-20201112-17-100cgy6.jpg?ixlib=rb-1.1.0&rect=1%2C1%2C997%2C661&q=45&auto=format&w=496&fit=clip'
    },
    {
        id: 4,
        projectName: 'Pokédex',
        projectDesc: 'A simple pokédex made with React & PokéAPI',
        tags: ['PokéAPI', 'React', 'Tailwind CSS'],
        code: 'https://github.com/shubhpatr/Pokedex',
        demo: 'https://pokedexgeneration1.netlify.app/',
        image: 'https://c4.wallpaperflare.com/wallpaper/273/935/728/pokemon-pokeball-pokedex-wallpaper-preview.jpg'
    },
    {
        id: 5,
        projectName: 'Windows Portfolio',
        projectDesc: 'A personal portfolio based on the Windows OS UI',
        tags: ['NextJS', 'CSS'],
        code: 'https://github.com/shubhpatr/windows-portfolio',
        demo: 'https://shubhpatr-github-io.vercel.app/',
        image: 'https://cdn.wallpapersafari.com/35/10/y6HR3B.jpg'
    },
    {
        id: 6,
        projectName: 'Covid 19 Dashboard',
        projectDesc: 'Real time dashboard for live tracking of covid19 cases in various region of the World',
        tags: ['ReactJS'],
        code: 'https://github.com/shubhpatr/COVID19-DASHBOARD',
        demo: 'https://covid19-dashboard-div.netlify.app/',
        image: 'https://c8.alamy.com/comp/D6BWG8/close-up-of-a-stock-market-graph-on-a-high-resolution-lcd-screen-D6BWG8.jpg'
    },
    {
        id: 7,
        projectName: 'Remote Light Monitoring System',
        projectDesc: 'A real time dashboard for tracking KPIs of assets located all over the world',
        tags: ['VueJS', 'LAravel', 'MySQL'],
        code: 'https://github.com/shubhpatr/Remote-Light-Monitoring-System',
        // demo: 'https://covid19-dashboard-div.netlify.app/',
        image: 'https://thepracticalparanoid.com/wp-content/uploads/2021/06/internet-of-things_high_res-1080x600.jpg'
    },
    
    {
        id: 8,
        projectName: 'Pneumonia Detector Web App',
        projectDesc: 'A web application built using ReactJS and FastAPI to decode and send chest x-ray images to a tensorflow keras model saved on AWS S3. The model is a 4 layer CNN model with 97\% accuracy tested and validated with more than 5000 inputs',
        tags: ['Keras', 'FastAPI', 'ReactJS'],
        code: 'https://github.com/shubhpatr/pneumonia-detector',
        demo: 'https://github.com/shubhpatr/pneumonia-detector',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Normal_posteroanterior_%28PA%29_chest_radiograph_%28X-ray%29.jpg'
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/