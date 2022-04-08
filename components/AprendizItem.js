import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AprendizItem = ({ aprendiz, handleDelete }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={()=> navigation.navigate('MentoriaFormScreen',{id: aprendiz.id})}>
        <Text style={styles.itemTitle}>{aprendiz.aprendiz}</Text>
        <Text style={styles.itemTitle}>{aprendiz.perfil}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "#F61903", padding: 7, borderRadius: 5 }}
        onPress={() => handleDelete(aprendiz.id)}
      >
        <Text style={{ color: "#fff" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#212F3D",
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

export default AprendizItem;
