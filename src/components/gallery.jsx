import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import '../app/App.css';
 

 class Gallery extends Component {
  //  state={
  //    tracks: []
  //  };

   render() { 
     const { tracks } = this.props;
     return (        
        <div className="tests">
          <Container>
          {
            tracks.map((track,key)=>{
              return (
                <div key={track.id} className="artist-track">
                  <img className="artist-tractImg" src={track.album.images[0].url} alt="track" />
                  <div className="artist-track-play">
                    <div className="artist-play-inner">&#9654;</div>
                  </div>
                  <p className="artist-track-text">{track.name}</p>
                </div>
                );              
              })
          }    
          </Container>     
        </div>
      
     );
   }
 }
  
 export default Gallery;