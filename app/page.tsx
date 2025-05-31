import React from 'react'
import ReviewsMarquee from './componenst/Review/ReviewMarquee'
import BannerSection from './componenst/Home/banner'
import { Box } from '@mui/material';
import WhyUsSection from './componenst/Home/whyUs';
import MissionSection from './componenst/Home/mission';


function Home() {
    return (
        <div className=''>
            <div
                className='xl:h-[100vh] lg:h-[120vh] rounded-b-[200px] relative bg-white '>
                <div className=''>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            // height: "100vh",
                            objectFit: "cover",
                            zIndex: 0,
                        }}
                        className="h-full md:rounded-b-[200px]  "
                    >
                        <source src="https://cdn.pixabay.com/video/2019/09/20/27091-361827476_large.mp4" type="video/mp4" />
                    </video>
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0, 0, 0, 0.5)", // translucent black overlay
                            zIndex: 1,
                            borderBottomLeftRadius: 
                            {
                            md: "200px",
                            sm:'0px',

                            }
                            ,
                            borderBottomRightRadius: {
                                md: "200px",
                                sm: '0px',
                            }
                            
                        }}
                    />
                    <div>
                        <BannerSection />
                    </div>
                </div>
                <div className=''>
                    <ReviewsMarquee />
                </div>
            </div>
            <div className='w-6/7 mx-auto'>
                <WhyUsSection />
            </div>
            <div className='bg-green-400 lg:rounded-se-[200px] sm:rounded-sr-[80px] sm:rounded-es-[80px] lg:rounded-es-[200px]'>
                <MissionSection />
            </div>
        </div>
    )
}

export default Home