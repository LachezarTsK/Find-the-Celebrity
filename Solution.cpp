
using namespace std;

class Solution {
    int totalPeople;

    int findCelebrity(int n) {
        totalPeople = n;
        for (int person = 0; person < totalPeople; person++) {
            if (isCelebrity(person)) {
                return person;
            }
        }
        return -1;
    }

    bool isCelebrity(int& person) {
        for (int anotherPerson = 0; anotherPerson < totalPeople; anotherPerson++) {
            if (anotherPerson != person) {
                if (knows(person, anotherPerson) || !knows(anotherPerson, person)) {
                    return false;
                }
            }
        }
        return true;
    }

    /*
     * 'bool knows(int a, int b)' API:
     * 
     * The functions 'knows', displayed here, is for information purposes only.
     * This function is implemented internally by leetcode.com and should not be
     * included in the code, when running the solution on the website.
	
    bool knows(int a, int b) {
            returns 'true', if 'a' knows 'b', otherwise returns 'false'.
    }
     */
};
