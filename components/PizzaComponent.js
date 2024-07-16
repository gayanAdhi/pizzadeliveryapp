import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext } from "react";
import ModalDropdown from "react-native-modal-dropdown";
import RNPickerSelect from "react-native-picker-select";
import { CartItems } from "../Context";

const PizzaComponent = ({ pizza }) => {
  const data = [pizza];
  const options = [
    { label: "Regular", value: "regular" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
  ];
  const { cart, setCart } = useContext(CartItems);
  //console.log(cart, "cartItem");
 // console.log(cart.length, "no of items in the cart");

  return (
    <View>
      {data.map((item, index) => (
        <Pressable
          key={index}
          style={{ borderEndColor: "#AFD8F5", borderWidth: 0.1 }}
        >
          <Image
            style={{ height: 200, aspectRatio: 1 / 1, resizeMode: "cover" }}
            source={{ uri: item.image }}
          />
          <View style={{ backgroundColor: "#006491", padding: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              {item.name.substr(0, 15) + "..."}
            </Text>
            <Text style={{ color: "pink", marginTop: 4 }}>
              {item.description.substr(0, 25) + "..."}
            </Text>

            <View style={{ marginTop: 10 }}>
              <Text style={{ color: "white", fontSize: 15 }}>Size</Text>
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={options}
                style={{
                  inputIOS: { color: "white" },
                  inputAndroid: { color: "white" },
                }}
              />
            </View>

            <Pressable
              onPress={() => setCart([...cart, item])}
              style={{
                backgroundColor: "#03C03C",
                padding: 5,
                marginLeft: 15,
                borderRadius: 4,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Add To Cart
              </Text>
            </Pressable>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default PizzaComponent;

const styles = StyleSheet.create({});
