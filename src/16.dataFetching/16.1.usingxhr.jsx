import React from 'react'

const Usingxhr = () => {
    React.useEffect(()=>{
        // function reqListener() {
        //     // console.log(JSON.parse(this.response));
        //   }
          
        //   const req = new XMLHttpRequest();
        //   req.addEventListener("load", reqListener);
        //   req.open("GET", "https://api.themoviedb.org/3/movie/47971?api_key=c6dfdec1efa098dc255e63e6e0be1128&append_to_response=credits");
        //   req.send();
        fetch('https://api.themoviedb.org/3/movie/47971?api_key=c6dfdec1efa098dc255e63e6e0be1128&append_to_response=credits')
  .then((response) => response.json())
  .then((data) => console.log(data));
    },[])
  return (
    <div>
      <h1>Usingxhr</h1>
    </div>
  )
}

export default Usingxhr
