import React from 'react';
import ReactDOM from 'react-dom/client'
import logo from './images/Logo.png'
import { FaCheckCircle } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'

const welcome = 'Welcome to 30 Days of React';
const title = 'Getting Started React';
const subtitle = 'JavaScript Library';
const learner = {
  firstName: 'Damien',
  lastName: 'Antoine',
};
const date = "March 09, 2026";

const Header = () => (
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

const SkillsList = () => {
  const skills = ['.NET', 'C#', 'C', 'C++', 'JavaScript', 'React', 'HTML', 'GIT', 'MYSQL'];
  const skillsFormated = skills.map((skill) => <span key={skill} className='skills-styles'>{skill}</span>);
  return skillsFormated;
}

const usercardTitle = 'Junior Developer, Belgium';

const UserCard = () => (
  <div className='usercard-wrapper'>
    <div className='avatar-frame'>
      <img className='image-styles' src={logo} alt='logo' />
    </div>
    <div className='usercard-title-container'>
      <h3 className='usercard-name-styles'>{learner.firstName} {learner.lastName}<FaCheckCircle className='icons-styles' /></h3>
      <p className='usercard-title-styles'>{usercardTitle}</p>
    </div>
    <h3 className='usercard-name-styles'>SKILLS</h3>
    <div className='skills-container'>
      <SkillsList />
    </div>
    <p className='joindate-styles'><FiClock className='icons-styles'/>Joined on {date}</p>
  </div>
);

const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

const buttonStyles = {
  padding: '10px, 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
}

const Button = () => <button style={buttonStyles}> action </button>

const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color;
}

const HexaColor = () => <div>{hexaColor()}</div>

const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
      <Button />
      <HexaColor />
    </div>
  </main>
)

const copyRight = 'Copyright 2026';
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

const app = (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(app);