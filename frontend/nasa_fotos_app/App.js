import { 
  ScrollView,
  StyleSheet
 } from "react-native";
 import ImagemDia from "./components/ImagemDia";
 import BuscaImagens from "./components/BuscaImagens";
 import Rodape from "./components/Rodape";

 export default function App(){
  return(
    <ScrollView style={styles.container}>
      <ImagemDia />
      <BuscaImagens />
      <Rodape/>
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