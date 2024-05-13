import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'
import AuthContextProvider from "./contexts/AuthContextApi.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthContextProvider>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
    </AuthContextProvider>
  </Provider>
)
