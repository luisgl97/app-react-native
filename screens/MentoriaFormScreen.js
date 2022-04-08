import { Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { saveAprendiz, getAprendiz, updateAprendiz } from "../api";

const MentoriaFormScreen = ({ navigation, route }) => {
  const [aprendiz, setAprendiz] = useState({
    aprendiz: "",
    perfil: "",
  });

  const [editing, setEditing] = useState(false);
  console.log(route.params);

  const handleChange = (name, value) => {
    setAprendiz({
      ...aprendiz,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (!editing) {
        await saveAprendiz(aprendiz);
      } else {
        await updateAprendiz(route.params.id, aprendiz);
      }
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (route.params && route.params?.id) {
      navigation.setOptions({
        headerTitle: "Modificar Aprendiz",
      });
      setEditing(true);
      (async () => {
        const aprendiz = await getAprendiz(route.params.id);
        setAprendiz({
          aprendiz: aprendiz.aprendiz,
          perfil: aprendiz.perfil,
        });
        console.log(aprendiz);
      })();
    }
  }, [route.params?.id]);

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Ingresa los datos del aprendiz"
        placeholderTextColor="#9F9D9C"
        onChangeText={(text) => handleChange("aprendiz", text)}
        value={aprendiz.aprendiz}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingresa su perfil"
        placeholderTextColor="#9F9D9C"
        onChangeText={(text) => handleChange("perfil", text)}
        value={aprendiz.perfil}
      />
      {!editing ? (
        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Registrar Aprendiz</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Modificar Aprendiz</Text>
        </TouchableOpacity>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#FF5733",
    padding: 10,
    marginBottom: 10,
    width: "100%",
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
    borderRadius: 5,
  },
  buttonSave: {
    backgroundColor: "#FF5733",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    marginLeft: "auto",
    marginEnd: "auto",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 14,
  },
  buttonUpdate:{
    padding: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: '#F8C471',
    marginLeft: "auto",
    marginEnd: "auto",
  }
});

export default MentoriaFormScreen;
