import { useState} from 'react'
import Navbar from './components/Navbar.jsx'
import Form from './components/Form.jsx'
import Figure from './components/Figure.jsx'
function App() {
  const [data, setData] = useState({})
  
  const getData = (dataWillComeFromForm) => {
    setData(dataWillComeFromForm)
  }
  return (
    <div className="App relative w-full h-full">
      <Navbar/>
      <main className="w-full py-3">
      <Form getDataOnSubmit={getData}/>
      <Figure Toptxt={data.topTitle} Bottomtxt={data.bottomTitle} />
      </main>
    </div>
  );
}

export default App;
