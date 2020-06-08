import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

   let finalHomeTeamName = fifaData.filter((home) => {
       return home.Year =="2014" && home.Stage == "Final";
   });
   console.log(finalHomeTeamName[0]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finals = fifaData.filter((final) => {
        return final.Stage === data;
    })
    return finals;
}
console.log(getFinals("Final"));
   


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    callback(getFinals)
    const year = fifaData.map((year) => {
        return year.Year;
    });

};

console.log(Array.from(new Set(fifaData.map(e=>e.Year))));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let winners = [];
    return callback.reduce((win, state) => {
        if (state["Home Team Goals"] === state ["Away Team Goals"] && state.Stage === "Final") {
            win.push(state["Win Conditions"]);
        } else if (state["Home Team Goals"] > state["Away Team Goals"] && state.Stage === "Final") {
            win.push(state["Home Team Name"]);
        } else if (state["Home Team Goals"] < state ["Away Team Goals"] && state.Stage === "Final") {
            win.push(state["Away Team Name"]);
        }    
        return winners;
    }, []);

};

console.log(getWinners(fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
    let winners = cb1(getWinners);
    let years = cb2(getYears);
    for (let i=0; i < fifaData.length; i++) {
        console.log(`"In ${years[i]}, ${winners[i]} won the World Cup!"`);
    }
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    let AvgHomeGoals = data.reduce((total, goals) => {
        return total += goals["Home Team Goals"]//.HomeTeamGoals;
    }, 0);

    let AvgAwayGoals = data.reduce((total, goals) => {
        return total += goals["Away Team Goals"]//home.AwayTeamGoals;
    }, 0);

    console.log(Math.ceil((AvgHomeGoals / data.length)));
    console.log(Math.ceil((AvgAwayGoals / data.length)));

};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
