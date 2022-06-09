require('dotenv').config();

const server = require('./api/server');

console.log('process.env.PORT:', process.env.PORT);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});


// // this function expects to receive either a 1 or a 2
// function someProcedure(a) {
//     if(a == 1) {
//         return 5;
//     } else if(a == 2) {
//         return 10;
//     } else {
//         return new Error("a should be 1 or 2");
//     }
// }

// function someOtherProcedure(a, b) {
//     return someProcedure(a) + someProcedure(b);
// }

// try {
//     console.log('my result is:', someOtherProcedure(3, 3));
// } catch(error) {
//     console.log('I got an exception:', error.message);
// }

// callback version
// function after1Second(callback) {
//     setTimeout(callback, 1000);
// }

// after1Second(() => {
//     console.log('it worked!')
//     after1Second(() => {
//         console.log('it worked!');
//         after1Second(() => {
//             console.log('it worked!');
//             after1Second(() => console.log('it worked!'));
//         });
//     });
// });



// function after1SecondPromise(fail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(fail == true) {
//                 reject(new Error('error!'));
//             } else {
//                 resolve();
//             }
//         }, 1000);
//     });
// }

// function thing() {
//     return after1SecondPromise()
//         .then(() => console.log('it worked!'))
//         .then(() => after1SecondPromise(true))
//         .then(() => console.log('it worked!'))
//         .then(after1SecondPromise)
//         .then(() => console.log('it worked!'))
//         .then(after1SecondPromise)
//         .then(() => console.log('it worked!'))
//         .then(after1SecondPromise)
//         .then(() => console.log('it worked!'))
//         .then(() => 42)
//         .catch(err => console.log(err));
// }



// async function asyncThing() {
//     try {
//         await after1SecondPromise();
//         console.log('it worked!');
//         await after1SecondPromise(true);
//         console.log('it worked!');
//         await after1SecondPromise();
//         console.log('it worked!');
//         await after1SecondPromise();
//         console.log('it worked!');
//         return 42;
//     } catch(err) {
//         console.log(err)
//     }
// }

// // asyncThing().then(result => console.log(result));
// thing();