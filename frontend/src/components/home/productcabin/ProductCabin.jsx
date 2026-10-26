import Product  from "../product/Product"
import "./ProductCabin.css"

import { useSelector } from "react-redux"

export function ProductCabin() {
   const data =  useSelector(
        (store) => {
            return store;
        }
    );

    return(
        <div className="ProductCabin">
            <h3>Productrow</h3>
            <h4>{data}</h4>
            <section className="Productrow">
                <Product parameter={"./headsets.jpg"} />
                <Product parameter={"./tablet.jpg"} />
                <Product parameter={"./VRhset.jpg"} />
                <Product parameter={"./neoncables.jpg"} />
            </section>
        </div>
    );
}
export default ProductCabin;