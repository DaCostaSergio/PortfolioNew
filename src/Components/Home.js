
import mouse from '../Assets/IMG_9425.JPG';
import video from "../Assets/myVideop.mp4"
import videoIpad from "../Assets/myVideoIPAD.mp4"
import videoIphone from "../Assets/myVideoIPHONE.mp4"


export default function () {
  return (
    <div className="md:mx-10">
      <div>
        <div classname="">
          <h1 className='pt-24 font-N27  text-center text-xl md:text-5xl lg:text-7xl pt-20 lg:pt-[75px]  z-30 '>
          HI! I'M SERGIO DA COSTA - BASED IN SWITZERLAND
          </h1>
        </div>
        <div>
          <div classname=" grid place-content-center">
            <video width="100%" height="100%" preload='auto' autoplay="true" muted="true" loop="true" playsinline="true" >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div classname="">
        <h1 className="absolute bottom-0 w-full font-N27 text-center text-xl md:text-5xl lg:text-7xl ">
          <span className='text-center'> GRAPHIC DESIGNER AND WEB DEVELOPER   </span>
        </h1>
      </div>
    </div>
  )
}