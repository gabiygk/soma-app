import { Text, View, StyleSheet, Button, TouchableOpacity, CheckBox,Image, ScrollView, ImageBackground } from 'react-native';
import {SimpleLineIcons, AntDesign, Ionicons, Feather} from "@expo/vector-icons";
import { Dimensions } from 'react-native';

export default function foru({navigation}) {
  const hei = Dimensions.get('window').height;
  const wid = Dimensions.get('window').width;
  return (
    <ScrollView style={{}}>

    <ImageBackground
        source={require('../image/home.jpg')}
         style={{width:wid, height:1550}}
        >

     <View style={{backgroundColor:'blue', height:wid/1.3}}>

      <View style={{flexDirection:'row', justifyContent:'space-between', margin:20, marginTop:wid/7}}>
        <AntDesign name='bars' size={35} color="white"
        style={{marginTop:4}}/>
        <Image
                source={require('../image/garoto.jpg')}
                style={{width: 40, height: 40, borderRadius: 100,borderWidth:1,borderColor:'white'}}/>
      </View>

      <View style={{flexDirection:'column', marginLeft:20, marginTop:30}}>
        <Text style={{fontWeight:'bold', fontSize:25,color:'white'}}>Quem bom te ver,</Text>
        <Text style={{fontWeight:'bold', fontSize:25,color:'white'}}>Marcus!</Text>
        <Text style={{fontSize:15,color:'white', marginTop:10}}>Nada melhor do que ajudar e ser ajudado, né?
        </Text>
      </View>

    </View>

    <View style={{flexDirection:'row', justifyContent:'space-between',
    width:wid/1.1,height:wid/4.25,backgroundColor:"#FF31E8", borderRadius:wid/20, marginLeft:wid/24,
    marginRight:wid/24, marginTop:wid/24}}>

      <Text style={{color:'white', marginTop:wid/12, marginLeft:wid/48, 
      fontWeight:'bold', fontSize:20}}>Combinatória</Text>
      <Image source={require('../image/dado.png')}
      style={{width:wid/2,height:wid/4.25, marginBottom:wid/24}}
      />

    </View>

     <View style={{flexDirection:'row', justifyContent:'space-between',
    width:wid/1.1,height:wid/4.25,backgroundColor:"blue", borderRadius:wid/20, marginLeft:wid/24,
    marginRight:wid/24, marginTop:wid/24}}>

      <Text style={{color:'white', marginTop:40, marginLeft:10, 
      fontWeight:'bold', fontSize:20}}>Geometria</Text>
      <Image source={require('../image/geomoderno.png')}
      style={{width:wid/2,height:wid/4.25, marginBottom:wid/24}}
      />

    </View>

    <View style={{flexDirection:'row', justifyContent:'space-between',
    width:wid/1.1,height:wid/4.25,backgroundColor:"#FF6E25", borderRadius:wid/20, marginLeft:wid/24,
    marginRight:wid/24, marginTop:wid/24 }}>

      <Text style={{color:'white', marginTop:40, marginLeft:10, 
      fontWeight:'bold', fontSize:20}}>Álgebra</Text>
      <Image source={require('../image/pi.png')}
      style={{width:wid/2,height:wid/4.25, marginBottom:wid/24}}
      />

    </View>

    <View style={{flexDirection:'row', justifyContent:'space-between',
     width:wid/1.1,height:wid/4.25,backgroundColor:"#F6DD00", borderRadius:wid/20, marginLeft:wid/24,
    marginRight:wid/24, marginTop:wid/24, alignItems:'center'}}>

      <Text style={{color:'white', marginTop:wid/15, marginLeft:10, 
      fontWeight:'bold', fontSize:20}}>Teoria dos Números</Text>
      <Image source={require('../image/theory.png')}
      style={{width:wid/2,height:wid/4.25}}
      />

    </View> 

    <Text style={{fontWeight:'bold', fontSize:wid/13,color:'white', marginLeft:20, marginTop:20}}>Posts em destaque (18)
    </Text>

    <View style={{backgroundColor:'white', borderRadius:10, margin:20}}> 

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View  style={{flexDirection:'row', margin:10}}>
        <Image source={require('../image/garoto1.jpg')}
                style={{width: 40, height: 40, borderRadius: 100,borderWidth:1,borderColor:'white'}} />
        <View  style={{flexDirection:'column', marginLeft:10, marginTop:5}}>
          <Text style={{fontWeight:'bold', color:'black', fontSize:15}}>Problema de Fibonacci</Text>
          <Text style={{fontWeight:'bold', color:'#342F7B', fontSize:10}}>Teoria dos Números • 1d atrás </Text>
        </View>
        </View>
        <SimpleLineIcons name='options-vertical' size={30} color="#342F7B"
        style={{marginTop:10}}
        />
      </View>

      <View  style={{margin:10}}>
        <Text style={{color:"#342F7B"}}>Encontrei este problema na seção de Teoria dos Números no tópico de "equaçòes diofantinas" e gostaria de expressar uma dúvida acerca do que cheguei...
        </Text>
      </View>

      <View style={{flexDirection:'row', margin:10, justifyContent:'space-between'}}>

        <View style={{flexDirection:'row'}}>
          <AntDesign name='like2' size={wid/20} color="#342F7B"/>
          <Text  style={{marginLeft:4, marginTop:2, color:"#342F7B", fontSize:wid/30}}>78 likes</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Ionicons name='chatbox-outline' size={wid/20} color="#342F7B"/>
          <Text  style={{marginLeft:4, marginTop:1, color:"#342F7B", fontSize:wid/30}}>21 comentários</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Feather name='eye' size={wid/20} color="#342F7B"/>
          <Text style={{marginLeft:4, marginTop:1, color:"#342F7B",fontSize:wid/30}}>298 views</Text>
        </View>

    </View>

    </View>

    <View style={{backgroundColor:'white', borderRadius:10, marginLeft:20, marginTop:5, marginRight:20}}> 

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View  style={{flexDirection:'row', margin:10}}>
        <Image source={require('../image/garota1.jpg')}
                style={{width: 40, height: 40, borderRadius: 100,borderWidth:1,borderColor:'white'}} />
        <View  style={{flexDirection:'column', marginLeft:10, marginTop:5}}>
          <Text style={{fontWeight:'bold', color:'black', fontSize:15}}>Teorema de Fermat</Text>
          <Text style={{fontWeight:'bold', color:'#342F7B', fontSize:10}}>Teoria dos Números • 1d atrás </Text>
        </View>
        </View>
        <SimpleLineIcons name='options-vertical' size={30} color="#342F7B"
        style={{marginTop:10}}
        />
      </View>

      <View  style={{margin:10}}>
      <Text style={{color:"#342F7B"}}>Quando me deparei com o contéudo, este me pareceu muito fácil olhando pela teoria. Mas, ao iniciar os exercíçios, vi que não estou com uma boa base...</Text>
      </View>

      <View style={{flexDirection:'row', margin:10, justifyContent:'space-between'}}>

        <View style={{flexDirection:'row'}}>
          <AntDesign name='like2' size={wid/20} color="#342F7B"/>
          <Text  style={{marginLeft:4, marginTop:2, color:"#342F7B", fontSize:wid/30}}>72 likes</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Ionicons name='chatbox-outline' size={wid/20} color="#342F7B"/>
          <Text  style={{marginLeft:4, marginTop:1, color:"#342F7B", fontSize:wid/30}}>34 comentários</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Feather name='eye' size={wid/20} color="#342F7B"/>
          <Text style={{marginLeft:4, marginTop:1, color:"#342F7B", fontSize:wid/30}}>293 views</Text>
        </View>

      </View>

    </View>

     <View style={{backgroundColor:'white', borderRadius:10, marginLeft:20, marginTop:25, marginRight:20}}> 

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View  style={{flexDirection:'row', margin:10}}>
        <Image source={require('../image/garota.jpg')}
                style={{width: 40, height: 40, borderRadius: 100,borderWidth:1,borderColor:'white'}} />
        <View  style={{flexDirection:'column', marginLeft:10, marginTop:5}}>
          <Text style={{fontWeight:'bold', color:'black', fontSize:15}}>Grafos</Text>
        <Text style={{fontWeight:'bold', color:'#342F7B', fontSize:10}}>Combinatória • 1d atrás </Text>
        </View>
        </View>
        <SimpleLineIcons name='options-vertical' size={30} color="#342F7B"
        style={{marginTop:10}}
        />
      </View>

    <View  style={{margin:10}}>
    <Text style={{color:"#342F7B"}}>Iniciei grafos a pouco tempo e vejo a grandde relação que este conteúdo tem em um diversos problemas que vi de programação, como por ex alguns da OBI...</Text>
    </View>

    <View style={{flexDirection:'row', margin:10, justifyContent:'space-between'}}>

      <View style={{flexDirection:'row'}}>
        <AntDesign name='like2' size={wid/20} color="#342F7B"/>
        <Text  style={{marginLeft:4, marginTop:2, color:"#342F7B", fontSize:wid/30}}>68 likes</Text>
      </View>

      <View style={{flexDirection:'row'}}>
        <Ionicons name='chatbox-outline' size={wid/20} color="#342F7B"/>
        <Text  style={{marginLeft:4, marginTop:1, color:"#342F7B", fontSize:wid/30}}>18 comentários</Text>
      </View>

      <View style={{flexDirection:'row'}}>
        <Feather name='eye' size={wid/20} color="#342F7B"/>
        <Text style={{marginLeft:4, marginTop:1, color:"#342F7B", fontSize:wid/30}}>289 views</Text>
      </View>

    </View>

    </View>

  <View style={{alignItems:'center', marginTop:wid/10}}>  
    <TouchableOpacity>
      <View style={{backgroundColor:'blue', borderRadius:12, alignItems:'center', alignContent:'center',
    height:40, width:100, marginLeft:0, shadowColor: '#98A6B3',
      shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
          shadowRadius: 15}}>
        <Text style={{fontWeight:'bold', fontSize:16, marginTop:7.5, color:'white'}}>Ver mais</Text>
      </View>
    </TouchableOpacity>
  </View>

    <View style={{height:wid/5}}></View>
   
    </ImageBackground>

    </ScrollView>

  );
}