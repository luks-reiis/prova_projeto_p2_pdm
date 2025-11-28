import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import api from "../utils/api";
import BotaoAno from "../components/BotaoAno";

export default function BuscaImagens() {
  const anoAtual = new Date().getFullYear();
  const anoAtualString = anoAtual.toString();
  const anosSemAtual = [];

  for(let i = anoAtual - 4;  i < anoAtual; i++){
    anosSemAtual.push(i);
  }
  const [termo, setTermo] = useState("");
  const [ano, setAno] = useState(anoAtualString);
  const [resultados, setResultados] = useState([]);

  async function buscar() {
    const res = await api.get("/busca", {
        params: {
            termo, 
            ano
        }
      });

      setResultados(res.data.images);
  }

  function alternarAno(valor) {
    const anoStr = valor.toString();
    setAno(anoStr);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Busca de Imagens</Text>

      <TextInput
        placeholder="Digite um termo (ex: moon)"
        value={termo}
        onChangeText={setTermo}
        style={styles.input}
      />

      <View style={styles.linhaAnos}>
        {anosSemAtual.map((anoBtn) => (
          <BotaoAno
            key={anoBtn}
            valor={anoBtn}
            selecionado={ano === anoBtn.toString()}
            onPress={() => alternarAno(anoBtn)}
          />
        ))}
      </View>

      <View style={styles.linhaAnoAtual}>
        <BotaoAno
          valor={anoAtual}
          selecionado={ano === anoAtualString}
          onPress={() => alternarAno(anoAtual)}
        />
      </View>

      <Pressable style={styles.botaoBuscar} onPress={buscar}>
        <Text style={styles.textoBotao}>Buscar</Text>
      </Pressable>

      {resultados.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>

          <Image source={{ uri: item.url }} style={styles.imagem} />

          <Text style={styles.descricao}>{item.descricao}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15
  },

  input: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  },

  linhaAnos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },

  linhaAnoAtual: {
    width: "100%",
    marginBottom: 20
  },

  botaoBuscar: {
    backgroundColor: "#1e90ff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20
  },

  textoBotao: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },

  carregando: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20
  },

  card: {
    marginBottom: 25,
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd"
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },

  imagem: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10
  },

  descricao: {
    fontSize: 15,
    color: "#444"
  }
});
