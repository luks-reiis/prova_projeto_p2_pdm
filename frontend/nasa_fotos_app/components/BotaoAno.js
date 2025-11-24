import { Pressable, Text, StyleSheet } from "react-native";

export default function BotaoAno({ valor, selecionado, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.botaoAno,
        selecionado && styles.botaoAnoSelecionado
      ]}
    >
      <Text
        style={[
          styles.textoAno,
          selecionado && styles.textoAnoSelecionado
        ]}
      >
        {valor}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botaoAno: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
    marginRight: 4,
    alignItems: "center",
  },
  botaoAnoSelecionado: {
    backgroundColor: "#1eff44ff",
    borderColor: "#1eff44ff"
  },
  textoAno: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold"
  },
  textoAnoSelecionado: {
    color: "#333"
  }
});
