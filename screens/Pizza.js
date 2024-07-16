import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import PizzaComponent from "../components/PizzaComponent";
import { Ionicons } from "@expo/vector-icons";
import pizzaMania from "../data/pizzaMania";
import { useNavigation } from "@react-navigation/native";

const Pizza = () => {
  const data = pizzaMania;
  const navigation = useNavigation();
  const {cart,setCart}=useContext(CartItem);
console.log(cart,"cart items added")
  return (
    <SafeAreaView>
     {/* <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={24}
        color="black"
      />*/}
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <PizzaComponent pizza={item} />}
      />
    </SafeAreaView>
  );
};

export default Pizza;

const styles = StyleSheet.create({});
