import React from 'react';
import ReactDOM from 'react-dom/client'
import logo from './images/Logo.png'
import { FaCheckCircle } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'

const welcome = 'Welcome to 30 Days of React';
const title = 'Getting Started React';
const subtitle = 'Javascript Library';
const learner = {
  firstName: 'Damien',
  lastName: 'Antoine',
};
const learnerTitle = 'Junior Developer, Belgium';
const date = "March 09, 2026"

const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Learner: {learner.firstName} {learner.lastName}</p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1534;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {' '}
    {learner.firstName} {learner.lastName} is {age} years old.
  </p>
);

const techs = ['HTML', 'CSS', 'JavaScript'];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);

const subscribeForm = (
  <div className='subscribe-wrapper'>
    <h1 className='subscribe-title'>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates.</p>
    <div className='input-styles'>
      <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="lastName" placeholder="Last Name" />
      <input type="text" name="email" placeholder="Email" />
    </div>
    <button className='submit-styles'>Subscribe</button>
  </div>
);

const skills = ['.NET', 'C#', 'C', 'C++', 'JavaScript', 'React', 'HTML', 'GIT', 'MYSQL'];
const skillsFormated = skills.map((skill) => <span key={skill} className='skills-styles'>{skill}</span>)

const userCard = (
  <div className='usercard-wrapper'>
    <div className='avatar-frame'>
      <img className='image-styles' src={logo} alt='logo' />
    </div>
    <div className='usercard-title-container'>
      <h3 className='usercard-name-styles'>{learner.firstName} {learner.lastName}<FaCheckCircle className='icons-styles' /></h3>
      <p className='usercard-title-styles'>{learnerTitle}</p>
    </div>
    <h3 className='usercard-name-styles'>SKILLS</h3>
    <div className='skills-container'>
      {skillsFormated}
    </div>
    <p className='joindate-styles'><FiClock className='icons-styles'/>Joined on {date}</p>
  </div>
);

const main = (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started {' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {userCard}
      {subscribeForm}
    </div>
  </main>
)

const copyRight = 'Copyright 2026';

const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(app);