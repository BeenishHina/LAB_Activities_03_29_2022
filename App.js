import React from 'react';
import { StyleSheet,
   Text,
    View,
    Image,
  textarea,
 Button,
} from 'react-native';
import { ImageBackground, TouchableOpacity } from 'react-native-web';


const App = ()=>{
  
  return (
    <View style={{}} >
      <View>
        <Text style={{paddingLeft:40, paddingRight:40, textAlign:'center'}}>
           <h1>Welcome Back</h1> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas mi non sed ut odio. Non, justo, send faci;isi et.
        </Text>
    </View>
    <View style={{paddingLeft:40, paddingRight:40, paddingTop: 30}}>
      <textarea style={{borderRadius:10, backgroundColor: '#eaece4', paddingTop: 5}}placeholder='Username, Email&Phone Number'></textarea>
      <textarea style={{borderRadius:10, backgroundColor: '#eaece4', paddingTop: 5, marginTop: 7}}placeholder='Password' ></textarea>
   <Text style={{marginTop:7, textAlign: "right", marginBottom:18}}>Forget Password?</Text>
    <Button 
    color="pink" 
    title="Sign in" 
    
    onPress={()=>alert("Sign_in successfully")}/>
    </View>
  
   
    <View style={{flexDirection: 'row', padding:20}}>
      <View style={{backgroundColor: '#ffbaff', height: 1, flex: 1, alignSelf: 'center'}} />
      <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 16 }}>Or Sign up With</Text>
      <View style={{backgroundColor: 'pink', height: 0.5, flex: 1, alignSelf: 'center'}} />
    </View>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
      <TouchableOpacity style={{margin:'10px'}}>
        <Image source={{uri:require("./assets/Google logo.png")}} style={{height:'40px',width:'40px'}}/>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:'10px'}}>
        <Image source={{uri:require("./assets/Facbook.png")}} style={{height:'40px',width:'40px'}}/>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:'10px'}}>
        <Image source={{uri:require("./assets/Group.png")}} style={{height:'40px',width:'40px'}}/>
      </TouchableOpacity>
    </View>


    </View>
  ); 
};
export default App;
