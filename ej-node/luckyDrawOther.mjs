//The luckyDraw function returns a promise.
//Create a promise chain where the function
//is called for for each of the players: Joe, Caroline and Sabrina

//Log out the resolved value for each promise
//and handle any promise rejections in the chain.

function luckyDraw(player) {

    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));

      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }


// show all results without stopping for errors:

const players = ["Joe", "Caroline", "Sabrina"];

const promises = players.map(player => luckyDraw(player));
Promise.allSettled(promises)
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log(result.value);
      } else {
        console.error(result.reason.message);
      }
    });
  });


//or with async await

async function runDraws() {
    const players = ["Joe", "Caroline", "Sabrina"];

    for (const player of players) {
      try {
        const result = await luckyDraw(player);
        console.log(result);
      } catch (error) {
        console.error(error.message);
      }
    }
  }

  runDraws();
