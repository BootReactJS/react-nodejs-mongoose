import EachType from "./EachType";  
import "./Types.css"

export function Types(){
    return (
        <section className="types">
            <EachType typeImage={"./furniture.jpg"}  typeName="furniture" />
            <EachType typeImage={"./beauty.jpg"}  typeName="beauty" />
            <EachType typeImage={"./groceries.jpg"}  typeName="groceries" />
            <EachType typeImage={"./allwordlogo.jpg"}  typeName="All" />
            <EachType typeImage={"./fragrances.jpg"}  typeName="fragrances" />
        </section>
    );
}
export default Types;
