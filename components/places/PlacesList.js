import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const PlacesList = ({ places }) => {
  return <FlatList data={places} keyExtractor={item => item.id} renderItem={} />;
};

export default PlacesList;

const styles = StyleSheet.create({});
