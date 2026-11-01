import { useEffect, useRef } from 'react'
import keycloak from '../auth/keycloak'

interface Props {
    children: React.ReactNode
}

export default function RequireAuth({ children }: Props) {
    const loginStarted = useRef(false)

    useEffect(() => {
        if (!keycloak.authenticated && !loginStarted.current) {
            loginStarted.current = true
            void keycloak.login({
                redirectUri: window.location.href
            })
        }
    }, [])

    if (!keycloak.authenticated) {
        return <p>Przekierowywanie do logowania...</p>
    }

    return children
}