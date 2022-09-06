import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Cesta from './componentes/Cesta';
import Topo from '../../componentes/Topo';
import useTextos from '../../hooks/useTextos';
import  topo from "../../assets/produtores/topo.png";

export default function Produtor() {
    const route = useRoute();
    const { nome, imagem, cestas } = route.params;
    const {tituloProdutor, tituloCestas} = useTextos();

    const TopoLista = () => {
        return <>
            <Topo imagem={topo} altura={150} titulo={tituloCestas}/>
            <View style={estilos.conteudo}>
                <View style={estilos.logo}>
                    <Image source={imagem} style={estilos.produtorImage}/>
                    <Text style={estilos.produtor}>{nome}</Text>
                </View>
                <Text style={estilos.cestas}>{tituloCestas}</Text>
            </View>
        </>
    }

    return (
        <FlatList
            ListHeaderComponent={TopoLista}
            style={estilos.lista}
            data={cestas}
            renderItem={({ item }) => (
                <Cesta {...item} produtor={{ nome, imagem }} />
            )}
        />
    );
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    },
});
