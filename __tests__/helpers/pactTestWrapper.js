const provider = require("../helpers/pactSetup");

jest.setTimeout(30000)

beforeAll(()=> provider.setup());

afterAll(() => provider.finalize());