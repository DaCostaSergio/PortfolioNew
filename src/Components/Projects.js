
import SIAs from '../Assets/GR371_DaCosta_Sergio_TPP_Affiche.png'
import SIAi from '../Assets/GR371_DaCosta_Sergio_TPP_Affiche2.png'
import SIAa from '../Assets/GR371_DaCosta_Sergio_TPP_Affiche3.png'
import Machbeth from '../Assets/Macbeth_sang.png'
import Hurricane from '../Assets/Hurricane_Sergio.png'
import Infographie1 from '../Assets/Infographie1.png'
import Infographie2 from '../Assets/Infographie2.png'
import Tombe from '../Assets/Affiche_tombe.png'
import Spider from '../Assets/affiche_spider.png'
import macbeth from '../Assets/affiche_macbeth.png'
import push1 from '../Assets/IMG_7104.JPG'
import push2 from '../Assets/IMG_7105.JPG'
import push3 from '../Assets/IMG_7106.JPG'
import push4 from '../Assets/IMG_9425.JPG'
import push5 from '../Assets/IMG_9440.JPG'
import push6 from '../Assets/IMG_7106.JPG'
import push7 from '../Assets/IMG_9432.JPG'
import push8 from '../Assets/IMG_9425.JPG'
import specimen from '../Assets/Specimen.png'
import specimen2 from '../Assets/Specimen2.png'
import mask from '../Assets/MASQUE.jpg'

export default function () {
    return (
        <div >
            <div>
                <div className='mx-2 lg:mx-20'>

                    <div>
                        <div>
                            <h1 className='font-N27 text-3xl lg:text-7xl pt-24 lg:pt-[150px]'>
                                JOURNEES SIA -  <br></br>
                                2020 AFFICHES F4
                            </h1>
                        </div>
                        <div className=' lg:flex lg:space-x-2 lg:mx-2 '>
                            <div className="px-3 py-3 lg:px-10  lg:py-[100px]  bg-[#e8e8e8] lg:w-1/3 ">
                                <img className="w-[500px] drop-shadow-2xl mx-auto my-auto" src={SIAs}></img>
                            </div>
                            <div className="px-3 py-3  lg:px-10  lg:py-[100px]  bg-[#e8e8e8] lg:w-1/3 ">
                                <img className="w-[500px] drop-shadow-2xl mx-auto my-auto" src={SIAi}></img>
                            </div>
                            <div className="px-3 py-3 lg:px-10 lg:py-[100px]  bg-[#e8e8e8] lg:w-1/3 ">
                                <img className="w-[500px] drop-shadow-2xl mx-auto my-auto" src={SIAa}></img>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h1 className='font-N27 text-3xl lg:text-7xl pt-9 lg:pt-[150px]'>
                                THEATRE CONTEMPORAIN ARSIDY - <br></br>
                                2019 AFFICHES A3
                            </h1>
                        </div>
                        <div className=' lg:flex lg:space-x-2 lg:mx-2 '>
                            <div className="px-3 py-3 lg:px-10  lg:py-[100px]  bg-[#e8e8e8] lg:w-1/3 ">
                                <img className="w-[500px] drop-shadow-2xl mx-auto my-auto" src={Spider}></img>
                            </div>
                            <div className="px-3 py-3 lg:px-10  lg:py-[100px]  bg-[#e8e8e8] lg:w-1/3">
                                <img className="w-[500px] drop-shadow-2xl mx-auto my-auto" src={macbeth}></img>
                            </div>
                            <div className="px-3 py-3 lg:px-10  lg:py-[100px]  bg-[#e8e8e8] lg:w-1/3">
                                <img className="w-[500px] drop-shadow-2xl mx-auto my-auto" src={Tombe}></img>
                            </div>
                        </div>
                    </div>

                    <div className='lg:flex lg:space-x-2'>
                        <div className="lg:w-1/2">
                            <div >
                                <h1 className='font-N27 text-3xl lg:text-7xl pt-9 lg:pt-[150px] '>
                                    HURRICANE HARVEY - <br></br>
                                    2017 AFFICHE A3
                                </h1>
                            </div>
                            <div className="flex justify-between px-10 py-[100px] mt-2 bg-[#e8e8e8]">
                                <img className="w-[500px] drop-shadow-2xl mx-auto my-auto " src={Hurricane}></img>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div>
                                <h1 className='font-N27 text-3xl lg:text-7xl pt-9 lg:pt-[150px] '>
                                    M SANG - <br></br>
                                    2019 AFFICHE A3
                                </h1>
                            </div>
                            <div className="flex justify-between px-10 py-[100px] mt-2 bg-[#e8e8e8] ">
                                <img className="w-[490px] bg-white drop-shadow-2xl mx-auto" src={Machbeth}></img>
                            </div>
                        </div>
                    </div>

                    <div >
                        <h1 className='font-N27 text-3xl lg:text-7xl pt-9 lg:pt-[150px]'>
                            INFOGRAPHIE - <br></br>
                            2019 AFFICHE F4
                        </h1>
                        <div className="lg:flex lg:space-x-2">
                            <div className='lg:w-1/2'>
                                <div className="flex justify-between px-10 py-[100px] mt-2 bg-[#e8e8e8]">
                                    <img className="w-[500px] drop-shadow-2xl mx-auto my-7" src={Infographie1}></img>
                                </div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div className="flex justify-between px-10 py-[100px] mt-2 bg-[#e8e8e8]">
                                    <img className="w-[500px] drop-shadow-2xl mx-auto my-7" src={Infographie2}></img>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='lg:w-1/2'>
                        <div >
                            <h1 className='font-N27 text-3xl lg:text-7xl pt-9 lg:pt-[150px] '>
                                SPECIMEN - <br></br>
                                2017
                            </h1>
                        </div>
                        <div className="flex justify-between px-10  bg-[#e8e8e8] pb-20">
                            <div className="mx-auto">
                                <img className=" drop-shadow-2xl" src={specimen}></img>
                                <img className=" drop-shadow-2xl mx-auto w-96  pb-14 bg-white" src={specimen2}></img>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h1 className='font-N27 text-3xl lg:text-7xl pt-9 lg:pt-[150px] '>
                                PUSH IT TO THE LIMIT - <br></br>2020
                                PHOTO
                            </h1>
                        </div>
                        <div className=' lg:flex lg:space-x-2  '>
                            <div className="   lg:w-1/2 ">
                                <img className=" drop-shadow-2xl mx-auto" src={push1}></img>
                            </div>
                          
                            <div className="   lg:w-1/2">
                                <img className=" drop-shadow-2xl mx-auto " src={push3}></img>
                            </div>
                        </div>
                        <div className=' lg:flex lg:space-x-2'>
                            <div className=' lg:w-1/2 '>
                                <img className=" lg:drop-shadow-2xl my-2" src={push5}></img>
                            </div>
                            <div className=' lg:w-1/2 '>
                                <img className=" drop-shadow-2xl my-2" src={push7}></img>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <div>
                            <h1 className='font-N27 text-3xl lg:text-7xl pt-9 lg:pt-[150px]  '>
                                MASQUE - <br></br>2019
                                PHOTO
                            </h1>
                        </div>
                        <div className=" pb-20">
                            <div className="">
                                <img className="drop-shadow-2xl" src={mask}></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}