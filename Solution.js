
/**
 * 'boolean knows(int a, int b)' API:
 * 
 * The functions 'knows', displayed here, is for information purposes only.
 * This function is implemented internally by leetcode.com and should not be
 * included in the code, when running the solution on the website.
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *  returns 'true', if 'a' knows 'b', otherwise returns 'false'.
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function (n) {
        const totalPeople = n;
        let potentialCelebrity = 0;
        for (let person = 0; person < totalPeople; person++) {
            if (knows(potentialCelebrity, person)) {
                potentialCelebrity = person;
            }
        }
        return isCelebrity(potentialCelebrity, totalPeople) ? potentialCelebrity : -1;
    };

    function isCelebrity(person, totalPeople) {
        for (let anotherPerson = 0; anotherPerson < totalPeople; anotherPerson++) {
            if (anotherPerson !== person) {
                if (knows(person, anotherPerson) || !knows(anotherPerson, person)) {
                    return false;
                }
            }
        }
        return true;
    }
};
