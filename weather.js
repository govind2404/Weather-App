const frm = document.querySelector("#form");
const tempt = document.querySelector("#tinc");
const head = document.querySelector("#heading");
const img =  document.querySelector("#icon");
const hum = document.querySelector("#humidity");
const cond = document.querySelector("#desc");
const windspeed = document.querySelector("#wind");
const button = document.querySelector("#butt");


frm.addEventListener('submit', async function (e)  {
    e.preventDefault();

    const data = frm.elements.querry.value;
    const wet = await axios.get(`https://api.weatherapi.com/v1/current.json?key=76e234318440469da26112821211506&q=${data}`);
    
    

    
    tempinC = wet.data.current.temp_c;
    tempinF = wet.data.current.temp_f;
    loc = wet.data.location.name;
    link = wet.data.current.condition.icon;
    description = wet.data.current.condition.text;
    humidi = wet.data.current.humidity;
    wsp = wet.data.current.wind_kph;

    set (tempinC,loc,description,humidi,wsp);
    
    
})


function set (t,l,d,h,w) {
    tempt.textContent = `${t}° C`;
    head.textContent = `Weather in ${l} `;
    hum.textContent = `HUMIDITY-${h}`;
    cond.textContent = `${d}`;
    windspeed.textContent = `WIND SPEED-${w} KM/H`;
    img.src = `https:${link}`;
}
