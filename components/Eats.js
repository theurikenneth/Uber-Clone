import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useRef } from "react";

const Eats = () => {
 const origin = useSelector(selectOrigin);
 const destination = useSelector(selectDestination);
 const mapRef = useRef(null);

 useEffect(() => {
  if (!origin || !destination) return;

  // Zoom & fit to markers
  mapRef.current.fitToSuppliedMarkers(["origin", "destination"],  {
   edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
  });
 }, [origin, destination]);

 return (
  <MapView
   ref={mapRef}
   style={tw`flex-1`}
   mapType="mutedStandard"
   initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
   }}
   >
    {origin && destination && (
    <MapViewDirections
     origin={origin.description}
     destination={destination.description}
     apikey={GOOGLE_MAPS_APIKEY}
     strokeWidth={3}
     strokeColor="black"
    />
    )}

   {origin?.location && (
    <Marker
     coordinate={{
      latitude: 37.78825,
      longitude: -122.4324,
     }}
     title="Origin"
     description={origin.description}
     identifier="origin"
    />
   )}

{destination?.location && (
    <Marker
     coordinate={{
      latitude: destination.location.lat,
      longitude: destination.location.lng,
     }}
     title="Destination"
     description={destination.description}
     identifier="destination"
    />
   )}
  </MapView>
 );
};

export default Eats;

const styles = StyleSheet.create({});
