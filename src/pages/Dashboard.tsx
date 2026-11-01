import keycloak from '../auth/keycloak'

export default function Dashboard() {
    const username = keycloak.tokenParsed?.preferred_username

    return (
        <main>
            <h1>Dashboard</h1>
            <p>Witaj, {username}!</p>

            <p>To jest chroniona część aplikacji.</p>

            <button onClick={() => keycloak.logout({
                redirectUri: window.location.origin
            })}>
                Wyloguj
            </button>
        </main>
    )
}