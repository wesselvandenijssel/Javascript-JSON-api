fetch('https://ipapi.co/json/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    document.getElementById('ip').innerHTML = "Your IP: " + JSON.stringify(data["ip"]);
  });

  function check(){
    fetch('https://ipapi.co/json/')
    .then(function(response) {
      return response.json();
    })
    .then(function(ip) {
      console.log(ip);
      window.location.href = "http://ip-api.com/json/" + ip["ip"] +"?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query";
    });
  }
  function promiseFirstLoad(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise(function(promiseOK, promiseError) {
    let ip = "";
  
  // some code (try to change x to 5)
  
    if (ip == "") {
        promiseOK("OK");
    } else {
        promiseError("Error");
    }
  });
  
  myPromise.then(
    function(value) {promiseFirstLoad(value);},
    function(error) {promiseFirstLoad(error);}
  );
function showData(){
    fetch('https://ipapi.co/json/')
    .then(function(response) {
      return response.json();
    })
    .then(async function(showData) {
        console.log(await showData);
      fetch("http://ip-api.com/json/" + showData["ip"] +"?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query")
      .then(function(response) {
        return response.json();
      })
      
      .then(function(showData) {
        console.log(showData);
        document.getElementById('showData').innerHTML = "All Data Available: " + JSON.stringify(showData);
    });
  }
    )}
    