import api from '../../src/services/api';
import { provider } from '../helpers/pactSetup';


const { MatchersV3 } = require("@pact-foundation/pact")

describe("Client Service", () => {

  const expectedBody = {
    "email": MatchersV3.string("foo"),
  };

  describe("POST Email", () => {
    beforeEach(() =>
      provider
        .uponReceiving('a request to create client with firstname and lastname')
        .withRequest({
          method: "POST",
          path: "/users",
          headers: {
            "Content-Type": "application/json"
          },
          body: expectedBody,
        })
        .willRespondWith({
          status: 200,
          body: MatchersV3.like(expectedBody),
        })
    )

    test("returns correct body and status code", async () => {
      return provider.executeTest(async (mockServer) => {
        const response = await api(mockServer.url).post('/users', {
          email: "amandaeflavinha@remessaonline.com.br"
        });
        expect(response.data).toEqual(MatchersV3.extractPayload(expectedBody));
        expect(response.status).toEqual(200);
      });

    });
  });



});