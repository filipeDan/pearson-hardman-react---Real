// na instalação do " react- router-dom" 
import { BrowserRouter as Router, Routes, Route} from "react- router-dom"
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {Contato, Time} from "./pages/Time";

function App() {

  return (
    <>
      <Router />
        <Header />
          <Routes />
          {/* pagina inicial só com header e footer */}
             <Route path="/" element={<></>} />
             <Route path="/contato" element={<Contato />} />
             <Route path="/Time" element={<Time />} />
          <Routes/>
      <Footer />
    <Router />
    </>
      )
}

export default App
