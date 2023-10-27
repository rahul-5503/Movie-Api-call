const fetchme=(props)=>{

    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${props.endPoint}`,{
      "method": "GET",
      "headers": {
        "X-RapidAPI-Key": "2d2203cfecmsh100d5348edf46f9p1fa3a2jsn4e0b6e0c471b",
        "X-RapidAPI-Host":"imdb8.p.rapidapi.com"
      }
    }).then(response=>{
      return response.json();
    })
    .then(data =>{
      SetContainer(data.d) 
    })
    .catch(error=>{
      console.log(error);
    });
  }
  
  export default fetchme;