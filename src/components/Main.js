import { Dna } from "react-loader-spinner";
import MediaCard from "./MediaCard";


const Main = (props) => {

    return ( 
        <>
        {props.loading ? 
        <div className="loader">
            <Dna
            visible={true}
            height="300"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            />
        </div> :
        <div>
            {props.images ? <h2 style={{textAlign:"center"}}>Showing results for "<span style={{textTransform:"capitalize"}}>{props.term}</span>"</h2> :""}
            <div className="card-container">
                { props.images ? props.images.hits.map((image)=>{
                    return <MediaCard key={image.id} image={image}/>
                }) :
                <div className="container-unset">
                    <h1 className="images-unset">High Quality Free Pictures one click away!</h1> 
                    <br/>
                    <div>
                        <h3>Popular Searches:</h3>
                        <div className="tags">
                            <button onClick={()=>props.setTerm("City")}>City</button>
                            <button onClick={()=>props.setTerm("Sunset")}>Sunset</button>
                            <button onClick={()=>props.setTerm("Mountains")}>Mountains</button>
                            <button onClick={()=>props.setTerm("Cats")}>Cats</button>
                        </div>
                        <div className="tags">
                            <button onClick={()=>props.setTerm("Fashion")}>Fashion</button>
                            <button onClick={()=>props.setTerm("Flowers")}>Flowers</button>
                            <button onClick={()=>props.setTerm("Beach")}>Beach</button>
                            <button onClick={()=>props.setTerm("Waterfall")}>Waterfall</button>
                        </div>
                    </div>
                </div>
                }   

            </div>
        </div>}
        
        </>
     );
}
 
export default Main;