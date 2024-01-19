import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState('')
  const [catImage, setCatImage] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT)
      .then(res => res.json())
      .then((res) => {
        setFact(res.fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]
    const CAT_ENDPOINT_IMAGE_URL = `${CAT_ENDPOINT_IMAGE}/cat/says/${firstWord}`
    fetch(CAT_ENDPOINT_IMAGE_URL)
      .then(response => response.blob())
      .then((blob) => {
        setCatImage(URL.createObjectURL(blob))
      })
  }, [fact])
  return (
    <main>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
      {catImage && <img src={catImage} />}
    </main>
  )
}
