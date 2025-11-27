import { View, ScrollView, StyleSheet, Text } from "react-native";
import CardDev from "./CardDev";

export default function Rodape() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo desenvolvido por:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <CardDev
          nome="Beatriz Silva"
          foto={require("../assets/perfil_bia.jpg")}
          linkedin="https://www.linkedin.com/in/beatriz-dos-santos-silva-9a7963199/"
          instagram="https://www.instagram.com/bstris"
        />

        <CardDev
          nome="Lucas Reis"
          foto={require("../assets/perfil_lucas.jpg")}
          linkedin="https://www.linkedin.com/in/lucas-reis-963b00200/"
          instagram="https://www.instagram.com/luks_reiis/"
        />

        <CardDev
          nome="Nathan Lazzaro"
          foto={null}
          linkedin="https://www.linkedin.com/in/nathan-lazzaro/"
          instagram="https://www.instagram.com"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
    alignItems: "center",
    width: "100%",
  },
  scrollContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
