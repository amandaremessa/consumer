//const { Matchers } = require("@pact-foundation/pact");
import App from "../../src/App"
const path = require("path");
const pactV3 = require("@pact-foundation/pact");
const PactV3 = pactV3.PactV3

const provider = new PactV3({
    port: 8081,
    log: path.resolve(process.cwd(), "__tests__/contract/logs", "logs-pact.log" ),
    dir: path.resolve(process.cwd(), "__tests__/contract/pacts"),
    spec: 2,
    logLevel: 'INFO',
    pactfileWriteMode: "overwrite",
    consumer: "consumer",
    provider: "provider"
});

describe("Client Service", () =>{

    const POST_EXPECTED_BODY = [{
        "email": "foo",
        "id": "bar"
    }];

    afterEach(() => provider.verify());

    describe("POST Email", () =>{
        beforeEach(()=>{
            const interaction = {
                state: "I create an email on database",
                uponReceiving: "a request for post email",
                withRequest: {
                    method: "POST",
                    path: "/users",
                    headers: {
                        Accept: "application/json, text/plain, */*"
                    },
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: POST_EXPECTED_BODY,
                },
            }
            return provider.addInteraction(interaction);
        });

        test("returns correct body, header and status code", async() =>{
            let email = "amandaeflavinha@remessaonline.com.br"
            const response =  await (email);
            // eslint-disable-next-line jest/valid-expect
            expect(response.headers['content-type'].toBe("application/json; charset=utf-8"));
            expect(response.data).toEqual(POST_EXPECTED_BODY);
            expect(response.status).toEqual(200);
        });

    })

})