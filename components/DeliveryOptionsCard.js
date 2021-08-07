import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
 {
  id: "Delivery-X-123",
  title: "DeliveryX",
  multiplier: 1,
  image: "https://links.papareact.com/3pn",
 },
 {
  id: "Delivery-XL-456",
  title: "Delivery XL",
  multiplier: 1.2,
  image: "https://links.papareact.com/5w8",
 },
 {
  id: "Delivery-LUX-789",
  title: "Delivery LUX",
  multiplier: 1.75,
  image: "https://links.papareact.com/7pf",
 },
];

// If we have SURGE pricing, this goes up
const SURGE_CHARGE_RATE = 1.5;

const DeliveryOptionsCard = () => {
 const navigation = useNavigation();
 const [selected, setSelected] = useState(null);
 const travelTimeInformation = useSelector(selectTravelTimeInformation);

 return (
  <SafeAreaView style={tw`bg-white flex-grow`}>
   <View>
    <TouchableOpacity
     onPress={() => navigation.navigate("DeliveryCard")}
     style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
    >
     <Icon name="chevron-left" type="fontawesome" />
    </TouchableOpacity>
    <Text style={tw`font-bold text-center py-5 text-xl`}>Select Food Delivery Options - {travelTimeInformation?.distance?.text}
    </Text>
   </View>

   <FlatList
   data={data}
   keyExtractor={(item) => item.id}
    renderItem={({ item: { id, title, multiplier, image }, item }) => (
     <TouchableOpacity
      onPress={() => setSelected(item)}
      style={tw`flex-row justify-between items-center px-10 ${
       id === selected?.id && "bg-gray-200"
      }`}
     >
      <Image
       style={{
        width: 100,
        height: 100,
        resizeMode: "contain",
       }}
       source={{ uri: image }}
      />
      <View style={tw`-ml-6`}>
       <Text style={tw`text-xl font-bold`}>{title}</Text>
       <Text>{travelTimeInformation?.duration?.text} Delivery Time</Text>
      </View>
      <Text style={tw`text-xl`}>
      {/* {new Intl.NumberFormat("en-gb", {
        style: "currency",
        currency: "GBP"
       }).format(
        (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
       )} */}$ 56.25
      </Text>
     </TouchableOpacity>
    )}
   />

   <View /*style={tw`mt-auto border-t border-gray-200`}*/>
    <TouchableOpacity
      disabled={!selected}
      style={tw`bg-black py-3 m-3 bottom-3 ${!selected && "bg-gray-300"}`}
      >
     <Text  style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
    </TouchableOpacity>
   </View>
  </SafeAreaView>
 );
};

export default DeliveryOptionsCard;

const styles = StyleSheet.create({});
