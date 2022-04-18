import { FlatList, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import OrderItem from "./OrderItem";
import { getOrders } from "../api";
import { useIsFocused } from "@react-navigation/native";
const OrderList = ({jwt}) => {
  const [orders, setOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const loadOrders = async () => {
    const data = await getOrders(jwt);

    setOrders(data);
  };

  useEffect(() => {
    setRefreshing(true);
    loadOrders();
    setRefreshing(false);
  }, [isFocused]);

  const renderItem = ({ item }) => {
    return <OrderItem order={item} jwt={jwt}/>;
  };

  const onRefresh = React.useCallback(async () => {
    await loadOrders();
  }, []);

  return (
    <FlatList
      style={{ width: "100%" }}
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={["#78e08f"]}
          onRefresh={onRefresh}
        />
      }
    />
  );
};

export default OrderList;
