
import mouse from '../Assets/IMG_9425.JPG';
import video from "../Assets/myVideop.mp4"


export default function () {
  return (
    <div>
      <div>
        <div classname="">
          <h1 className='pt-24 font-N27 text-center text-3xl lg:text-7xl pt-20 lg:pt-[75px]  '>
            HELLO! I'M SERGIO DA COSTA, BASED IN SWITZERLAND
          </h1>
        </div>
        <div>
          <video width="100%" height="100%"  preload='auto' autoplay='true' muted loop="true" >
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