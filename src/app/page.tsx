"use client"
import React from "react";
import EquipmentForm from "@/components/Equipment/pages";
import MaintenanceForm from "@/components/Maintenance/pages";

const Home: React.FC = () => {
    return (
        <>
        <h1> this is the landing page </h1>
        <EquipmentForm></EquipmentForm>
        <MaintenanceForm/>
        </>
        
    );
};

export default Home;