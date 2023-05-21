import { useLoaderData } from "react-router-dom";


const SingleCar = () => {
    const details=useLoaderData();
    const{image,customerName,price,name,sub_category,short_description,email,rating}=details
    console.log(details);
    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image}alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Seller Name: {customerName}</h2>
    <h5>Email: {email}</h5>
    <h4>Car Name: {name}</h4>
    <h5>Sub Category: {sub_category}</h5>
    <h5>Price: {price}</h5>
    <p>Short Description: {short_description}</p>
    <h6>{rating}</h6>
  </div>
</div>
        </div>
    );
};

export default SingleCar;