import { FlatList, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import AprendizItem from "./AprendizItem";
import { getAprendices, deleteAprendiz } from "../api";
import { useIsFocused } from "@react-navigation/native";
const AprendizList = () => {
  const [aprendices, setAprendices] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const loadAprendices = async () => {
    const data = await getAprendices();
    console.log(data);
    setAprendices(data);
  };

  useEffect(() => {
    setRefreshing(true);
    loadAprendices();
    setRefreshing(false);
  }, [isFocused]);

  const handleDelete = async (id) => {
    await deleteAprendiz(id);
    await loadAprendices();
  };
  const renderItem = ({ item }) => {
    return <AprendizItem aprendiz={item} handleDelete={handleDelete}/>;
  };

  const onRefresh = React.useCallback(async () => {
    await loadAprendices();
  }, []);

  return (
    <FlatList
      style={{ width: "100%" }}
      data={aprendices}
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

export default AprendizList;
