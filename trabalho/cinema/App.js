import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ActivityIndicator, Button} from 'react-native';
import { useEffect, useState } from 'react';


export default function App() {

  let [filmes, setFilmes] = useState([]);
  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';
  const imgURL = 'https://api.otaviolube.com';


  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto =>
      {console.log(objeto);
      setFilmes(objeto.data);})
  }, [])

  return (
    <View style={styles.container}>
      {filmes.length > 0 ? filmes.map(filme =>
     <View style = {styles.card}> 
     <Image source={{uri:imgURL + filme.attributes.poster.data.attributes.url}} style={styles.imagem}/>
     <View style = {styles.inf}>
      <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
      <Text style={styles.subtitulo}>{filme.attributes.subtitulo}</Text>
      <Text style={styles.sinopse}>{filme.attributes.sinopse}</Text>
        <View style={styles.botao}>
          <Button title='Horarios (:' color = 'black'/>
          <Button title='Comprar (:' color = 'black'/>
        </View>
      </View>
     </View> 
      
      
      
      ):
      
      
      
      
      <View>
        <ActivityIndicator color='red' size='large'/>
        <Text>Carregando...</Text>
      </View>}
    </View>
  )
}
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  botao:{
    Width: '15%',
    flexDirection:'column',
    
  },
  
  
  card:{
    flexDirection: 'row',
    width: '100%',
    borderWidth: '5px',
    padding: '10px',
    backgroundColor:'red'
  },
  inf: {
    flexDirection: 'column',
    backgroundColor: 'red',
    maxWidth: '66%',
    height: '100%',    
  },

imagem:{
height:'100%',
width:'30%',
position:'relative',
marginRight: '10px'
},

titulo: {
  fontFamily:'DM Sans',
  fontStyle:'normal',
  fontWeight:'bold',
  fontSize: '30px',
  Width: '100%',
  alignSelf: 'center',
  color:'white',
 

},

subtitulo:{
  fontFamily:'DM Sans',
  fontStyle:'normal',
  fontWeight:'bold',
  Width: '100%',
  fontSize: '15px',
  alignSelf: 'center',
  color:'white',


},

sinopse: {
fontFamily:'DM Sans',
fontStyle:'normal',
fontWeight:'bold',
padding: '20px',
color:'white',


},

});
