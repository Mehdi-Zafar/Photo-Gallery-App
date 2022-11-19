import Header from "./components/Header";
import Main from "./components/Main";
import { useState,useEffect } from "react";

function App() {

  const [term,setTerm] = useState('');
  const [images,setImages] = useState(null);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    console.log(term)
    if(term){
      setLoading(true)
      fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          setLoading(false)
          setImages(data)
        })
        .catch(err=>console.log(err))
    }else{
      setImages(null)
    }
    
},[term])

  return (
    <div className="App">
      <Header setTerm={setTerm} />
      <Main images={images} term={term} setTerm={setTerm} loading={loading}/>
    </div>
  );
}

export default App;
