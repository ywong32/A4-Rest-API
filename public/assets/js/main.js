console.log('test this');

const getButton = document.getElementById("btn");
//contant varible call getButton to get element by ID btn
const getDate = document.getElementById("date");
//contant varible call getDate to get element by ID date

// async/await
async function getData(key) {
    //set up the parameters key
  try {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
    //constant variable = base URL/ ?query = API key(JspaCPVs71XJc4fbMlKbLol3ZLfhuGrxsahtbxi6)
    const selectDate = getDate.value;
    //constant variable = get input date value
    const apiUrlWithDate = `${apiUrl}&date=${selectDate}`;
    //constant variable = combine above together

    
    const response = await fetch(apiUrlWithDate);
    //constant variable call response to await the fetch
    const infoFromServer = await response.json();
    //contant varibale call infoFromServer to await response.json
    console.log(infoFromServer);

    const content = document.querySelector("#img-info");
    //contant varible call content to get element by ID img-info
    content.innerHTML = `
    <h1 id="img-tilte">${infoFromServer.title}</h1>
    <img id="imgaes"src="${infoFromServer.url}" alt="Astronomy Picture of the Day"/>
    <p id="img-explain">${infoFromServer.explanation}</p>
    `;

  } catch (error) {
    console.warn(`Nope: ${error}`);
    // console.warn( "Nope: " + error );
  }
}

getButton.addEventListener("click", () => {
    getData("JspaCPVs71XJc4fbMlKbLol3ZLfhuGrxsahtbxi6");
    //send the key to get data to display API information
});