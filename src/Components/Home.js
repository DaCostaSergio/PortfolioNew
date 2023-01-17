
import mouse from '../Assets/IMG_9425.JPG';
import video from "../Assets/myVideop.mp4"


export default function () {
  return (
    <div>
      <div>
        <div classname="">
          <h1 className='pt-[200px] font-N27 text-center text-3xl lg:text-7xl pt-9 lg:pt-[150px] '>
            HELLO! I'M SERGIO DA COSTA
          </h1>
        </div>
        <div>
          <video width="100%" height="100%"  preload='auto' autoplay='true' loop="true">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div classname="">
          <h1 className='font-N27 text-center text-3xl lg:text-7xl '>
            GRAPHIC DESIGNER AND WEB DEVELOPER
          </h1>
        </div>
      </div>
    </div>
  )
}