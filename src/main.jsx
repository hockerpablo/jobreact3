import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/global_styles.js'
import { Provider } from 'react-redux'
import {persistor, store} from './redux/store.jsx'
import { PersistGate } from 'redux-persist/integration/react'
 


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
   <PersistGate persistor={persistor}>

  <React.StrictMode>
    <App />
    <GlobalStyles/>
  </React.StrictMode>,
   </PersistGate>
  </Provider>
)
