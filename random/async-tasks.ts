/* 1. Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
Функция delay(ms) должна возвращать промис, который перейдёт в 
состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then
*/

const delay = (ms: number) => {
    return new Promise((res) => setTimeout(res, ms))
}


/* 2. Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");
  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Полное имя: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}
*/

const loadJson = async(url: string) => {
    const resp = await fetch(url);
    if (resp.status !== 200) throw new Error(`${resp.status}`);
    return resp.json();
  }

const demoGithubUser = async() => {
let user;
while(true) {
    const name = prompt("Введите логин", "login");
    try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break;
    } catch (err) {
        if (err.response.status === 404) {
            alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {
            throw err
        }
    }
}
alert(`Полное имя: ${user.name}.`);
return user;
}; 

/* 3. Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}
function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}
*/

const wait = async() => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

const notAsync = () => {
    wait().then(result => alert(result));
}

/* 4. Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
Сделайте два варианта решения.
Используя setInterval.
Используя рекурсивный setTimeout.
*/

const printNumbersInterval = (from: number, to: number) => {
    let cur = from;
    let timer = setInterval(() => {
        console.log(cur);
        if (cur === to) clearInterval(timer);
        cur++;
    }, 1000)
}

const printNumbersTimeout = (from: number, to: number) => {
    let cur = from;
    const go = () => {
        console.log(cur);
        if (cur < to) setTimeout(go, 1000);
        cur++;
    }
    setTimeout(go, 1000)
    
}


/* 5. Написать функцию, принимающую другую функцию как аргумент и выполняющую её через 2 секунды */
const callbackFunc = () => {
    console.log('Hello')
}

const timeoutFunction = (callback: () => void) => {
    setTimeout(callback, 2000)
}
timeoutFunction(callbackFunc)

/* 6. Написать утилиту, выводящую числа, начиная с init через промежуток steps,
которая может быть запущена и остановлена пользователем любое количество раз.
*/

const timerWithStops = (init: number, step: number) => {
    let current = init;
    let timerId: number | null;
    return {
        start: () => {
            if (!timerId) {
                timerId = setInterval(() => {
                    console.log(current);
                    current += step
                }, 1000);
            }
        },
        stop: () => {
            if (timerId) {
                 clearInterval(timerId);
                 timerId = null;
            }
           
        },
    }
}

/* 7. Выполнить массив асинхронных функций параллельно и вернуть их результаты как массив */

const asyncFunc1 = async() => {
    return '1'
}

const asyncFunc2 = async() => {
    return '2'
}

const asyncFunc3 = async() => {
    return '3'
}


const getResults = async(funcsArray: (() => Promise<string>)[]) => {
    return await Promise.all(funcsArray.map((func) => func()))
};

const results = await getResults([asyncFunc1,asyncFunc2, asyncFunc3])


/* 8. Последовательно выполнить 3 асинхронные функции с помощью цепочки промисов */
asyncFunc1().then(asyncFunc2).then(asyncFunc3).catch((err) => { console.log(err); });

/* 9. Последовательно выполнить 3 асинхронные функции с помощью async await*/
const asyncExecutor = async () => {
    try {
        await asyncFunc1();
        await asyncFunc2();
        await asyncFunc3();
    } catch(err) {
        console.log(err);
    }
};

/* 10. Последовательно выполнить 3 асинхронные функции с помощью цепочки промисов, не останавливаясь при ошибке.*/
asyncFunc1()
    .then(
        () => {
            console.log('success 1');
        },
        () => {
            console.log('err 1');
        }
    )
    .then(asyncFunc2)
    .then(
        () => {
            console.log('success 2');
        },
        () => {
            console.log('err 2');
        }
    )
    .then(asyncFunc3)
    .then(
        () => {
            console.log('success 3');
        },
        () => {
            console.log('err 3');
        }
    );

/* 11. Последовательно выполнить 3 асинхронные функции с помощью async await, не останавливаясь при ошибке */
const asyncExecutorNoErrors = async () => {
    try {
        await asyncFunc1();
    } catch(err1) {
        console.log(err1)
    }
    try {
        await asyncFunc2();
    } catch(err2) {
        console.log(err2)
    }
    try {
        await asyncFunc3();
    } catch (err3) {
        console.log(err3)
    }
};

