import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import { Link } from "expo-router";

const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places found. Maybe add some!
        </Text>
        <Link href="/AddPlace">Add Place</Link>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
  },
});
