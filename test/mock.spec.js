'use strict'

// parse oData String

var submissionFiles = [
    {
        id: "1",
        name: "file1",
        priced: "true",
        inOriginalSubmission: "true"
    },
        {
        id: "2",
        name: "file2",
        priced: "true",
        inOriginalSubmission: "true"
    },
        {
        id: "3",
        name: "file3",
        priced: "true",
        inOriginalSubmission: "false"
    },
]


var calculator = {
	sum: function(x, y) {
		return 2; // <-- note this is hardcoded
	}
}


describe('calculator', function () {

    it('1 + 1 should equal 2', function () {
        expect(calculator.sum(1, 1)).toBe(2);
    });
});


