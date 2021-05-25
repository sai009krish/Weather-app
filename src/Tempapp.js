import React,{useState , useEffect} from 'react'


  

function Tempapp() {

    const [city,setCity]=useState("null");
    const [search,setSearch]=useState("mumbai");
     
    useEffect(()=>{
      const fetchApi = async () => {
         const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metrics&appid=cab09fbd5547594acc7e73f55a3d7d0d`
         const response = await fetch(url);

         const resJson = await response.json();
          //console.log(resJson);
          setCity(resJson.main);
      }; 

       fetchApi();
    },[search] )


    return (
        <>
          <div className="box">
            <div className="input-data">
              <input
              type="search"
              value={search}
              className="inputField"
              onChange={(event) =>{ setSearch(event.target.value)}} />      
            </div>



            {!city ? (
            <p className="errorMsg">No Data Found</p>
             ) : (

             <div>
          <div className="info">
          <h2 className="location">
            <i>sym</i>{search}
          </h2>
          <h1 className="temp">
          {city.temp}
          </h1>
         <h3 className="tempmin-max"> min:{city.temp_min}°Cel | max:{city.temp_min}°Cel </h3>
        </div>

          <div className="wave-one"></div>
          <div className="wave-two"></div>
          <div className="wave-three"></div>
          </div>
          )}
              </div>
          </>
    )
}

export default Tempapp;
