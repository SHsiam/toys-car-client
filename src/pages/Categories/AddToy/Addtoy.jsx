import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Addtoy = () => {
    const {user} = useContext(AuthContext);

    const handleAddToy = event =>{
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
        const addToys={
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

        console.log(addToys);

        fetch('https://toys-car-server-mdshiam4-gmailcom.vercel.app/products/', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(addToys)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Toy Car Added')
            }
        })

    }
    return (
        <div>
       
        <form onSubmit={handleAddToy} >
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
                    <input type="text" name="carname" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">SubCategory</span>
                    </label>
                    <input type="text" name="subcategory" className="input input-bordered" />
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
                    <input type="text" name="price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name="rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="number" name="quantity" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="description" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" name="photo" className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary btn-block" type="submit" value="Add toy" />
            </div>
        </form>
    </div>
    );
};

export default Addtoy;