import { 
  ScrollView,
  StyleSheet
 } from "react-native";
 import ImagemDia from "./components/ImagemDia";
 import BuscaImagens from "./components/BuscaImagens";

 export default function App(){
  return(
    <ScrollView style={styles.container}>
      <ImagemDia />
      <BuscaImagens />
    </ScrollView>
  )
 }

 const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    paddingTop: 50,
    backgroundColor: '#ffffffff'
  }
 });