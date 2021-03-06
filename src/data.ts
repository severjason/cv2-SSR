import { CVData, SkillListItem } from './types';
import img from './assets/avatar.jpg';

const COMMON_DATA = {
  en: {
    location: 'Zaporizhzhia, Ukraine',
    role: 'Frontend developer',
  },
  ua: {
    location: 'Запоріжжя, Україна',
    role: 'Frontend розробник',
  },
};

const TECH: { main: SkillListItem[][]; additional: SkillListItem[][] } = {
  main: [
    [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'SCSS' }],
    [
      { name: 'TypeScript', important: true },
      { name: 'JavaScript', important: true },
    ],
    [
      { name: 'React', important: true },
      { name: 'Redux', important: true },
      { name: 'Material-UI', important: true },
      { name: 'SSR (Next.js)', important: true },
    ],
    [{ name: 'REST API', important: true }, { name: 'PWA' }, { name: 'Storybook' }, { name: 'Responsive Design' }],
    [{ name: 'Firebase', important: true }, { name: 'Firestore' }],
    [
      { name: 'Jest' },
      { name: 'Semantic-UI' },
      { name: 'Styled-components' },
      { name: 'Highcharts' },
      { name: 'Bootstrap' },
    ],
    [
      {
        name: 'WebStorm',
        important: true,
      },
      { name: 'git' },
      { name: 'Linux (Ubuntu)' },
    ],
  ],
  additional: [
    [{ name: 'node.js' }, { name: 'express' }, { name: 'mongoDb' }, { name: 'postman' }],
    [{ name: 'GraphQL' }, { name: 'Apollo' }],
    [{ name: 'Functional programming' }],
    [{ name: 'AWS services (S3, Route 53, CloudFront, amplify)' }],
    [{ name: 'CI/CD' }, { name: 'Webpack' }, { name: 'Docker' }, { name: 'SEO' }],
  ],
};

const en: CVData = {
  profile:
    'I am a senior front end stack developer with multiple years of commercial experience in web development. My preferred technical stack is Typescript and Javascript. I have a deep expertise in writing web applications of different complexity. Being familiar with design patterns, test/domain driven design approaches I always follow the best practices of software development keeping my code clean, clear, scalable and covered with the tests. I have a solid expertise in working with Javascript, ES6+ and TypeScript and have got plenty of projects implemented in Next.js and React. I am familiar with HTML5 and CSS as well as CSS frameworks and pre-processors, which allows building user friendly and responsive UIs. I always use git, familiar with both REST and GraphQL approaches and have a decent experience working with AWS services. I am interested in the development of high load, scalable and complex web applications. My passion is technical implementation and support of complex business needs.',
  location: COMMON_DATA.en.location,
  experience: [
    {
      startDate: 'June 2020',
      endDate: 'present',
      company: 'Elementica',
      role: 'Team Lead (Frontend)',
      location: COMMON_DATA.en.location,
      //link: 'https://pixelteh.com/',
      list: [
        {
          text: 'Team lead in educational start-up.',
        },
        {
          text: 'Team lead in COVID-19 related project.',
        },
        {
          text: 'Project architecture development and application features design for startup.',
        },
        {
          text: 'UI development of blockchain-based system for registering, tracking and clearing debt.',
        },
        {
          text: 'New candidates interviewing.',
        },
      ],
    },
    {
      startDate: 'May 2018',
      endDate: 'May 2020',
      company: 'LightIT',
      role: COMMON_DATA.en.role,
      location: COMMON_DATA.en.location,
      link: 'https://light-it.net/',
      list: [
        {
          text:
            'UI development for trip related project with PWA and offline support, realtime updates, ' +
            'internationalization, dynamic forms, third-party services integration (Leaflet, Booking, Expedia, Viator etc.), ' +
            'events tracking, user-generated content and SEO optimization.',
        },
        {
          text:
            'Components architecture design, dynamic forms implementation, ' +
            'form widget integration for internal financial institution project specializing in short term high-risk lending in Georgia and Romania.',
        },
        {
          text:
            'Implementing major code refactoring from SPA to SSR (Next.js) + PWA ' +
            'for cryptocurrency news analysis project.',
        },
        {
          text: 'Speaker for internal offline and online meetups.',
        },
        {
          text: 'Interns code review and training, interviewing new candidates.',
        },
      ],
    },
    {
      startDate: 'August 2018',
      endDate: 'April 2019',
      company: 'Upwork',
      role: COMMON_DATA.ua.role,
      location: 'Remote',
      link: 'https://www.upwork.com/o/profiles/users/_~01fff6263f5fd6f506/',
      list: [
        {
          title: 'Local Insights',
          text:
            'Adding new features, design update, ' +
            'bug fixing, TTFB improvement, code refactoring of existing application.',
          /*
                    link: 'https://localinsights.io/',
          */
        },
      ],
    },
    {
      startDate: 'April 2018',
      endDate: 'May 2018',
      company: 'Chp',
      role: COMMON_DATA.en.role,
      location: COMMON_DATA.en.location,
      link: 'https://chp.zp.ua/',
      list: [
        {
          text: 'Design and creating landing page for local air conditioning company.',
        },
      ],
    },
    {
      startDate: 'August 2014',
      endDate: 'February 2015',
      company: 'oDesk',
      role: 'Web developer',
      location: 'Remote',
      link: 'https://www.upwork.com/o/profiles/users/_~01fff6263f5fd6f506/',
      list: [
        {
          text: 'Bug fixing for small short-term projects.',
        },
      ],
    },
    {
      startDate: 'September 2009',
      endDate: 'May 2018',
      company: 'JSC Motor Sich',
      role: 'Foreign trade department engineer',
      location: COMMON_DATA.en.location,
      list: [
        {
          text: 'Negotiation, execution, signing and support of contracts for the sale of aviation goods and services.',
        },
      ],
    },
  ],
  skills: [
    {
      title: 'Main',
      list: TECH.main,
    },
    {
      title: 'Additional',
      list: TECH.additional,
    },
  ],
  langs: [
    {
      title: 'English',
      level: 'Advanced',
    },
    {
      title: 'Ukrainian',
      level: 'Native',
    },
    {
      title: 'Russian',
      level: 'Native',
    },
  ],
  education: [
    {
      startDate: '2016',
      endDate: '2017',
      company: 'Brain Academy, Zaporizhzhia',
      role: 'Web Development',
    },
    {
      startDate: '2005',
      endDate: '2009',
      company: 'Zaporizhzhian National Technical University',
      role: 'Finance and Credit',
    },
    {
      startDate: '2004',
      endDate: '2009',
      company: 'Zaporizhzhian National Technical University',
      role: 'Aviation Engines Production Technology',
    },
  ],
};

