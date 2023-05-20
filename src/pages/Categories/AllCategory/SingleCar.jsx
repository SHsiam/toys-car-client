import { useLoaderData } from "react-router-dom";


const SingleCar = () => {
    const details=useLoaderData();
    const{image,name,price,toy_car_name,sub_category,short_description}=details
    console.log(details);
    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image}alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Car Name: {toy_car_name}</h2>
    <h4>Name: {name}</h4>
    <h5>Sub Category: {sub_category}</h5>
    <h5>Price: {price}</h5>
    <p>Short Description: {short_description}</p>
    <h6>Rating: 5.00</h6>
  </div>
</div>
        </div>
    );
};

export default SingleCar;