/* 12. Последовательно выполнить массив асинхронных функций, возвращающих промис.
Фиксировать результаты промисов в массиве
*/
const resolvePromisesSeq = async (functions: (() => Promise<string>)[]) => {
    const results: string[] = [];
    functions.forEach(async(func) => results.push(await func()))
    return results;
  };

const sequenceResults = await resolvePromisesSeq([asyncFunc1, asyncFunc2, asyncFunc3]);

/*13. Написать утилиту, возвращающая результат первого выполненного промиса, с максимальным таймаутом, задаваемым пользователем */

const timeoutFunc = (delay?: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Timeout"), delay);
    })
}

Promise.race([asyncFunc1, asyncFunc2, asyncFunc3, timeoutFunc].map((func) => func())).then((data) => console.log(data)).catch((err) => console.log(err));

/* 14. Написать утилиту, принимающую URL и количество попыток выполнения запроса. 
Если запрос не был выполнен, повторять его с увеличивающейся задержкой указанное количество раз.
Если все запросы не удались, промис должен зареджектиться
 */
const requestManager = (url: string, attempts: number) => {
    return new Promise(async (resolve, reject) => {
        for (let i = 1; i <= attempts; i++) {
            try {
                const response = await fetch(url);
                resolve(response);
                break;
            } catch (err) {
                if (attempts === i) {
                    reject(err);
                    break;
                }
                await new Promise(resolve => setTimeout(resolve, 1000 * i));
            }
        }
    });
}

/* 
    1. Create a function called "fetchUser" that returns 
       a Promise that resolves with the value :
       { data: {user: "Monkey", admin: true} } after 3 seconds
    2. Create a function called "login" that takes an Object
       as an argument. If the object has a property called 
       "admin" with a value of true, then log out
       "Successfully logged in!", otherwise log out
       "Failed to log in, please try again."
   
    3. Create an async function that uses await to wait for
       the data to comes back from "fetchUser".
    
    4. Pass the user that comes back from "fetchUser" to the
       "login" function you created above

    5. Call the async function you created
 */

    const fetchUser: () => Promise<{ data: { user: string, admin: boolean } }> = () => {
        return new Promise((res, rej) => {setTimeout(() => {
            res({ data: { user: "Monkey", admin: true } });
          }, 3000)})
    }

    const login = (objArg: {admin: boolean}) => {
        if (objArg.admin) console.log('Successfully logged in!');
        else console.log('Failed to log in, please try again')

    }
const waitForUsersFetch = async() => {
        const user = await fetchUser();
        login(user.data);
    }
    waitForUsersFetch();


    /*
    1. Create a function called "fetchFast" that returns 
       a Promise that resolves with the String "Fast Done!"
       after 2 seconds
    2. Create a function called "fetchSlow" that returns 
       a Promise that resolves with the String "Slow Done"
       after 6 seconds 
    
    3. Create an async function that uses await to wait for
       the data to comes back from "fetchFast" then log out
       the data. Then use await to wait for the data to come
       back from "fetchSlow" and log it out right after.

    4. Call the async function you created

*/

const fetchFast = () => {
    return new Promise((res, rej) => {setTimeout(() => {
        res('Fast Done!');
      }, 2000)})
}

const fetchSlow = () => {
    return new Promise((res, rej) => {setTimeout(() => {
        res('Slow Done!');
      }, 6000)})
}

const waitFetchData = async() => {
    const fastResult = await fetchFast();
    console.log(fastResult);
    const slowResult = await fetchSlow();
    console.log(slowResult);

    const promeseAllResult = await Promise.all([fetchFast(), fetchSlow()]);
    console.log(promeseAllResult);
}
waitFetchData();

/*
    1. Create a function called "goGetCandies" which will
       return a Promise Object that resolves to the value:
       { candy: "sour keys", quantity: 10 }
       This should take 2 seconds

    2. Create another function called "sellCandies" that
       will take a candy Object like above ^ and return
       a Number that is 25 * quantity. This will be 
       how much (in cents) we get for our candies. However,
       make this function take 3 seconds to do this math
       (return a Promise with a setTimeout with the answer).

    3. Write an async function that uses await to:
       1. Get the candy object from goGetCandies()
       2. Passes it to "sellCandies" and waits for the response
       3. Prints out how much money we made from our sale

    4. Do the same steps as #3 but with vanilla Promises.
*/

