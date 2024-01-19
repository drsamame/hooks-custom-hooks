import { useState, useEffect } from 'react'
import { getRamdonFact } from "../services/facts"

export function useCatFact() {
    const [fact, setFact] = useState()

    function getRamdonFactAndSetImage() {
        getRamdonFact().then(fact => setFact(fact))
    }

    useEffect(() => {
        getRamdonFactAndSetImage()
    }, [])

    return { fact, getRamdonFactAndSetImage }
}
