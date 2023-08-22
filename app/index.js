import { StatusBar } from "expo-status-bar";
import React from "react";
import PlacesList from "../components/places/PlacesList";

const AllPlaces = () => {
  return (
    <>
      <StatusBar style="dark" />
      <PlacesList />
    </>
  );
};

export default AllPlaces;
