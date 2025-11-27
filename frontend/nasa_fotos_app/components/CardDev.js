import { View, Text, Image, Pressable, StyleSheet, Linking } from "react-native";
import AntIcon from "@expo/vector-icons/AntDesign";

export default function CardDev({ nome, foto, linkedin, instagram }) {
  return (
    <View style={styles.card}>
      <View style={styles.fotoContainer}>
        {foto ? (
          <Image source={foto} style={styles.foto} />
        ) : (
          <AntIcon name="user" size={50} color="#555" />
        )}
      </View>

      <Text style={styles.nome}>{nome}</Text>

      <View style={styles.redes}>
        <Pressable onPress={() => Linking.openURL(linkedin)}>
          <AntIcon name="linkedin" size={28} color="black" />
        </Pressable>

        <Pressable onPress={() => Linking.openURL(instagram)}>
          <AntIcon name="instagram" size={28} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 210,
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 16,
  },

  fotoContainer: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  foto: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  redes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});
