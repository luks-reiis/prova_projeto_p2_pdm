import { 
  View,
  StyleSheet
 } from "react-native";
 import ImagemDia from "./components/ImagemDia";

 export default function App(){
  return(
    <View style={styles.container}>
      <ImagemDia />
    </View>
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