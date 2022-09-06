import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtor from '../telas/Produtor/Produtor';
import Home from "../telas/produtores/Home";
import Cesta from "../telas/Cesta";

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({ComponenetePrincipal = Home}) {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'HomeScreen'} component={ComponenetePrincipal} />
            <Stack.Screen name={'Produtor'} component={Produtor} />
            <Stack.Screen name={"Cesta"} component={Cesta} />
        </Stack.Navigator>
    );
}
