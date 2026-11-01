import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import keycloak from './auth/keycloak'
import './index.css'

async function bootstrap() {
  try {
    await keycloak.init({
      onLoad: 'check-sso',
      pkceMethod: 'S256',
      checkLoginIframe: false,
      silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`
    })

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  } catch (error) {
    console.error('Keycloak initialization failed:', error)

    document.getElementById('root')!.innerText =
      'Nie udało się zainicjalizować logowania.'
  }
}

bootstrap()