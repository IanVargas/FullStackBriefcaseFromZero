import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './stylesheets/App.css'
import  Header  from './components/header';
import ContactUs from './components/contact';
import About from './components/about';


function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About/>
      <ContactUs/>
    </>
  )
}

export default App
