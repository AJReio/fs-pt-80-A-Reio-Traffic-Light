import React, { useEffect, useState } from "react";

export const TrafficLightComp = () => {
    const [LuzActual, setLuzActual] = useState("green");

    const Luz = ({ color, isActive, handleClick }) => (
        <div
            style={{
                width: "100px",
                height: "100px",
                margin: "10px auto",
                borderRadius: "50%",
                backgroundColor: isActive ? color : "grey",
            }}
            onClick={() => handleClick(color)}
        ></div>
    );

    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "20px",
                border: "2px, solid black",
                width: "150px",
                margin: "150px",
            }}
        >
            <Luz
                color="green"
                isActive={LuzActual === "green"}
                handleClick={setLuzActual}/>
            <Luz
                color="yellow"
                isActive={LuzActual === "yellow"}
                handleClick={setLuzActual}/>
            <Luz
                color="red"
                isActive={LuzActual === "red"}
                handleClick={setLuzActual}/>
        </div>
    );
};
