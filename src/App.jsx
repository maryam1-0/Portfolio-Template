import Header from './components/Header/Header'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

//we could assemble all components in app and call them and show on screen but the better approach when we use reacte-router is not to render the components in App, infact we can delete this App file and can render directly in main.jsx.  
function App() {

  return (
    <>
     {/* <Header/>
      <Home/>
      <Footer/> */}
    </>
  )
}

export default App
