import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ProjectRipOff from './components/ProjectRipOff';
import ProjectOpenGL from './components/ProjectOpenGL';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';


class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/projects" render={() => <ProjectsPage />} />
          <Route path="/about" render={() => <AboutPage />} />
          <Route path="/ripoff" render={() => <ProjectRipOff />} />
          <Route path="/opengl" render={() => <ProjectOpenGL />} />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
