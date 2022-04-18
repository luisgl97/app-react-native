import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import { inicioSesion } from "../api";

const InicioSesionScreen = ({ navigation }) => {
  const [usuario, setUsuario] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  useEffect(() => {
    handleSubmit();
    return () => {
      setUsuario({
        identifier: "",
        password: "",
      });
    }
  }, []);


  const handleSubmit = async () => {
    try {
      
      const sesion = await inicioSesion(usuario);
      if (sesion.jwt) {
        console.log("inicio sesion");

        //Enviar props a HomeScreen y redireccionar
        navigation.navigate("HomeScreen", { jwt: sesion.jwt });
      } else {
        console.log("No se pudo iniciar sesión");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <Image source={{uri: 'https://i.pinimg.com/originals/db/3c/69/db3c6932ab7f48aa37911fa229efa7ba.jpg'}}
       style={styles.imagen} />

      <TextInput
        style={styles.input}
        placeholder="Ingrese su correo"
        placeholderTextColor="#9F9D9C"
        onChangeText={(text) => handleChange("identifier", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingresa su password"
        placeholderTextColor="#9F9D9C"
        secureTextEntry={true}
        onChangeText={(text) => handleChange("password", text)}
      />
      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ff5400",
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
  buttonUpdate: {
    padding: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#F8C471",
    marginLeft: "auto",
    marginEnd: "auto",
  },
  imagen: {
    width: "auto",
    height: 200,
    marginTop: 40,
    marginBottom: 30,
  }
});

export default InicioSesionScreen;
