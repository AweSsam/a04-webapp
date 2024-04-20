async function getRandomCat() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        const catImageUrl = data[0].url;
        displayImage(catImageUrl);
    } catch (error) {
        console.log('Error fetching cat image:', error);
    }
}

async function getRandomDog() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const dogImageUrl = data.message;
        displayImage(dogImageUrl);
    } catch (error) {
        console.log('Error fetching dog image:', error);
    }
}

function displayImage(imageUrl) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<img src="${imageUrl}" alt="Random Image">`;
}
