import emoji from "react-easy-emoji";

export const greetings = {
	name: "Venkatesh Inala",
	title: "Hi all, I'm Venkatesh",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with HTML, CSS, Javascript,Typescript,React.js,,Redux,Next.js ,Nodejs,Express Js,MongoDB.",
	resumeLink:
		"https://drive.google.com/file/d/1sR8uN9ZpQ0yh_ydtSBV4vM_h3k1nzS0q/view?usp=sharing",
};

export const openSource = {
	githubUserName: "venkateshina",
};

export const contact = {};

export const socialLinks = {
	linkedin: "https://www.linkedin.com/in/inala-venkatesh-bb91781aa/",
	github: "https://github.com/venkateshina",
	instagram: "https://instagram.com/venkatesh.inala?igshid=YmMyMTA2M2Y=",
	
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Node and Express Js REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Nodejs",
					fontAwesomeClassname: "logos:nodejs",
				},
				// {
				// 	skillName: "Express js",
				// 	fontAwesomeClassname: "vscode-icons:file-type-express",
				// },

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "jest",
					fontAwesomeClassname: "logos:jest",
				}
			],
		},
		{
			title: "Frontend development",
			lottieAnimationFile: "/lottie/skills/ui.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Good exposure to work on Web based Application Development."
				),
				emoji(
					"⚡ Hands on Expertise in React JS, HTML5, CSS3, JavaScript (ES6),TS."
				),
				emoji(
					"⚡ Having good work experience in Redux & Thunk."
				),
				emoji(
					"⚡ Optimization techniques and application perfomance improvement "
				),
				emoji(
					"⚡ Handling Unit testing using Jest framework (TDD)"
				),
			],
			softwareSkills: [
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{skillName: "JavaScript",
				fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "jest",
					fontAwesomeClassname: "logos:jest",
				},
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design/UI", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "65",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Vignan's University",
		subHeader: "Bachelor of Technology(B.Tech)",
		duration: "June 2016 - March 2020",
		desc: "Participated in the research of IOT Application for measuring temperature in various situations and published  paper.",
		grade: "Grade A",
		descBullets: [
			"Acheived 100% fee waiver for tution fees",
			"Worked as a Team Lead in Major project for a duration of 6months",
		],
	},
];

export const experience = [
	{
		role: "Frontend Developer",
		company: "Infosys",
		companylogo: "/img/icons/common/infosysl.png",
		date: "Sep 2022",
		desc: "I working as frontend web developer to design web based application for healthcare domain project using Reactjs,Redux,TS,MaterialUI and some other libraries.",
	},
	{
		role: "Programmer Analyst",
		company: "Cognizant Technology Solutions",
		companylogo: "/img/icons/common/cognizant.jpg",
		date: "Mar 2022",
		desc: "I worked as a Full Stack developer using Reactjs,Redux,Typescript,Nodejs,Exprssjs,MongoDB,Created reusable code components using React that reduced the development time by20%,Created GET,POST,PUT,DELETE,RESTFUL API'S, Performed Unit testing (TDD) using Jest framework with Test coverage of 80% and debugging.",
		
	},
	{
		role: "Software Developer",
		company: "Xoriant solutions pvt ltd",
		companylogo: "/img/icons/common/xoriant.jpg",
		date: "Nov 2021",
		desc: "Handled UI team as a Reactjs developer,Agile methodology,Permanent bug fixing in the application by doing RCA,Intracting with Backend people for making REST API Calls.",
	},
	{
		role: "Associate Software Engineer",
		company: "Legato Health Technologies",
		companylogo: "/img/icons/common/legatoo.jpg",
		date: "June 2020",
		desc: "Worked as a Reactjs Developer ,converted the figma screens into Reusable Reacts components,Handled global state management using Redux  and  integrate Stripe payment gateway for online transctions and Deployed it on Azure based Docker container registry.",
	},
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		// github: "https://github.com/1hanzla100/developer-portfolio",
		// link: "https://developer-portfolio-1hanzla100.vercel.app/",
	},
	{
		name: "AtlasMart",
		desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
		// github: "https://github.com/1hanzla100/Django-React-Marketplace",
	},
	{
		name: "Technota (Forum)",
		desc: "Get hands-on experience in technical skills with Nodejs",
		// github: "https://github.com/1hanzla100/django-react-forum",
	},
	{
		name: "Shopaza (Ecommerce)",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		// github: "https://github.com/1hanzla100/Django-ecommerce",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Venkatesh Inala",
	description:
		"A passionate Full Stack Web Developer .",
	author: "Venkatesh Inala",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://developer-portfolio-1hanzla100.vercel.app",
	keywords: [
		"Hanzla",
		"Hanzla Tauqeer",
		"@1hanzla100",
		"1hanzla100",
		"Portfolio",
		"Hanzla Portfolio ",
		"Hanzla Tauqeer Portfolio",
	],
}
