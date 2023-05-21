import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import car1 from '../../../assets/cars/gallery/car-1.jpg'
import car2 from '../../../assets/cars/gallery/car-2.jpg'
import luxary from '../../../assets/cars/luxury.jpg'
import luxary1 from '../../../assets/cars/luxury-1.jpg'
import car3 from '../../../assets/cars/car2.jpg'
import car4 from '../../../assets/cars/car4.jpg'

const Shopcategory = () => {
    return (
        <div className='text-center'>
<Tabs>

      <Tab>Toy Cars Sub Category</Tab>

    
    <TabList>
      <Tab>Classic</Tab>
      <Tab>Luxury</Tab>
      <Tab>Sport</Tab>
      <Tab>Off-Road</Tab>
    </TabList>

    <TabPanel>
    
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={car1} className="card-img-top img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Retro Roadster</h5>
        <p className="card-text">Price: $250</p>
        <p className="card-text">Rating: 5</p>
        <button type="button" className="btn btn-primary">View Details</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={car2} className="card-img-top img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Heritage Classic</h5>
        <p className="card-text">Price: $150</p>
        <p className="card-text">Rating: 5</p>
        <button type="button" className="btn btn-primary">View Details</button>
      </div>
    </div>
  </div>
</div>

  
    </TabPanel>
    <TabPanel>
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={luxary} className="card-img-top img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Retro Roadster</h5>
        <p className="card-text">Price: $150</p>
        <p className="card-text">Rating: 5</p>
        <button type="button" className="btn btn-primary">View Details</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={luxary1} className="card-img-top img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Platinum Pearl</h5>
        <p className="card-text">Price: $250</p>
        <p className="card-text">Rating: 5</p>
        <button type="button" className="btn btn-primary">View Details</button>
      </div>
    </div>
  </div>
</div>
    </TabPanel>
    <TabPanel>
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={car3} className="card-img-top img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Midnight Fury</h5>
        <p className="card-text">Price: $350</p>
        <p className="card-text">Rating: 5</p>
        <button type="button" className="btn btn-primary">View Details</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={car4} className="card-img-top img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Sprint GT</h5>
        <p className="card-text">Price: $250</p>
        <p className="card-text">Rating: 5</p>
        <button type="button" className="btn btn-primary">View Details</button>
      </div>
    </div>
  </div>
</div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
  </div>
    );
};

export default Shopcategory;