import { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList
} from 'react-native';
import api from '../utils/api'
import { salvarImagem, pegarHistorico } from "../utils/storage";

export default function ImagemDia() {
    const [historico, setHistorico] = useState([]);
    const [carregouImagens, setCarregouImagens] = useState(false);

    const imagensTeste = [
        {
            "titulo": "The Observable Universe",
            "data_imagem": "2025-11-23",
            "url": "https://apod.nasa.gov/apod/image/2511/ObsUni_WikipediaPablo_960.jpg"
        },
        {
            "titulo": "Dione and Rhea Ring Transit",
            "data_imagem": "2025-11-22",
            "url": "https://apod.nasa.gov/apod/image/2511/SATURN2025-11-20-1130.jpg"
        },
        {
            "titulo": "3I/ATLAS: A View from Planet Earth",
            "data_imagem": "2025-11-21",
            "url": "https://apod.nasa.gov/apod/image/2511/3I_251114_1024.jpg"
        },

        {
            "titulo": "Alnitak, Alnilam, Mintaka",
            "data_imagem": "2025-11-20",
            "url": "https://apod.nasa.gov/apod/image/2511/NebularSymphonyOrionsBelt1024.jpg"
        }

    ];

    async function carregarImagens() {
        const res = await api.get('/imagem_do_dia');
        const novaImagem = res.data;

        const hist = await pegarHistorico();
        const imagemJaExiste = hist.filter(item => item.data_imagem === novaImagem.data_imagem).length > 0;

        if(!imagemJaExiste){
            await salvarImagem(novaImagem);
        }

        const historicoAtualizado = await pegarHistorico();
        setHistorico(historicoAtualizado);
    }

    if(!carregouImagens){
        setCarregouImagens(true);
        carregarImagens();
    }

    function formatarData(data) {
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Fotos do Dia</Text>
            <View style={styles.containerImagens}>
                <FlatList
                    data={historico}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <View style={styles.item}>
                            <Text style={styles.subtitulo}>
                                {formatarData(item.data_imagem)}
                            </Text>
                            <Image
                                source={{uri: item.url}}
                                style={styles.imagem}
                            />
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 40
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subtitulo: {
        fontSize: 16,
        marginVertical: 10
    },
    data: {
        fontSize: 14,
        color: '#6b6969ff'
    },
    imagem: {
        width: 250,
        height: 250,
        borderRadius: 10
    },
    containerImagens: {
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 10,
        height: 330,
    },
    item: {
        marginRight: 20,
        alignItems: 'center',
        width: 260,
    },
})