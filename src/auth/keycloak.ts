import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "https://id.jakubolejnik.pl",
    realm: "jakubid",
    clientId: "eCasino"
})

export default keycloak;