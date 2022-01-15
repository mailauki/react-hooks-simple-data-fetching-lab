import React, {useEffect, useState} from "react";

function App() {
  const [image, setImage] = useState(null)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => setImage(data.message))
  }, [])

  return (
    <div style={{width: "400px", margin: "60px auto", textAlign: "center"}}>
      {image === null ? <p>Loading...</p> : <img src={image} alt="A Random Dog" style={{width: "100%"}}></img>}
    </div>
  )
}

export default App
