import "./EachType.css"

export function EachType( {typeImage, typeName} ){
return(
    <div className="eachType">
            <img src={typeImage} width={70} height={70}></img>
            <h2>{typeName}</h2>
    </div>
);
}

export default EachType;
