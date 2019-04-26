import React from "react";

export default class FrontPage extends React.Component {
  render() {
    return (
        <div class='videoBody'>
          <video controlls autoplay loop>
            <source id='homeVideo' src='../CK_Video/My Movie.mp4' alt='CK_vid' />
          </video>
        </div>
    )
  }
}

