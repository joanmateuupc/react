import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { App } from './App.jsx'
import './index.css'

const Button = ({text}) => {

  return (<button>{text}</button>)

}

const root = createRoot(document.getElementById('root'))
root.render(

  <App />
)
