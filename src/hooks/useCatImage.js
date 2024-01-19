
import { useState, useEffect } from 'react'
const CAT_ENDPOINT_IMAGE = 'https://cataas.com'

export function useCatImage(fact) {
    const [catImage, setCatImage] = useState()

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
    return { catImage }

}