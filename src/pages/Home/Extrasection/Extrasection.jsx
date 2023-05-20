import brand1 from '../../../assets/cars/brands/brand-1.jpg'
import brand2 from '../../../assets/cars/brands/brand-2.jpg'
import brand3 from '../../../assets/cars/brands/brand-3.jpg'
import partner1 from '../../../assets/cars/pratners/partner-1.png'
import partner2 from '../../../assets/cars/pratners/partner-2-removebg-preview.png'
import partner3 from '../../../assets/cars/pratners/partner-3-removebg-preview.png'
import partner4 from '../../../assets/cars/pratners/partner-4-removebg-preview.png'

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
            <div className="container text-center">
                <h2 className='text-center text-6xl mb-4 pt-4'>Our Partners</h2>
                <div className="row">
                    <div className="col">
                        <img src={partner1} alt="partner-1" />
                    </div>
                    <div className="col">
                        <img src={partner2} alt="partner-2" />
                    </div>
                    <div className="col">
                        <img src={partner3} alt="partner-3" />
                    </div>
                    <div className="col">
                        <img src={partner4} alt="partner-4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extrasection;