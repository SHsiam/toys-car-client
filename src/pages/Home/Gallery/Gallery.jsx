import car1 from '../../../assets/cars/gallery/car-1.jpg'
import car2 from '../../../assets/cars/gallery/car-2.jpg'
import car3 from '../../../assets/cars/gallery/car-3.jpg'
import car4 from '../../../assets/cars/gallery/car-4.jpg'
import car5 from '../../../assets/cars/gallery/car-5.jpg'
import car6 from '../../../assets/cars/gallery/car-6.jpg'

const Gallery = () => {
    return (
        <div className='bg-slate-200'>
            <h2 className='text-center text-6xl mb-4 pt-4'>Gallery</h2>
            <div className="card-group bg-slate-200 ">
                <div className="card">
                    <img src={car1} className="card-img-top w-100 h-100" alt="car-1" />

                </div>
                <div className="card">
                    <img src={car2} className="card-img-top w-100 h-100" alt="car-2" />

                </div>
                <div className="card">
                    <img src={car3} className="card-img-top w-100 h-100" alt="car-3" />
                </div>
                <div className="card-group">
                    <div className="card">
                        <img src={car4} className="card-img-top w-100 h-100" alt="car-4" />

                    </div>
                    <div className="card">
                        <img src={car5} className="card-img-top w-100 h-100" alt="car-5" />

                    </div>
                    <div className="card">
                        <img src={car6} className="card-img-top w-100 h-100" alt="car-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;