import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Stack from './stack'
import Sobre from "../pages/sobre";
import Contato from "../pages/contato";

import customDrawer from '../components/customDrawer'

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
     <Drawer.Navigator
     drawerContent={customDrawer}
     screenOptions={{
        headerShown: false,

        drawerStyle:{
          backgroundColor: '#121212'
        },

        drawerActiveBackgroundColor: '#3B3DBF',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#CCC',
        drawerInactiveTintColor: '#000'

     }}
     >
    <Drawer.Screen
    name="HomeStack"
    component={Stack}
    options={{
      title: 'Inicio'
    }}
    />
     <Drawer.Screen
    name="Sobre"
    component={Sobre}
    options={{
      title: 'Sobre'
    }}
    />
      <Drawer.Screen
    name="Contato"
    component={Contato}
    options={{
      title: 'Contato'
    }}
    />
     </Drawer.Navigator>
     

    )
}