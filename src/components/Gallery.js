import React from 'react'

export const ImageVidsGallery = (props) => {

    //const galleryContent = 

    return (
        <> 
        <div className='container'>
            <div className='row' data-masonry='{"percentPosition": true }'>
            {/* {JSON.stringify(props.imagesdata)} */}
                {
                    props.imagesdata.map((imageurl,index) => (
                        // <div key={index} className='col-3'><img src={imageurl} alt={index} className="img-fluid" /></div>
                        <div key={index} className='col-3'>
                        {
                        (imageurl.includes('.jpg')) ?
                            <img src={imageurl} alt={index} className="img-fluid" /> :
                            <iframe width="560" height="315" src={imageurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                        </div>
                        
                      ))}

                  {    props.imagesdata.map((imageurl,index) => (
                        <div key={index} className='col-3'>
                            {
                            (imageurl.includes('.jpg')) ?
                                <img src={imageurl} alt={index} className="img-fluid" /> :
                                <iframe width="560" height="315" src={imageurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                 }
                            </div>
                      ))
                }
                
            </div>
            </div>
        </>
    )
}
