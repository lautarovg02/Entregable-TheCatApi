"use strict"
const urlApi = `https://api.thecatapi.com/v1/images/search?&has_breeds=true&limit=20&api_key=live_zWKniOD9ULy8xg60jOaRtfI4N9nPwWWuR9o4WcoeIqFkPh0JfWIzh0MGp7uEsPDj`;

document.addEventListener("DOMContentLoaded", async () => {
    const sectionCat = document.getElementById("section-cat")
    let cats = await getRandomCatImage();
    if(cats) showCats(cats);

    async function getRandomCatImage(){
        try {
            const response = await fetch(urlApi);
            
            if (response.ok) { 
                const json = await response.json();
                return json; 
            } else {
                console.error(`Error: ${response.status} - ${response.statusText}`);
            }
        } catch (e) {
            console.error("Error al obtener los datos: ", e);
        }
    }
    function showCats($cats) {
        const sectionCat = document.getElementById("section-cat");
        sectionCat.innerHTML = "";
        console.log("Entro a showCats");

        if ($cats.length > 0) {
            console.log("Entro al if");

            $cats.forEach(cat => {
                console.log(cat);

                let divCard = document.createElement("div");
                divCard.className = "card m-4";
                divCard.style.width = "18rem";

                let elemImg = document.createElement("img");
                elemImg.src = cat.url;
                elemImg.className = "card-img-top";
                elemImg.alt = cat.breeds[0]?.name || "Cat";

                let divBodyCard = document.createElement("div");
                divBodyCard.className = "card-body";

                let elemH5 = document.createElement("h5");
                elemH5.className = "card-title";
                elemH5.textContent = cat.breeds[0]?.name || "Unknown Breed";

                let elemP = document.createElement("p");
                elemP.className = "card-text";
                elemP.textContent = cat.breeds[0]?.description || "No description available.";

                let elemTemperament = document.createElement("p");
                elemTemperament.className = "card-text";
                elemTemperament.innerHTML = `<strong>Temperament:</strong> ${cat.breeds[0]?.temperament || "Unknown"}`;

                let elemA = document.createElement("a");
                elemA.className = "btn btn-outline-primary";
                elemA.innerHTML = `More About ${cat.breeds[0]?.name || "Breed"}`;
                elemA.href = cat.breeds[0]?.vcahospitals_url || "#";

                divCard.appendChild(elemImg);
                divCard.appendChild(divBodyCard);
                divBodyCard.appendChild(elemH5);
                divBodyCard.appendChild(elemP);
                divBodyCard.appendChild(elemTemperament);
                divBodyCard.appendChild(elemA);

                sectionCat.appendChild(divCard);
            });
        }
    }
});
