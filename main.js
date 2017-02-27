/**
 *   @author Meyerson, Gabe (gabemeyerson@gmail.com)
 *   @version 0.0.1
 *   @summary kata 1 || created: 02.24.2017
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

const firstName = 0, lastName = 1, dateOfBirth = 2;

class kata {
    constructor() {
        this.people = [];
        this.continueResponse = null;
        this.counter = 0;
        // process.stdout.write('\x1Bc'); //Clears the screen
        this.setContinueResponse();
        while (this.continueResponse === 1) {
            this.populatePeople();
            this.setContinueResponse();
            this.counter++;
        }
        this.printPeople();

    }

    setContinueResponse() {
        if (this.continueResponse != null) {
            this.continueResponse = -1;
            while (this.continueResponse !== 1 && this.continueResponse !== 0) {
                this.continueResponse = Number(PROMPT.question(`\nDo you want to continue? [ 0=no, 1=yes ]: `));
            }
        } else {
            this.continueResponse = 1;
        }
    }

    populatePeople() {
        let first, last, yob;
        const OLDESTYEAR = 1900, CURRENTYEAR = 2017;
        while (typeof first == 'undefined' || !/(^[a-z]+$){1,10}/i.test(first)) {
            first = PROMPT.question(`Please enter your first name: `);
        }
        while (typeof last == 'undefined' || !/(^[a-z]+$){1,25}/i.test(last)) {
            last = PROMPT.question(`Please enter your last name: `);
        }
        while (typeof yob == 'undefined' || yob <= OLDESTYEAR || yob >= CURRENTYEAR) {
            yob = PROMPT.question('Please enter your year of birth: ');
        }
        this.people[this.counter] = {
            'firstName': first,
            'lastName': last,
            'dateOfBirth': yob,
            'yearsAlive': Number(CURRENTYEAR - yob)
        };
    }

    printPeople() {
        for (let i = 0; i < this.people.length; i++) {
            console.log('----------------------------------------------------------');
            console.log(`${this.people[i].firstName} ${this.people[i].lastName}\n Date Of Birth = ${this.people[i].dateOfBirth}\n Years Alive = ${this.people[i].yearsAlive}`);
        }
        console.log('----------------------------------------------------------');
    }
}

(main => {
    new kata();
})();
