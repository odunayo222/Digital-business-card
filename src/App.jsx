import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className="container">
        <img src="../src/assets/img/img.JPG" width="300px" height="300px" />
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </>
  )
}


export default App