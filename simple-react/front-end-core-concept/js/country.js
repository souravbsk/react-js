const countryDataLoad = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json();
    showDisplayData(data); 
}
const showDisplayData = data => {
    const countryContainer = document.getElementById("country-container");
    const countryHtml = data.map(country => countryInnerHtml(country)) 
    countryContainer.innerHTML = countryHtml.join(" ");
} 

const countryInnerHtml = ({name,area,region,flags}) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>region: ${region}</p>
            <img src="${flags.png}" />
        </div>
    `
}





// normal way to destructuring 
/*
 const countryInnerHtml = country => {
    const {name,area,region,flags} = country;
    console.log(country);
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>region: ${region}</p>
            <img src="${flags.png}" />
        </div>
    `
} 
*/


// original
/* 
const countryInnerHtml = country => {
    console.log(country);
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <p>Area: ${country.area}</p>
            <p>region: ${country.region}</p>
            <img src="${country.flags.png}" />
        </div>
    `
}
*/

countryDataLoad()