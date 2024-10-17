// App.js
import { useTheme, ThemeProvider } from './COMPONENTS/ThemeContext';


import Header from "./COMPONENTS/Header";
import Home from "./COMPONENTS/Home";
import Projects from "./COMPONENTS/Projects";
import Skills from "./COMPONENTS/Skills";
import Footer from "./COMPONENTS/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <header>
       
      </header>

      <main>
      <Header />
      <div id="home">
        <Home />
      </div>
      
     
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Footer />
        </div>
      </main>

   
    </div>
  );
};

// Wrapping the App in the ThemeProvider to provide theme context
const WrappedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default WrappedApp;
