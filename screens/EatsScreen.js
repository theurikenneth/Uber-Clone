import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import Eats from "../components/Eats";
import DeliveryCard from "../components/DeliveryCard";
import NavigateCard from "../components/NavigateCard";
import DeliveryOptionsCard from "../components/DeliveryOptionsCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";

const EatsScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

 return (
  <View>
    <TouchableOpacity
      onPress={() => navigation.navigate("HomeScreen")}
      style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
      <Icon name="menu" />
    </TouchableOpacity>

    <View style={tw`h-1/2`}>
     <Eats />
   </View>

   <View style={tw`h-1/2`}>
    <Stack.Navigator>
       <Stack.Screen
        name="DeliveryCard"
        component={DeliveryCard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NavigateCard"
        component={NavigateCard}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="DeliveryOptionsCard"
        component={DeliveryOptionsCard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RideOptionsCard"
        component={RideOptionsCard}
        options={{
          headerShown: false,
        }}
      />
     </Stack.Navigator>
   </View>
  </View>
 );
};

export default EatsScreen;

const styles = StyleSheet.create({});
