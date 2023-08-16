import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PlacesList from "../components/places/PlacesList";

const AllPlaces = () => {
  return (
    <>
      <StatusBar style="auto" />
      <PlacesList />
    </>
  );
};

export default AllPlaces;

const styles = StyleSheet.create({});
