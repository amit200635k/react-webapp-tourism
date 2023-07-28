import * as React from 'react';
import {useState, useEffect} from "react";
import { json, useLocation} from "react-router-dom";
import { Header } from './Header';
//import { Footersection } from './Footer';
import { Spinner } from './Loader';
//import { Gallery } from "react-grid-gallery";
import { ImageVidsGallery } from './Gallery';

export const Destinations_Single = (props) => {
        const [getShowLoader, setShowLoader] = useState(true);
        const [getData, setData] = useState();
       
        
        const location = useLocation();
        console.log(location);
        const destinationId = location.state;
        console.log(destinationId);
//////////////////////////

const [destinationText, setDestinationText] = useState();

// const images = [
//     {
//         src: "http://localhost:3000/assets/images/destination/betla/1.jpg",
//         width: 320,
//         height: 174,
//         isSelected: false,
//         caption: "After Rain (Jeshu John - designerspics.com)",
//     },
//     {
//         src: "http://localhost:3000/assets/images/destination/betla/2.jpg",
//         width: 320,
//         height: 212,
//         tags: [
//             { value: "Ocean", title: "Ocean" },
//             { value: "People", title: "People" },
//         ],
//         alt: "Boats (Jeshu John - designerspics.com)",
//     },
    
//     {
//         src: "http://localhost:3000/assets/images/destination/betla/3.jpg",
//         width: 320,
//         height: 212,
//     },
//     ]

//////////////////////////
const openGoogleMap=()=>{
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log("map button clicked");

    if (isMobile) {
        const url =
          "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";

        window.open(url);
      } else {
        window.open("https://www.google.com/maps/dir/?api=1" );
      }
    
}


        useEffect(() => {
            // setTimeout(() => {
            //     setShowLoader(false)
            // }, 3000); 
            setShowLoader(true);
            async function fetchData() {
                await fetch("data.json")
                    .then((response) => response.json())
                    .then((data) => {

                        const datas = data.filter(row => row.id === destinationId.destId.toLocaleString());
                        console.log(datas);
                        setData(datas);
                        
                        if(datas.length){

                            setDestinationText(datas.map(
                                (obj)=>{
                                    
                                    return(
                                        <div key={1}>
                                        <ul className="nav nav-tabs" id="destinationTabs" role="tablist">
                                                                <li className="nav-item" role="presentation">
                                                                    <span className="nav-link form-control active" id="Information-tab" data-bs-toggle="tab" data-bs-target="#Information"   role="tab" aria-controls="Information" aria-selected="true">Information</span>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <span className="nav-link form-control " id="Location-tab" data-bs-toggle="tab" data-bs-target="#Location"   role="tab" aria-controls="Location" aria-selected="false">Location</span>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <span className="nav-link form-control " id="Gallery-tab" data-bs-toggle="tab" data-bs-target="#Gallery"  role="tab" aria-controls="Gallery" aria-selected="false">Gallery</span>
                                                                </li>
                                                            </ul>
                                                            <div className="tab-content" id="myTabContent">
                                                                <div className="tab-pane fade show active" id="Information" role="tabpanel" aria-labelledby="Information-tab">
                                                                    <h5>Informational Tab</h5>
                                                                    <p dangerouslySetInnerHTML={{__html:obj.details.info.contentText}}></p>
                                                                </div>
                                                                <div className="tab-pane fade" id="Location" role="tabpanel" aria-labelledby="Location-tab">
                                                                <h5>Location Tab</h5>
                                                                <p dangerouslySetInnerHTML={{__html:obj.details.location.contentText}}></p>

                                                                <div className='btn btn-primary' onClick={openGoogleMap}>Open Google Map</div>
                                                                </div>
                                                                <div className="tab-pane fade" id="Gallery" role="tabpanel" aria-labelledby="Gallery-tab">
                                                                <h5>Gallery Tab</h5>
                                                              

                                                                <ImageVidsGallery imagesdata={obj.details.gallery.galleryimages} />     
                                                                {/* <p>{JSON.stringify(obj)}</p> */}
                                                                </div>
                                                            </div>
        
                                       
                                      </div>
                                    )
                                }
                            )
                            )
                             
                        }

                        setShowLoader(false);                        

                    }, []);
            }
            fetchData();

            navigator.geolocation.getCurrentPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
              });

        }, []);
    
    

    return ( 
        <>
            <Header/>
            {getShowLoader && <Spinner text="" bgColor={"#fff0"} center={true} width={"100px"} height={"100px"} /> }
            <section className='mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-12">
                            <img src="assets/images/destination/destination1.jpg" alt={destinationId.destname} className='img-fluid' />
                        </div>

                    </div>
                <h3 className='text-center'>Destination : {destinationId.destname}</h3> 
                   {destinationText} 
                </div>
            </section>
            
            {/* <Footersection/>  */}
        </>
    )
}
