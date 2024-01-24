import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Test from './test.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com">Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_blank"
  },"Custom google with object"
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
 < App/>
  
)
