const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
//const url1=`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=`
const API_KEY='e649230828c514414656639851639a74'
// process.on("unCaughtException",(err)=>{
//     console.log(err)
// })
async function fetchWeather(){
  
    try{
    const city=document.querySelector('input').value
    const weatherData=await fetch(url+city+`&appid=${API_KEY}`+`&cnt=3`)
    const data=await weatherData.json()
    console.log(data)
    const img=document.querySelector('.weather')

    const City=document.querySelector('.city')
    // const today=document.querySelector('.today')
    const temp=document.querySelector('.degrees')
    const description=document.querySelector('.description')
  
    City.textContent=`${data.name}`
    temp.textContent=`Temperature:${data.main.temp} C` 
    description.textContent=`${data.weather[0].description} `
    if(data.weather[0].main==='Clouds'){
        img.src="./images/clouds.png "
    }else if(weather[0].main=='Clear'){
       img.src='./images/clear.png'
      
    }
    else if(weather[0].main=='Drizzle'){
        img.src='./images/drizzle.png'
        
    }
    else if(weather[0].main=='Mist'){
        img.src='./images/mist.png'
       
    }
    else if(weather[0].main=='light rain'|| weather[0].main=='Rain'){
        img.src='./images/rain.png'
    }
    else if(weather[0].main=='Snow'){
       img.src='./images/snow.png'
       
    }
    else if(weather[0].main=='Wind'){
        img.src='./images/wind.png'
       

    }
    else{
        img.src="./images/clouds.png"
    }



    }catch(err){
        console.log("an error occured while fetching data",err);
    }
    
}

const btn=document.querySelector('.btn')
btn.onclick=function(){
    fetchWeather()
}