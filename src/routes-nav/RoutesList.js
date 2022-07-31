import React from "react";
import {Routes, Route, Navigate, Router} from "react-router-dom";
import Homepage from "../home/Homepage";
import PoemApp from "../poems/PoemApp";
import SeedApp from "../seeds/SeedApp";

function RoutesList(){

    return (
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/poems" element={<PoemApp />} />
                <Route path="/seeds" element={<SeedApp />} />
            </Routes>

    )
}

export default RoutesList;