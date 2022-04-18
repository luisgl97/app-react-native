import React from "react";

import OrderList from "../components/OrderList";
import Layout from "../components/Layout";

//Obtener los props de navigation InicioSesionScreen

const HomeScreen = ({route}) => {
  
  //Obtener props de InicioSesionScreen
  const jwt = route.params.jwt;

  return (
    <Layout>
      <OrderList jwt={jwt}/>
    </Layout> 
  );
};

export default HomeScreen;
