const path = require("path");
const Pact = require("@pact-foundation/pact");

global.provider = new Pact({
    port: 8081,
    log: path.resolve(process.cwd(), "__tests__/contract/logs", "logs-pact.log" ),
    dir: path.resolve(process.cwd(), "__tests__/contract/pacts"),
    spec: 2,
    logLevel: 'INFO',
    pactfileWriteMode: "overwrite",
    consumer: "consumer",
    provider: "provider"
})