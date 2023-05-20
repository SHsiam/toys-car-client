import { useEffect, useState } from "react";
import Toystable from "./Toystable";



const AllToys = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div>
                  
            {
                products.map(product=><Toystable 
                    key={product._id}
                    product={product}
                ></Toystable>)
            }
        </div>
    );
};

export default AllToys;