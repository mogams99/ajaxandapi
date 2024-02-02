// ! structure data of json
// const data = `{
//     "success": true,
//     "terms": "https://coinlayer.com/terms",
//     "privacy": "https://coinlayer.com/privacy",
//     "timestamp": 1529571067,
//     "target": "USD",
//     "rates": {
//         "611": 0.389165,
//         "ABC": 59.99,
//         "ACP": 0.014931,
//         "ACT": 0.15927,
//         "ACT*": 0.14371,
//         "ADA": 0.160502,
//         "ADCN": 0.001406,
//         "ADL": 121.5,
//         "ADX": 0.427854,
//         "ADZ": 0.02908,
//         "AE": 2.551479,
//         "AGI": 0.12555,
//         "AIB": 0.005626,
//         "AIDOC": 0.02605
//     }
// }`;

// ! simple concept of xml http request
// const req = new XMLHttpRequest();
// let data;
// req.onload = function () {
//     data = JSON.parse(this.response)
//     console.log(data);
// };
// req.onerror = function () {
//     console.error('message: ', this);
// };
// req.open('GET', 'https://swapi.dev/api/people/18');
// req.send();

// ! simple concept of fetch
// fetch('https://swapi.dev/api/people/18')
//     .then((res) => {
//         if (!res.ok) {
//             throw Error('Could not fetch the data for that resource');
//         }
//         console.log(res);
//         return res.json();
//     }).then((data) => {
//         console.log('json: ', data);
//     }).catch((err) => {
//         console.error('error: ', err);
//     });
// ! merge concept of async await and fetch
// const loadPeople = async () => {
//     try {
//         const res = await fetch('https://swapi.dev/api/people/1');
//         const data = await res.json();
//         console.warn('data: ', data);
//     } catch (error) {
//         console.error('message: ', error);
//     }
// }
// loadPeople();

// ! simple concept of axios library
// axios.get('https://swapi.dev/api/people/1').then((res) => {
//     console.warn(res.data);
// }).catch((err) => {
//     console.error(err.message);
// });
// ! simple implementation of axios logic
// const getPeople = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//         console.log(res.data);
//     } catch (error) {
//         console.error(error);
//         console.error(error.message);
//         console.error(error.response.status);
//         console.error(error.response.data);
//     }
// }

// ! implementation api getter icanhazdadjoke
// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');
// const addJoke = async () => {
//     const jokeText = await getJokes();
//     const newLI = document.createElement('LI');
//     newLI.append(jokeText);
//     jokes.append(newLI);
// }
// const getJokes = async () => {
//     try {
//         const config = {
//             headers: {
//                 Accept: 'application/json',
//             }
//         };
//         const res = await axios.get('https://icanhazdadjoke.com/', config);
//         return res.data.joke;
//     } catch (error) {
//         return "No Jokes Available!";
//     }
// }
// button.addEventListener('click', addJoke);

// ! implemetation case getter api tvmaze
// const form = document.querySelector('#search-form');
// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     document.querySelectorAll('img').forEach((img) => img.remove());
//     const keyword = form.elements.query.value;
//     const config = {
//         params: { q: keyword },
//     };
//     const res = await axios.get('https://api.tvmaze.com/search/shows', config);
//     getImages(res.data);
//     form.elements.query.value = '';
// });
// const getImages = (shows) => {
//     for(let result of shows) {
//         if (result.show.image) {
//             const img = document.createElement('img');
//             img.src = result.show.image.medium;
//             document.body.append(img);
//         }
//     }
// }