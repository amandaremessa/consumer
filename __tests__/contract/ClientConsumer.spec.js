const { Matchers } = require("@pact-foundation/pact");
const { App } = require("../../src/App");

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
            const response =  await App.postEmail(email);
            expect(response.headers['content-type'].toBe("application/json; charset=utf-8"));
            expect(response.data).toEqual(POST_EXPECTED_BODY);
            expect(response.status).toEqual(200);
        });

    })

})