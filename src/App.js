import './App.css';
import Contact from './views/Contact/ContactPage';
import Home from './views/Home/HomePage';
import Footer from './views/Layout/Footer/Footer';
import Projects from './views/Projects/ProjectList';
import Skills from './views/Skills/SkillList';
import project01 from './assets/images/projects/news-thumbnail.jpg';
import project02 from './assets//images/projects/digiqlo.jpg';
import project03 from './assets/images/projects/bark-walk.jpg';
import project04 from './assets/images/projects/happy-cake.jpg';
import Header from './views/Layout/Header/Header';

const App = () => {
	const projects = [
		{
			title: 'Quiz App',
			subtitle: 'Thumbnail Quiz - Match Headline and Thumbnail',
			thumbnail: project01,
			skills: ['JavaScript', 'API'],
			description:
				'Match Headline and Thumbnail is a quiz app aimed for people who  wish to get used to reading news in English. Users select from a group of thumbnails, the image that best matches a provided headline. News data comes from CBC RSS in xml format, and it is translated to JSON via RSS to JSON online converter.',
			link: 'https://suefrontend.github.io/match-headline-and-thumbnail-vanilla-js',
			github:
				'https://github.com/suefrontend/match-headline-and-thumbnail-vanilla-js',
			note: '',
		},
		{
			title: 'wardrobes management app',
			subtitle: 'Digital Wardrobes',
			thumbnail: project02,
			skills: ['React', 'Hooks', 'Firebase'],
			description:
				'Digital Wardrobes is a wardrobes management app that tracks your inventory and helps you manage spending based on your own defined limit. It features a detailed report page that provides data on spending, colors, seasonal categories, and much more. This project was built in React using hooks for state management and Firebase to manage data.',
			link: 'https://suefrontend.github.io/digiqlo/',
			github: 'https://github.com/suefrontend/digiqlo',
			note: '',
		},
		{
			title: 'dog walking app',
			subtitle: 'Bark Walk - Find Local Dog Walkers',
			thumbnail: project03,
			skills: ['UI Design'],
			description:
				"Bark Walk is a personal project currently in development. Is it a service which you can use to search for dog walkers in your area. You can search to see walker's profiles and ratings to best match you with your dog's most compatible walker.",
			link: 'https://raw.githubusercontent.com/suefrontend/barkwalk/main/src/client/assets/landingpage.jpg',
			github: '',
			note: '* Currently working on coding and translation for landing page',
		},
		{
			title: 'simple ecommerce',
			subtitle: 'Happy Cakes - The Pastry Shop',
			thumbnail: project04,
			skills: ['Vue', 'Vuex'],
			description:
				'Happy Cakes is a simple eCommerce website. Users click on the items to add them to a shopping list that conveniently displays the product price and total of all items. Used Vuex for state management, and Firebase for data management.',
			link: 'https://suefrontend.github.io/vue-pastry-shop/',
			github: 'https://github.com/suefrontend/vue-pastry-shop/',
			note: '',
		},
	];

	const skills = [
		'JavaScript',
		'React',
		'Vue',
		'PhotoShop',
		'Illustrator',
		'Sass',
		'HTML5',
		'CSS3',
		'WordPress',
	];

	return (
		<>
			<Home />
			<Header />
			<Skills skills={skills} />
			<Projects projects={projects} />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
