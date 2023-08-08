import './App.css';
import bg from './unsplash_75xPHEQBmvA.png'
import i1 from './alfred.png'
import logo from './AV-removebg-preview.png'
import html from './Html.png'
import css from './css.png'
import js from './js.png'
import rct from './React.png'
import mongo from './Mongo.png'
import fl from './Fl.png'
import light from './lightroom.png'
import bgackground from './black.png'
import insta from './instagram.png'
import gmail from './gmail.png'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './NavLayout';



function App() {
  return (
    <div>
      <img class="bg" src={bg}></img>
      <div class="header">
        <div class="logo">
            <img src={logo}></img>
        </div>
        <div class="Nav">
            <p class="Home">Home About Contact</p>
        </div>
      </div>
      <div class="banner_text">
        <p>Alfred Vineeth</p>
      </div>
      <div class="myimg">
        <img src={i1}></img>
    </div>
    <p class="scroll">scroll to view!</p>
    <div>
        <p class="about">About</p>
        <p class="para">Hello, I'm Alfred Vineeth W, an aspiring Artificial Intelligence and Data Science student at Kumaraguru College of Technology.
             My passion for technology and data analysis has always been the driving force behind my academic pursuits. 
             I am particularly interested in the field of designing, where I love creating visually appealing and user-friendly interfaces 
             that enhance user experiences.</p>
    </div>
    <div>
        <p class="interests">Interests</p>
        <div class="inter">
            <p>Fullstack</p>
            <p>Music Production</p>
            <p>Photography</p>
        </div>
        <div class="interim">
            <div class="impos">
                <img class="html" src={html}></img>
                <p class="htmldes">HTML (Hypertext Markup Language) is a markup language used to create the structure and content of web pages.</p> 
                <img class="css"  src={css}></img>
                <p class="cssdes">CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation and layout of HTML documents. It allows you to control the appearance of HTML elements on a web page.</p>
                <img class="js"src={js}></img>
                <p class="jsdes">JavaScript (JS) is a high-level, interpreted programming language used for adding interactivity and dynamic functionality to web pages.</p>
                <img class="react"  src={rct}></img>
                <p class="reactdes">React is an open-source JavaScript library for building user interfaces for web applications in a declarative and efficient manner.</p>
                <img class="Mongo" src={mongo}></img>
                <p class="Mongodes">MongoDB is an open-source NoSQL database management system that uses a document-oriented data model, storing data in JSON-like format with dynamic schemas.</p>
                <img class="fl"src={fl}></img>
                <p class="fldes">FL Studio is a digital audio workstation (DAW) software used for music production, recording, editing, and mixing, offering a wide range of tools and features for musicians and producers.</p>
                <img class="background" src={bgackground}></img>
                <img class="lightroom"   src={light}></img>
                <p class="lightroomdes">Lightroom is a popular image editing software developed by Adobe Systems, designed specifically for photographers to manage, edit, and enhance their photos with various tools and presets.</p>
            </div>
        </div>
        <div class="contact">
            <p>Contact</p>
            <img class="instagram" src={insta}></img>
            <img class="gmail"  src={gmail}></img>
            <div class="social">
            <a class="link" href='https://instagram.com/_alfred.w_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'>_alfred.w_</a>
            <p>alfredvineeth7@gmail.com</p>
            </div>
        </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          
        </Route>
      </Routes>
    </BrowserRouter>
    </div>   
    </div>
  );
}

export default App;

