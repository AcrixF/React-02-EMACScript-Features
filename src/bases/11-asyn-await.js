
const getImage = async() => {

    try { 
        const apiKey = "K18TQHOfMMrCINMhsYf6BKbgeq99KP0z";
        const req = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await req.json();

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch( err ) {
        console.log(err);
    }

};

getImage();