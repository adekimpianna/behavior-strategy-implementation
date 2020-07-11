// solution by https://www.codewars.com/users/gkucmierz (not separated total days per trip)

function daysRepresented(trips) {
    const set = new Set();
    trips.map(([a, b]) => {
      for (let i = a; i <= b; ++i) {
        set.add(i);
      }
    });
    return set.size;
  }

// solution by https://www.codewars.com/users/igolovko (each trip has its total of days and at the end it sums all up)
  function daysRepresented(trips){
    let array = trips.map(el => {
      let array = [];
      for (let i = el[0]; i <= el[1]; i++) {
        array.push(i);
      }
      return array;
    });
    return [...new Set([].concat(...array))].length;
  }

