import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'  //start a function's name from capital letter
import Test from './Test.jsx'

createRoot(document.getElementById('root'))
.render(
  // render function takes html only as an input and parses it to js object form
  <>    
  {/* since single fragment can be rendered thus, enclosed within div or empty tag*/}
    <h3>rendered (directly) without function</h3>
    <Test />
    <CustomFxn/>
  </>
)

function CustomFxn(){
  const username = "variable injected here"  //IMP - evaluated expression

  return(
    <div>
      <p>function rendered directly inside main + {username}</p>
    </div>
  )
}
