

const MyToyCard = ({myToy,handleDelete}) => {
    const {_id,image,customerName,price,name,sub_category,short_description,email,rating}=myToy;


    return (
        // <div>
        //     {/* <h2>{name}</h2> */}
        // </div>
        
        <div>
            <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Customer Name</th>
                            <th>Car Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Email</th>
                            <th>Rating</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
              <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
               {customerName}
            </td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{short_description}</td>
            <td>{email}</td>
            <td>{rating}</td>
            <th>
                
                        <button className="btn btn-primary">Update</button>
            </th>
        </tr> 
        </tbody>
        </table>
        </div>
    );
};

export default MyToyCard;