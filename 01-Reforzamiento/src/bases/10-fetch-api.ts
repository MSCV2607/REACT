
const API_KEY = "2fH1EBdsK81j6yb4qMCxzusrrT4efkKG"

const myRequest = fetch("https://api.giphy.com/v1/gifs/random?api_key=2fH1EBdsK81j6yb4qMCxzusrrT4efkKG&tag=&rating=g");

myRequest.then( (response) => response.json()).then( (data) => {
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl);

    const imgElemnt = document.createElement("img")
    imgElemnt.src = imageUrl;
    document.body.append(imgElemnt)
}).catch( (error) => {
    console.log(error);
});