import React from "react";
import Currency from "./currency";
import Weather from "./weather";


function Subsection({ destinationData }) {
    return (
        <div className="container grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-12">
            <Currency destinationData={destinationData}/>
            <Weather destinationData={destinationData}/>
        </div>
    )
}

export default Subsection;