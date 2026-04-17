import PersonagensContainer from './components/PersonagensContainer.jsx'
import personagens from './data/data.js'

function App() {
  return (
    <>
      <PersonagensContainer personagens={personagens}></PersonagensContainer>
    </>
  )
}

export default App
