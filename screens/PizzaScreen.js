import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import pizza from "../data/pizza";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PizzaComponent from "../components/PizzaComponent";

const PizzaScreen = () => {
  const data = pizza;
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {/*<Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={24}
        color="black"
      />*/}
      <FlatList numColumns={2} showsVerticalScrollIndicator={false} data={data} renderItem={({item})=>( 
        <PizzaComponent pizza={item}/>
      )}/>
    </SafeAreaView>
  );
};

export default PizzaScreen;

const styles = StyleSheet.create({});
