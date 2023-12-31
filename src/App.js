import React from 'react';
import { Routes, Route } 
from'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import NewPost from './NewPost';
import Home from './Home';
import About from './About';
import PostPage from './PostPage';
import Missing from './Missing';
import Footer from './Footer';
import './index.css';
import EditPost from './EditPost';
import { DataProvider } from './context/DataContext';

function App() {

  return (
    <div className='App'>
      <DataProvider>
        <Header title = "Social Media"/>
        <Nav/>
        <Routes>
          <Route path ='/' element = {<Home />}/>
          <Route path = "post" > 
          <Route index element = {<NewPost/>} />
          <Route path = ":id" element = {<PostPage />} /> 
        </Route> 
          <Route path = "/edit/:id" element = {<EditPost/> } />
          <Route path = "about" element = {<About/>} />
          <Route path = "*" element = {<Missing/> } />
        </Routes>
        <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
