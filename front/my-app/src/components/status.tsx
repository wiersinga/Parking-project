
import React, {useEffect} from "react";
import { AppService } from "../services/app.services";

export interface Place {
    id: number;
    busy: string;
};

interface ParkingPlacesProps {
    parking: Place[];
}

