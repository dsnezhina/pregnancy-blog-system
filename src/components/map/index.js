import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './locationPin';
import styles from './index.module.css';

const Map = ({ location, zoomLevel }) => {
    return (
        <div className={styles.map}>
            {/* <h2 className={styles["map-h2"]}> Or come <b>visit us</b></h2> */}

            <div className={styles["google-map"]}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyA8ZpvPBRdH5iHhL19k68rqEAm8Eq_fvtM' }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                    />
                </GoogleMapReact>
            </div>
        </div>);
};


export default Map;