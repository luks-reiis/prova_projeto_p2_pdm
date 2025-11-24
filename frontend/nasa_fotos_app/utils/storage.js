import AsyncStorage from "@react-native-async-storage/async-storage";

export async function salvarImagem(imagem) {
    const historico = await pegarHistorico();
    historico.push(imagem);
    await AsyncStorage.setItem('imagens_nasa', JSON.stringify(historico));
}

export async function pegarHistorico() {
    const data = await AsyncStorage.getItem('imagens_nasa');
    return data ? JSON.parse(data) : [];
}