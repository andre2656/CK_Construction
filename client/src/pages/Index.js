import React from "react";

export default class FrontPage extends React.Component {
  render() {
    return (
        <div className='videoBody'>
          <video controlls= 'false' autoPlay= 'true' loop= {true}>
            <source id='homeVideo' src='../CK_Video/My_Movie.mp4' alt='CK_vid' />
          </video>
        </div>
    )
  }
}

