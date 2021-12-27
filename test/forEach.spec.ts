import {tsForEach} from "../src/index";

test('for loop still working', async () => {

    let strings = ["it","still","works"];
    let result = [];

    await tsForEach(strings,(string)=>result.push(string));

    expect(result).toHaveLength(3);

});