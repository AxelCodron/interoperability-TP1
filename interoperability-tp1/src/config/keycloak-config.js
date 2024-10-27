import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'interoperability-realm',
  clientId: 'my-app-client',
});

export default keycloak;
