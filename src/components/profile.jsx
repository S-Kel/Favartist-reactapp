import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
 import '../app/App.css';
 
 class Profile extends Component {
   constructor(props) {
     super(props);
     this.state = {  }
   }
   render() { 
     const {artist} = this.props;
     return ( 
        <Container>
          <div className="profile">
            <div className="profile-img">
              <img src={artist.avatar} alt="Profile" />
            </div>
            <div className="profile-info">
                <div className="profile-name">{artist.name} </div>
                <div className="profile-followers">{artist.followers} Followers</div>
                <div className="profile-genres">
                  {artist.genres.map((genre, k) => {
                    return(
                      <em key={k}>{genre} </em>
                    )}
                  )}
                </div>
            </div>
          </div>
        </Container>
      );
   }
 }
  
 export default Profile;