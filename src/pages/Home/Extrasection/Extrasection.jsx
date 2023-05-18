import brand1 from '../../../assets/cars/brands/brand-1.jpg'
import brand2 from '../../../assets/cars/brands/brand-2.jpg'
import brand3 from '../../../assets/cars/brands/brand-3.jpg'

const Extrasection = () => {
    return (
        <div className='bg-slate-200'>
            {/* section 1 brand name */}
            <h2 className='text-center text-6xl mb-4 pt-4'>Our Brands</h2>
            <div className="card-group bg-slate-200 ">
                <div className="card">
                    <img src={brand1} className="card-img-top w-100 h-100" alt="brand-1" />

                </div>
                <div className="card">
                    <img src={brand2} className="card-img-top w-100 h-100" alt="brand-2" />

                </div>
                <div className="card">
                    <img src={brand3} className="card-img-top w-100 h-100" alt="brand-3" />
                </div>
            </div>
             {/* section 2 brand name */}
        </div>
    );
};

export default Extrasection;