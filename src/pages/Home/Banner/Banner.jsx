import { Carousel } from "react-bootstrap";
import car1 from '../../../assets/cars/car1.jpg'
import car2 from '../../../assets/cars/car2.jpg'
import car3 from '../../../assets/cars/car3.jpg'

const Banner = () => {
    return (
        <div>
                <Carousel >
      <Carousel.Item >
        <img
          className="d-block w-100 "
          src={car1}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3>Experience opulence and style with this golden luxury car!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car2}
          alt="Second slide"
        />

        <Carousel.Caption >
          <h3>Embrace timeless beauty with this stunning retro car!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>
          Make a statement with this timeless classic black car!
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;