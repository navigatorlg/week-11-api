const { expect, assert } = require("chai");
const axios = require("axios");
const baseUrl = "https://api.chucknorris.io/jokes";

describe("Random jokes", async function () {
  it("a few api tests on jokes", async function () {
    const joke1 = await axios.get(`${baseUrl}/random`);
    const joke2 = await axios.get(`${baseUrl}/random`);

    // verify user get different joke upon every request
    expect(joke1.data.value).not.to.equal(joke2.data.value);
    assert.notEqual(joke1.data.value, joke2.data.value);

    // should get 200 status code response
    expect(joke1.status).to.equal(200);
    assert.isNumber(joke1.status, 200);
    assert.equal(joke1.status, 200);

    // should get response with https://api.chucknorris.io/jokes base of the url
    expect(joke1.data.url).to.include("https://api.chucknorris.io/jokes");
    assert.include(joke1.data.url, "https://api.chucknorris.io/jokes");
    assert.include(joke1.data.url, baseUrl);
  });
});
