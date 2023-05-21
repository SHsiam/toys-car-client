import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import car1 from '../../../assets/cars/gallery/car-2.jpg'
import car2 from '../../../assets/cars/gallery/car-6.jpg'
import luxary from '../../../assets/cars/luxury.jpg'
import luxary1 from '../../../assets/cars/luxury-1.jpg'
import car3 from '../../../assets/cars/car2.jpg'
import car4 from '../../../assets/cars/car4.jpg'
import car5 from '../../../assets/cars/car3.jpg'
import car6 from '../../../assets/cars/offroad.jpg'
import { Link } from 'react-router-dom';

const Shopcategory = () => {
    return (
        <div className='text-center'>
<Tabs className='bg-slate-200'>
<TabList className='text-lg mb-4'>
      <Tab >Toy Cars</Tab>

      </TabList>
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
        <Link to='/viewdetails'>
          <button className="btn btn-primary">View Details</button>
          </Link>
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
        <Link to='/viewdetails'>
          <button className="btn btn-primary">View Details</button>
          </Link>
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
        <Link to='/viewdetails'>
          <button className="btn btn-primary">View Details</button>
          </Link>
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
        <Link to='/viewdetails'>
          <button className="btn btn-primary">View Details</button>
          </Link>
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
        <Link to='/viewdetails'>
          <button className="btn btn-primary">View Details</button>
          </Link>
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
        <Link to='/viewdetails'>
          <button className="btn btn-primary">View Details</button>
          </Link>
      </div>
    </div>
  </div>
</div>
    </TabPanel>
    <TabPanel>
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={car5} className="card-img-top img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Xtreme Offroader</h5>
        <p className="card-text">Price: $200</p>
        <p className="card-text">Rating: 5</p>
        <Link to='/viewdetails'>
          <button className="btn btn-primary">View Details</button>
          </Link>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={car6} className="card-img-top img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mountain Beast</h5>
        <p className="card-text">Price: $300</p>
        <p className="card-text">Rating: 5</p>
        <Link to='/viewdetails'>
          <button className="btn btn-primary">View Details</button>
          </Link>
      </div>
    </div>
  </div>
</div>
    </TabPanel>
  </Tabs>
  </div>
    );
};

export default Shopcategory;