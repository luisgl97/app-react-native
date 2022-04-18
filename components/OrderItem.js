import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OrderItem = ({order, jwt }) => {
  
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("InformacionScreen", {
      jwt,
      id: order.id,

    });
  }


  return (
    <View style={styles.itemContainer}>
      
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.itemTitle}>{order.createdAt}</Text>
        <Text style={styles.itemTitle}>{order.addressShipping.name}</Text>
        <Text style={styles.itemTitle}>{order.totalPayment}</Text>
        <Text style={styles.itemTitle}>{order.addressShipping.city}</Text>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#363636",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    color: "#ffffff",
  },
});

export default OrderItem;
