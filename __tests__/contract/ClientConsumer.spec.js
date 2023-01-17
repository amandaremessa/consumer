"use strict"

import { api } from '../../src/services/api';
const provider = require("../helpers/pactSetup");


const { MatchersV3 } = require("@pact-foundation/pact")

describe("Client Service", () =>{

    const expectedBody = [{
        "email": "foo",
        "id": "bar"
    }];

    afterEach(() => provider.verify());

    describe("POST Email", () =>{
        beforeEach(()=>{
            mockProvider
            .uponReceiving('a request to create client with firstname and lastname')
            .withRequest({
              method: "POST",
              path: "/users",
              headers: {
                "Content-Type": "application/json;charset=utf-8"
              },
              body: requestBody,
            })
            .willRespondWith({
              status: 200,
              body: MatchersV3.like(expectedBody),
            });
          })
      
    });

        test("returns correct body and status code", async() =>{


            return mockProvider.executeTest(async () => {
                const response = await api.post('/users', {
                    email: "amandaeflavinha@remessaonline.com.br"
                  });
                  expect(response.data).to.deep.equal(expectedBody);
                  expect(response.status).to.equal(200);

            });

        });

});