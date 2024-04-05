import { Text, View, StyleSheet, TextInput as NativeTextInput, TouchableOpacity, ScrollView,ImageBackground, Image } from 'react-native';
import {Octicons, FontAwesome5, Entypo, AntDesign} from "@expo/vector-icons";
import { TextInput } from 'react-native-paper';
import { Dimensions } from 'react-native';

export default function torn({navigation}) {
  const hei = Dimensions.get('window').height;
  const wid = Dimensions.get('window').width;
  return (
   <ScrollView style={{}}>

   <ImageBackground
        source={require('../image/quest.jpg')}
        style={{flex:1}}
        >

       <View style={{flexDirection:'column', backgroundColor:'blue', height:0.29*wid,  borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15}}>
     <Text
        style={{ marginLeft: wid/24, fontSize: 26, fontWeight:'bold', color: 'white', marginTop: wid/24 }}>
        SOMA tri
      </Text>
      <Text
        style={{ marginLeft: wid/24, fontSize: 13, color: 'white', marginTop: wid/96 }}>
        Veja scores, desempenho e upload docs!
      </Text>
          

   
    <View style={{flexDirection:'row'}}>
     <View style={{backgroundColor:'#FFDF00',width: wid/1.25, height: wid/9, borderRadius: 20,
  marginLeft:wid/48,marginTop: wid/20,flexDirection:'row', alignItems:'center'}}>

  <FontAwesome5 name='search' size={wid/18} color='#FFffff'
  style={{marginLeft:20}}
  />

  <TextInput placeholder='Buscar'
  style={{color:'#FFDF00',marginLeft: 20, width:wid/2, height:wid/9}}
  />
  </View>
      
      <View style={{alignItems:'center', width:'12%', height:wid/9, backgroundColor:'#FFDF00', 
      borderRadius:5, marginLeft:wid/48, marginTop:hei/39}}>
        <AntDesign name='bars' size={wid/11} color='white'
        style={{marginTop:wid/96}} 
        />
      </View>
    </View>

    </View>

        
    <View style={{flexDirection:'row', margin:10}}>

    <View style={{flexDirection:'column', margin:20}}>

    <Text style={{color:'blue', fontWeight:'bold', fontSize: 30}}>E aí, Marcus?</Text>
    <Text>Aqui está sua pontuação</Text>
    <Text>do último torneio.</Text>
    </View>


  <View style={{backgroundColor:'#FB17C9', height:wid/4, width:wid/2.4, borderRadius:20, alignItems:'center'}}>
    <Text style={{fontSize:wid/8.5, fontWeight:'bold', marginTop:wid/17, color:'white'}}>97</Text>
     </View>   

    </View>

    <Image
              source={require('../image/tpmy.jpeg')}
              style={{width:wid-20, height:wid/2 - 10, marginLeft:10, marginTop:20, borderRadius:20}}
            />

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>

        <Text style={{color: 'blue', fontSize:wid/16, marginLeft:wid/48, fontWeight:'bold', marginTop:wid/22}}>Últimos torneios
        </Text>

        <AntDesign name='rightcircle' size={wid/16} color='blue'
        style={{marginRight:15, marginTop:20}}
        />

      </View>

    <View style={{flexDirection:'column'}}>

    <View style={{flexDirection:'row'}}>

    <View style={{backgroundColor:'blue', width:wid/2.15, height:wid/2 - 10, marginLeft:wid/48, marginTop:8, borderRadius:20}}>
    <Entypo name='trophy' color='#FFDF00' size={wid/10}
    style={{margin: 10}}
    />
    <Text style={{fontWeight:'bold', marginLeft:10, fontSize:wid/12, color:'white', width:wid/2}}>TPM 2023.1.1</Text>
    <Text style={{marginLeft:10, fontSize:wid/28, color:'white'}}>Score 92/100</Text>
    </View>


    <View style={{backgroundColor:'blue', width:wid/2.15, height:wid/2 - 10, marginLeft:wid/48, marginTop:8, borderRadius:20}}>
    <Entypo name='trophy' color='#FFDF00' size={wid/10}
    style={{margin: 10}}
    />
    <Text style={{fontWeight:'bold', marginLeft:10, fontSize:wid/12, color:'white', width:wid/2}}>TPM 2022.2.2</Text>
    <Text style={{marginLeft:10, fontSize:wid/28, color:'white'}}>Score 92/100</Text>
    </View>

    </View>

<View style={{flexDirection:'row'}}>

    <View style={{backgroundColor:'blue', width:wid/2.15, height:wid/2 - 10, marginLeft:wid/48, marginTop:8, borderRadius:20}}>
    <Entypo name='trophy' color='#FFDF00' size={wid/10}
    style={{margin: 10}}
    />
    <Text style={{fontWeight:'bold', marginLeft:10, fontSize:wid/12, color:'white', width:wid/2}}>TPM 2022.2.1</Text>
    <Text style={{marginLeft:10, fontSize:wid/28, color:'white'}}>Score 92/100</Text>
    </View>


     <View style={{backgroundColor:'blue', width:wid/2.15, height:wid/2 - 10, marginLeft:wid/48, marginTop:8, borderRadius:20}}>
    <Entypo name='trophy' color='#FFDF00' size={wid/10}
    style={{margin: 10}}
    />
    <Text style={{fontWeight:'bold', marginLeft:10, fontSize:wid/12, color:'white', width:wid/2}}>TPM 2022.1.2</Text>
    <Text style={{marginLeft:10, fontSize:wid/28, color:'white'}}>Score 92/100</Text>
    </View>


    </View> 
    </View>







   <View style={{height:wid/10}}></View>

    </ImageBackground>

    </ScrollView>
  );
}