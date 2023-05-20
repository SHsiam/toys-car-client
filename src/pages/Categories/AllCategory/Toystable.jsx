import { Link } from "react-router-dom";


const Toystable = ({product}) => {
    const{_id,name,price,sub_category,available_quantity}=product;
    return (
        <div>
             <div className="overflow-x-auto">
  <table className="table table-compact w-full table-bordered border-primary">
  <thead>
      <tr>
        <th>Seller</th> 
        <th>Name</th> 
        <th>Sub Category</th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th>Details</th>
      </tr>
    </thead>
    <tbody >
      <tr>
        <td></td> 
        <td>{name}</td> 
        <td>{sub_category}</td> 
        <td>{price}</td> 
        <td>{available_quantity}</td> 
        <td>
            <Link to={`/singlecar/${_id}`}>
          <button className="btn btn-primary">View Details</button>
          </Link>
        </td>
      </tr>
     </tbody>
  </table>
</div>
        </div>
    );
};

export default Toystable;