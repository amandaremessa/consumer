import { PactV3 } from "@pact-foundation/pact";

module.exports.provider = new PactV3({
  port: 3333,
  logLevel: 'INFO',
  consumer: 'frontend',
  provider: 'clients-service',
  pactfileWriteMode: 'merge',
})
