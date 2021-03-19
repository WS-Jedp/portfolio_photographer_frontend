import React from 'react'
import ReactDOM from 'react-dom'
import { Styles } from './styles'

import { App } from './routes'

ReactDOM.render(<>
  <Styles />
  <App />
  </>, window.document.getElementById('main'))
