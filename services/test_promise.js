// write a function to retrieve blob of json
// make an ajax req. Use fetch function. http://rallycoding.herokuapp.com/api/music_albums

// function fetch_albums(){
//     fetch('https://rallycoding.herokuapp.com/api/music_albums').then(res=> res.json()).then(json=>console.log(json));
// }
// fetch_albums();

// fetch returns a Promise
// fetch resolves its promise representing a request. u canget real json by calling .json() on it
// after getting json console.log it

// async bcoz this func has asynchronour req
// async function fetch_albums(){
//    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
//    const json = await res.json();
//    console.log(json);
// }
// fetch_albums();

const fetch_albums = async ()=>{
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();
    console.log(json);
 }
 fetch_albums();

