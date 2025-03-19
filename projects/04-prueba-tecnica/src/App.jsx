/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react"
import './App.css'
import { useCatImage } from "./hooks/useCatImage.js"
import { useCatFact } from "./hooks/useCatFact.js"



export function App() {
    const { fact, refreshFact } = useCatFact()

    const { imageUrl } = useCatImage({ fact })
    const handleClick = async () => {
        refreshFact()
    }


    return (
        <main style={{ display: 'flex', flexDirection: 'column', }}>
            < h1 > App de gatitos</h1>
            { /* if first element then */}
            <button onClick={handleClick}>Get new fact</button>



            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`image extracted from the three first words for ${fact}`}></img>}
            </section>
        </main>
    )
}