import React from 'react';
import { StyleSheet, Text, View , Image, Button} from 'react-native';


export default function App() {
  return (
    <View>
    <View>
   <Image source={{uri:require("./assets/intro-image.png")}}
   style={styles.image}
   />
    </View>
    <Text style={{width:330, textAlign:'center', paddingLeft:70}}><h1>Discover Your Own Dream House</h1></Text>
    <Text style={{paddingLeft:30,
    paddingRight:30, textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas mi non sed ut odio. Non, justo, sed facilisiet. Eget viverra urna, vestibulum egestas faucibus egestas. Sagittis nam velit volutpat eu nunc.
    </Text>
    <View style={{flexDirection: 'row',paddingTop: 60,paddingLeft:40
  }}>
    <View  style={{padding:1, width:130, color:'black'}}>
    <Button 
    title="Sign in"
    color={'pink'}
    />
    </View>
    <View style={{padding:1, width:100}}>
    <Button 
    title="Regiter"
    style={{color: 'black'}}
     />
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 30,
    height:'450px', width:'370px',
     backgroundColor:'pink',
     margin: 10,
     
  },
});
