const calcLength = require('../bundle').calcLength;
const chai = require('chai');
chai.should();

const tests = [
    {
        val: 'test',
        res: '4',
    },
    {
        val: '',
        res: '0',
    },
    {
        val: 'qwerty',
        res: '6',
    },
    {
        val: 'test%20and%20test',
        res: '17',
    },
    {
        val: 'magiiiic',
        res: '8',
    },
];

describe('Test calc length', () => {
    for (let i = 0; i < tests.length; ++i) {
        it('Check function calc length №' + (i + 1), () => {
            calcLength('http://localhost:3000/length?' + tests[i].val).should.equal(tests[i].res);
        });
    }
});
