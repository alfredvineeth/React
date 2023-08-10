import './Image.css'
import image1 from './IMG_0811.jpg'
import image2 from './IMG_0814.jpg'
import image3 from './IMG_0820.jpg'
import image4 from './IMG_0823.jpg'

function Home() {
    return (
      <div className="images" >
      <img src={image1} alt="Image 1" />
      <img src={image2} alt="Image 2" />
      <img src={image3} alt="Image 3" />
      <img src={image4} alt="Image 4" />
      </div>
    );
  }

export default Home;