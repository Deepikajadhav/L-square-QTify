  import React from "react";
import TopAlbumsSection from './Components/TopAlbumSection/TopAlbumSection';
import NewAlbumsSection from './Components/NewAlbumsSection/NewAlbumsSection';
import SongSection from './Components/songSection/songSection'; 
import Hero from './Components/Hero/Hero';
import SongsSection from './Components/songSection/songSection';
import FAQSection from './Components/FAQSection/FAQSection.js';
import AudioPlayer from './Components/AudioPlayer/AudioPlayer';


export default function Landing (){
    return(
         <>
         <Hero />
    <section>
    <TopAlbumsSection />
    <NewAlbumsSection />
    </section> 
     <SongsSection />
    <FAQSection/>
    
    </>
    )
}