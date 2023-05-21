
import car1 from '../../../assets/cars/car2.jpg'
const Viewdetails = () => {
    return (
        <div>
          <div className="row row-cols-1 row-cols-md-1 ">
  <div className="col">
    <div className="card">
      <img src={car1} className="card-img-top img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Xtreme Offroader</h5>
        <p className="card-text">Price: $250</p>
        <p className="card-text">Rating: 5</p>
        <p className="card-text">Quantity: 5</p>
        <p className="card-text">Description: Conquer muddy terrains with this powerful off-road vehicle!</p>
      </div>
      </div>
      </div>
      </div>
        </div>
    );
};

export default Viewdetails;