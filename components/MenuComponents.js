import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MenuComponents = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>Explore Menu</Text>

      <View
        style={{
          backgroundColor: "#006491",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          marginTop: 14,
          borderRadius: 10,
        }}
      >
        <Pressable onPress={() => navigation.navigate("Pizza")}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://nomoneynotime.com.au/imager/uploads/recipes/12569/shutterstock_2042520416-1_374635aacd4cafccef5bb0653ee5dedb.jpeg",
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: "white",
              marginTop: 10,
            }}
          >
            Veg Pizza
          </Text>
        </Pressable>

        <Pressable>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmM0T6oJ74T0pT8CgXIBYAQuN0TwfovXeYLw&usqp=CAU",
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: "white",
              marginTop: 10,
            }}
          >
            Desserts
          </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("PizzaMania")}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFyrJlcZllJ28WI-ijmMt7DLL_9JuyJfEug&usqp=CAU",
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: "white",
              marginTop: 10,
            }}
          >
            Pizza Mania
          </Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 20 }}>
        <Image
          style={{
            width: "100%",
            height: 150,
            borderRadius: 10,
            marginBottom: 10,
          }}
          source={{
            uri: "https://apis.dominoslk.com/olo-lka-prod-api/contents/home-cms/J5b2qXjmpvSicvRbbHS38qBv0v8ekXx8F3uuGBET.png?ver=0.0.1",
          }}
        />
        <Image
          style={{
            width: "100%",
            height: 150,
            borderRadius: 10,
            marginBottom: 10,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyUHaJAMXYPvV6a_-_XqE0YhhDGpCPofVOQ&usqp=CAU",
          }}
        />
        <Image
          style={{
            width: "100%",
            height: 150,
            borderRadius: 10,
            marginBottom: 10,
          }}
          source={{
            uri: "https://i0.wp.com/www.promotionsinuae.com/wp-content/uploads/2018/07/Buy-Any-Medium-or-Large-Pizza-Get-The-2nd-Pizza-Free-Order-Online-Only..jpg?fit=552%2C287&ssl=1",
          }}
        />
      </View>
    </ScrollView>
  );
};

export default MenuComponents;

const styles = StyleSheet.create({});
