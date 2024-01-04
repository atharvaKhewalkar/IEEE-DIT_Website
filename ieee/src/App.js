import './App.css';
import Home from './components/Home/home';
import About from './components/about/about';
import Team from './components/team/team';
import Event from './components/events/events'
import Join from './components/JoinUs/join';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
    <Home/>
    <About/>
    <Team/>
    <Event/>
    <Join/>
    <Footer/>
    </div>
  );
}

export default App;
