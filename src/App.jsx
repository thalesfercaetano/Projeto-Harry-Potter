import PersonagensContainer from './components/PersonagensContainer.jsx'
import personagens from './data/data.js'
import data from './data/data.js'
import bellatrix from './assets/personagens/bellatrix.jpg'

function App() {
  return (
    <>
      <PersonagensContainer personagens={personagens}></PersonagensContainer>
      <img src={bellatrix} alt="Bellatrix Lestrange" />

    </>
  )
}

export default App
