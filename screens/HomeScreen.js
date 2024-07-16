import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import MenuComponents from "../components/MenuComponents";
import { useNavigation } from "@react-navigation/native";
import { CartItems } from "../Context"; // Ensure this is the correct path to your context file

const HomeScreen = () => {
  const { cart, setCart } = useContext(CartItems);
  console.log(cart, "cartItem");
  console.log(cart?.length, "no of items in the cart"); // Fixed the typo

  const data = [
    {
      id: "0",
      image:
        "https://apis.dominoslk.com/olo-lka-prod-api/contents/home-cms/J5b2qXjmpvSicvRbbHS38qBv0v8ekXx8F3uuGBET.png?ver=0.0.1",
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyUHaJAMXYPvV6a_-_XqE0YhhDGpCPofVOQ&usqp=CAU",
    },
    {
      id: "2",
      image:
        "https://i0.wp.com/www.promotionsinuae.com/wp-content/uploads/2018/07/Buy-Any-Medium-or-Large-Pizza-Get-The-2nd-Pizza-Free-Order-Online-Only..jpg?fit=552%2C287&ssl=1",
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEcz7DVk3uBX_33FZVdPjiCvgpKsmx_9eSh7x4GrTyeMsQixOTd7SHXByKmdibQSQF94&usqp=CAU",
    },
    {
      id: "4",
      image:
        "https://apis.dominoslk.com/olo-lka-prod-api/images/Chicken_Fiesta_Top_Home_Banner__202402271709034005_202406131718258685.jpg?ver=0.0.1",
    },
    {
      id: "5",
      image:
        "https://images.dominos.co.in/srilanka/media/TomatoDipFull.jpg?ver=V0.0.2",
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, key) => (
          <View style={{ margin: 25 }} key={key}>
            <Image
              style={{ width: 220, height: 130 }}
              source={{ uri: item.image }}
            />
          </View>
        ))}
      </ScrollView>
      <MenuComponents />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
