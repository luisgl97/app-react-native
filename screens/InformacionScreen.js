import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { getOrder } from "../api";
import Layout from "../components/Layout";

const InformacionScreen = ({ route }) => {
  const [order, setOrder] = useState({});

  const jwt = route.params.jwt;

  useEffect(() => {
    if (route.params && route.params?.id) {
      (async () => {
        const order = await getOrder(jwt, route.params.id);
        console.log(order.addressShipping);
        setOrder(order);
      })();
    }
  }, [route.params?.id]);
  return (
    <Layout>
      {order && (
        <View>
          <Text style={styles.itemTitle}>Fecha de Compra:</Text>
          <Text style={styles.itemDatos}>{order?.createdAt}</Text>

          <Text style={styles.itemTitle}>Pago Total:</Text>
          <Text style={styles.itemDatos}>{order?.totalPayment}</Text>

          <Text style={styles.itemTitle}>Nombre de comprador:</Text>
          <Text style={styles.itemDatos}>{order?.addressShipping?.name}</Text>

          <Text style={styles.itemTitle}>Provincia:</Text>
          <Text style={styles.itemDatos}>{order?.addressShipping?.state}</Text>

          <Text style={styles.itemTitle}>Ciudad:</Text>
          <Text style={styles.itemDatos}>{order?.addressShipping?.city}</Text>

          <Text style={styles.itemTitle}>Direccion:</Text>
          <Text style={styles.itemDatos}>
            {order?.addressShipping?.address}
          </Text>

          <Text style={styles.itemTitle}>Codigo Postal:</Text>
          <Text style={styles.itemDatos}>
            {order?.addressShipping?.postalCode}
          </Text>
        </View>
      )}
    </Layout>
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
    color: "#E59866",
    fontSize: 20,
  },
  itemDatos: {
    color: "#ffffff",
    fontSize: 20,
  },
});

export default InformacionScreen;
