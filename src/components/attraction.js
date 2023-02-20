import { React } from "react";
import DayDropdown from "./dayDropdown";

function Attraction(props) {    
    
    const {setItinerary, itinerary, places, setPlaces} = props;
    const place = props.place.properties;

    return (
        <li className="text-left list-none bg-slate-200 rounded-md pt-1 pb-3 px-2">
            <div className="ml-1">
                <h2 className="text-lg font-semibold leading-6 mb-1">{place.name}</h2>
                <p className="text-sm">{place.address_line2}</p>
            </div>
            <DayDropdown place={place} places={places} setPlaces={setPlaces} itinerary={itinerary} setItinerary={setItinerary} />
        </li>        
    )
}

export default Attraction;