const goGetCandies: () => Promise<{ candy: string, quantity: number }> = () => {
    return new Promise((res, rej) => {setTimeout(() => {res({ candy: "sour keys", quantity: 10 })}, 2000)});
}
 const sellCandies = (candy: { candy: string, quantity: number }) => {
    return new Promise((res, rej) => {setTimeout(() => {res(candy.quantity * 25)}, 3000)});
 }

const calculateIncome = async () => {
    const candy = await goGetCandies();
    const income = await sellCandies(candy);
    console.log(income);
}

const vanilaCalculateIncome = () => {
    goGetCandies().then((candy) => {
        sellCandies(candy).then((income) => console.log(income))
    })
}

/*
    1. Create a function called "fetchPokemon" that returns 
       a Promise that resolves with the value :
       { data: {name: "Pickachu", power: 20} } after 2 seconds
    
    2. Create an async function that uses await to wait for
       the data to comes back from "fetchPokemon" then log out
       the data

    3. Call the async function you created

    After your're done the above ^:
    4. Change "fetchPokemon" to reject after 2 seconds instead
       with a new Error Object with the message "Danger, danger!"
*/
const fetchPokemon = () => {
    return new Promise((res, rej) => {setTimeout(() => {res( { data: {name: "Pickachu", power: 20} })}, 2000)});
}

const errorFetchPokemon = () => {
    return new Promise((res, rej) => {setTimeout(() => {rej( new Error('Danger, danger!'))}, 2000)});
}

const waitForPokemon = async() => {
    const pokemon = await fetchPokemon();
    console.log(pokemon)
}

const rejectedPokemon = async() => {
    await fetchPokemon().catch((err) => console.log(err));

}


/*
    1. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds

    2. Print out "Program complete" if the promise fulfills
    3. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/

const firstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res('resolved');
  }, 3000);

  setTimeout(() => {
    rej();
  }, 2000);
});

firstPromise
  .then(() => {
    console.log("Program complete");
  })
  .catch(() => {
    console.log("Program failure");
  });

/*
    1. Create a Promise that resolves after 3 seconds
    2. Print out "Step 1 complete" when the first promise fulfills
    3. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"
    4. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")

    HINT: Use setTimeout for the delay
*/

const secondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res('Step 1 complete');
  }, 3000);
});

secondPromise
  .then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("Step 2 Complete");
      }, 6000);
    });
  })
  .then((data) => {
    console.log(data);
  });

/*
    1. Create a Promise that resolves after 5 seconds with the
       value {data: "Hello, friend!", error: null}

    2. Create a first Promise chain using the promise above and
       Print out the resolved value when the first promise fulfills
    3. Have this first promise return another new Promise that will
       fulfill after 2 seconds with the message:
       "First promise chain complete!"
    4. Print out the message from the above promise after it
       fulfills ("First promise chain complete!")

    5. Create a second Promise chain using the first promise above and
       Print out the resolved value when the second promise fulfills
    6. Have this second promise return another new Promise that will
       fulfill after 10 seconds with the message:
       "Second promise chain complete!"
   7. Print out the message from the above promise after it
       fulfills ("Second promise chain complete!")
*/


const thirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res({ data: "Hello, friend!", error: null });
  }, 5000);
});

thirdPromise
  .then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("First promise chain complete!");
      }, 2000);
    });
  })
  .then((data) => {
    console.log(data);
  });
  thirdPromise
  .then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("Second promise chain complete!");
      }, 10000);
    });
  })
  .then((val) => {
    console.log(val);
  });
/*
    1. Create a Promise that resolves after 3 seconds
    2. Print out "Program complete" when the promise completes after 3 seconds
*/

const fourthPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("resolved");
  }, 3000);
});

console.log(fourthPromise);
console.log("Program in progress...");

fourthPromise.then(() => {
  console.log("Program complete");
});

/*
    1. Create a Promise that resolves with the number 10 after
       3 seconds
    2. Create another Promise that resolves with the number
       20 after 5 seconds

    How can we log out the sum (30) of these two resolved values
    once, after BOTH promises successfully fulfill?
*/

const promise1: Promise<number> = new Promise((res, rej) => {
    setTimeout(() => {
      res(10);
    }, 3000);
  });
  
  const promise2: Promise<number> = new Promise((res, rej) => {
    setTimeout(() => {
      res(20);
    }, 5000);
  });
  
  Promise.all([promise1, promise2]).then((values) => {
    console.log(values.reduce((acc, curr) => acc + curr, 0));
  });