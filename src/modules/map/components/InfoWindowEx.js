import React, { Component } from 'react';
import { InfoWindow } from 'google-maps-react';
import ReactDOM from 'react-dom';

const InfoWindowEx = (props) => {

  useEffect(() => {
    if (props.children !== prevProps.children) {
      ReactDOM.render(
        React.Children.only(props.children),
        contentElement
      );
      infoWindowRef.current.infowindow.setContent(this.contentElement);
    }
  }, [input])

  return ( <InfoWindow ref={this.infoWindowRef} {...this.props} /> );
}
 
export default InfoWindowEx;