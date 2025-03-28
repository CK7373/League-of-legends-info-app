fetch ("https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json")
.then(function(response){
    return response.json()

})
.then(function(data){
    displayImages(data)
    console.log(data)
}
)


   function displayImages(data) {
    const imgContainer = document.getElementById("character-images"); 
    imgContainer.innerHTML = ''; 

    for (const championData in data.data) {
        const champion = data.data[championData]; 

        const img = document.createElement('img');
        img.src = `https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`; 
        img.alt = champion.name; 
        imgContainer.appendChild(img)

        img.addEventListener('click', () => handleClick(champion));
        
    }
}

function handleClick(champion) {
    

    const stats = `
        <h2>${champion.name}</h2>
        <p><strong>Title:</strong> ${champion.title}</p>
        <p><strong>Attack:</strong> ${champion.info.attack}</p>
        <p><strong>Difficulty:</strong> ${champion.info.difficulty}</p>
        <p><strong>Tags:</strong> ${champion.tags.join(', ')}</p> <!-- Join tags into a single string -->
        <p><strong>Partype:</strong> ${champion.partype}</p>
        <p><strong>Blurb:</strong> ${champion.blurb}</p>
    `;

 document.getElementById("character-stats").innerHTML = stats

const largeImage = document.getElementById("large-image");
largeImage.src = `https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`;
largeImage.alt = champion.name;
largeImage.style.display = "block"


}
console.log("Hello!")   
