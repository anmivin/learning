import { NavLink, Routes, Route } from 'react-router-dom';

function Main() {
    const Home = () => (
        <div className='home'>
          <h1>Welcome to my portfolio website</h1>
          <p> Feel free to browse around and learn more about me.</p>
        </div>
      );
  
      const About = () => (
        <div className='about'>
          <h1>About Me</h1>
          <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
          <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
        </div>
      );
  
      
    return (
        <Routes>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        
      </Routes>
          );

} 

export default Main