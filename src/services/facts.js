
const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'

export async function getRamdonFact() {
    const res = await fetch(CAT_ENDPOINT_FACT)
    const data = await res.json() 
    const { fact } = data
    return fact
}