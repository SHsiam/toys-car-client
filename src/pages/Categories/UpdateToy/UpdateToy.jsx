import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";


const UpdateToy = () => {
   const updateToys=useLoaderData();
   const{_id,image,price,name,sub_category,short_description,rating, available_quantity}=updateToys;
  
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/mytoys';

    const handleUpdateToy=event=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const carName = form.carname.value;
        const subcategory = form.subcategory.value;
        const email = user?.email;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const updateToys={
            customerName:name,
            name:carName,
            sub_category:subcategory,
            email:email,
            price:price,
            rating,
            available_quantity:quantity,
            short_description:description,
            image:photo,  
        }
        console.log(updateToys);

        fetch(`https://toys-car-server-mdshiam4-gmailcom.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Update Car Success')
                    navigate(from, { replace: true })
                }
            })
    }
   
    return (
        <div>
       
        <form onSubmit={handleUpdateToy}  >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Car Name</span>
                    </label>
                    <input type="text" defaultValue={name} name="carname" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">SubCategory</span>
                    </label>
                    <input type="text" defaultValue={sub_category} name="subcategory" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" defaultValue={price} name="price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" defaultValue={rating} name="rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="number" defaultValue={available_quantity} name="quantity" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" defaultValue={short_description} name="description" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" defaultValue={image} name="photo" className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary btn-block" type="submit" value="Update" />
            </div>
        </form>
    </div>
    );
};

export default UpdateToy;