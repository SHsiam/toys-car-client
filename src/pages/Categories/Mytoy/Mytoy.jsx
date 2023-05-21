import { useContext, useEffect, useState } from "react";
import MyToyCard from "./MyToyCard";
import { AuthContext } from "../../provider/AuthProvider";


const Mytoy = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToy] = useState([]);

    const url = `https://toys-car-server-mdshiam4-gmailcom.vercel.app/products?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://toys-car-server-mdshiam4-gmailcom.vercel.app/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = myToys.filter(mt => mt._id !== id);
                        setMyToy(remaining);
                    }
                })
        }
    }
    return (
        <div>
            
                        {
                            myToys.map(myToy => <MyToyCard
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                                // handleBookingConfirm={handleBookingConfirm}
                            ></MyToyCard>)
                        }
        </div>
    );
};

export default Mytoy;