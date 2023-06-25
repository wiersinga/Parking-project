import React from "react";

interface Place {
    id: number;
    busy: number;
};
interface ParkingPlacesProps {
    parking: Place[];
}
const GetStatus: React.FC<ParkingPlacesProps> = ({parking}) => {
    return  <div className="status border border-5 mb-2">
    <h2>Statuts of Parking's places</h2>
    <ul>
       {parking.map((parkingPlace)=> (
        <li key={parkingPlace.id}>{parkingPlace.busy}</li>)
       )}
    </ul>
    </div>
};
export default GetStatus;