const uk: CVData = {
  profile:
    'Я старший Frontend розробник з багаторічним комерційним досвідом у веб-розробці. ' +
    'Моїм улюбленим технічним стеком є Typescript та Javascript. Я маю глибокий досвід у написанні веб-додатків різної складності. ' +
    'Будучи знайомим із шаблонами проектування, підходами до тестування / керування доменами, ' +
    'я завжди дотримуюсь найкращих практик розробки програмного забезпечення, зберігаючи мій код чистим, зрозумілим, масштабованим та охопленим тестами. ' +
    'Я маю великий досвід роботи з Javascript, ES6 + та TypeScript, і у мене є безліч проектів, реалізованих у Next.js та React. ' +
    'Я знайомий з HTML5 і CSS, а також фреймворками та попередніми процесорами CSS, що дозволяє створювати зручні інтерфейси. ' +
    'Я завжди використовую git, знайомий як з REST, так і з GraphQL і маю пристойний досвід роботи зі службами AWS. ' +
    'Я зацікавлений у розробці веб-додатків із високим навантаженням та масштабованості. ' +
    'Моїм захопленням є технічна реалізація та підтримка складних бізнес-потреб.',
  location: COMMON_DATA.ua.location,
  experience: [
    {
      startDate: 'Липень 2020',
      endDate: 'теп. час',
      company: 'Elementica',
      role: 'Тім лід (Frontend)',
      location: COMMON_DATA.ua.location,
      //link: 'https://pixelteh.com/',
      list: [
        {
          text: 'Тім лід у освітньому стартапі.',
        },
        {
          text: "Тім лід у проекті, пов'язаному з COVID-19.",
        },
        {
          text: 'Розробка архітектури та планування особливостей стартап-проекту.',
        },
        {
          text: 'Розробка UI блокчейн системи для реєстрації, відстеження та очищення боргу.',
        },
        {
          text: 'Проведення співбесід.',
        },
      ],
    },
    {
      startDate: 'Травень 2018',
      endDate: 'Травень 2020',
      company: 'LightIT',
      role: COMMON_DATA.ua.role,
      location: COMMON_DATA.ua.location,
      link: 'https://light-it.net/',
      list: [
        {
          text:
            'Розробка UI для туристичного проекту з PWA та офлайн підтримкою, ' +
            'оновленням данних в реальному часі, інтернаціоналізацією, динамічними формами, ' +
            'інтеграцією зі сторонніми сервісами (Leaflet, Booking, Expedia, Viator та ін.), ' +
            'відстеженням подій, створеним користувачами контентом та SEO оптимізацією.',
        },
        {
          text:
            'Проект фінансової установи, ' +
            'що спеціалізується на короткостроковому високоризиковому кредитуванні. ' +
            'Відповідальний за розробку UI та подальшу підтримку.',
        },
        {
          text:
            'Розробка архітектури компонентів, впровадження динамічних форм, інтеграція форми-віджету для' +
            ' внутрішнього проекту фінансової установи, що спеціалізується ' +
            'на короткостроковому високоризиковому кредитуванні.',
        },
        {
          text: 'Впровадження значного реформування коду з SPA на SSR + PWA пректу для аналізу новин по кріптовалютам.',
        },
        {
          text: 'Спікер у внутрішніх онлайн та офлайн конференціях.',
        },
        {
          text: 'Код ревью та навчання стажерів, проведення співбесід.',
        },
      ],
    },
    {
      startDate: 'Серпень 2018',
      endDate: 'Квітень 2019',
      company: 'Upwork',
      role: COMMON_DATA.ua.role,
      location: 'Віддалено',
      link: 'https://www.upwork.com/o/profiles/users/_~01fff6263f5fd6f506/',
      list: [
        {
          title: 'Local Insights',
          text:
            'провайдер даних зосереджений на обліку нерухомості в режимі реального часу, дозволах на будівництво,' +
            ' податкових нарахувань та інше. ' +
            'Я був відповідальний за додавання нових функцій, оновлення дизайну, ' +
            'виправлення багів, рефакторинг коду.',
          /*
          link: 'https://localinsights.io/',
*/
        },
      ],
    },
    {
      startDate: 'Квітень 2018',
      endDate: 'Травень 2018',
      company: 'Chp',
      role: COMMON_DATA.ua.role,
      location: COMMON_DATA.ua.location,
      link: 'https://chp.zp.ua/',
      list: [
        {
          text: 'Лендінг для локальної компанії з продажу кондиціонерів.',
          link: 'https://chp.zp.ua/',
        },
      ],
    },
    {
      startDate: 'Серпень 2014',
      endDate: 'Лютий 2015',
      company: 'oDesk',
      role: 'Веб Розробник',
      location: 'Віддалено',
      link: 'https://www.upwork.com/o/profiles/users/_~01fff6263f5fd6f506/',
      list: [
        {
          text: 'Короткострокові проекти.',
        },
      ],
    },
    {
      startDate: 'Вересень 2009',
      endDate: 'Травень 2018',
      company: 'АТ "Мотор Січ"',
      role: 'Інженер зовнішньоторговельного департаменту',
      location: COMMON_DATA.ua.location,
      list: [
        {
          text: 'Проведення переговорів, оформлення, підписання та підтримка контрактів на продаж товарів та послуг авіаційного призначення.',
        },
      ],
    },
  ],
  skills: [
    {
      title: 'Основні',
      list: TECH.main,
    },
    {
      title: 'Додаткові',
      list: TECH.additional,
    },
  ],
  langs: [
    {
      title: 'Англійська',
      level: 'Передовий',
    },
    {
      title: 'Українська',
      level: 'Рідний',
    },
    {
      title: 'Російський',
      level: 'Рідний',
    },
  ],
  education: [
    {
      startDate: '2016',
      endDate: '2017',
      company: 'Brain Academy, Запоріжжя',
      role: 'Веб Розробка',
    },
    {
      startDate: '2005',
      endDate: '2009',
      company: 'Запорізький Національний Технічний Університет',
      role: 'Фінанси та кредит',
    },
    {
      startDate: '2004',
      endDate: '2009',
      company: 'Запорізький Національний Технічний Університет',
      role: 'Технологія будування авіаційних двигунів',
    },
  ],
};

export default {
  addition: 'React',
  phone: '+38 (050) 543-60-17',
  email: 'severynov.sergii@gmail.com',
  locationLink: 'https://goo.gl/maps/1JsxNBFiDycahTAQ8',
  github: 'https://github.com/severjason',
  website: 'https://sergii.severynov.com',
  facebook: 'https://www.facebook.com/severjason',
  linkedIn: 'https://www.linkedin.com/in/severjason',
  en,
  uk,
}; // tslint:disable-next-line:max-line-length

export const photo = img;
