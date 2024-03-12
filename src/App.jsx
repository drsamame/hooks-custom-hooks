import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

import './App.css'

export function App() {
  const { fact, getRamdonFactAndSetImage } = useCatFact()
  const { catImage } = useCatImage(fact)

  const handleClick = () => {
    getRamdonFactAndSetImage()
  }

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick} >Get new fact</button>
      {fact && <p>{fact}</p>}
      {catImage && <img src={catImage} />}
    </main >
  )
}
