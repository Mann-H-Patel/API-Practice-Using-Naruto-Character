let URL = "https://dattebayo-api.onrender.com/characters";

let div = document.getElementById("image-container");
let main = document.getElementById("main");
let image;
let h;

// function Mann() {
//     let dhruvil = fetch(URL);
//     dhruvil.then((res) => {
//         return res.json();
//     }).then((res) => {
//         if(image){
//             image.remove();
//         }
//         let img = document.createElement("img");
//         let i = Math.floor(Math.random() * 20);
//         let j = Math.floor(Math.random() * 2);
//         img.setAttribute("src", `${res.characters[i].images[0]}`);
//         console.log(res);
//         let h1 = document.createElement("h1");
//         h1.innerText = (`${res.characters[i].name}`)
//         div.append(img);
//         body.append(h1);
//         image = img;
//     })
// }


async function GetAnime() {
    let Mann = await fetch(URL);
    let love = await Mann.json();
    if (image) {
        image.remove();
        h.remove();
    }
    let img = document.createElement("img");
    let i = Math.floor(Math.random() * 20);
    img.setAttribute("src", `${love.characters[i].images[0]}`);
    let h1 = document.createElement("h1");
    h1.innerText = (`${love.characters[i].name}`)
    div.append(img);
    main.append(h1);
    image = img;
    h = h1
}