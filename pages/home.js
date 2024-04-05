import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  Image
} from 'react-native';
import {FontAwesome5, MaterialIcons} from "@expo/vector-icons";
import { Dimensions } from 'react-native';


export default function home({ navigation }) {
  const hei = Dimensions.get('window').height;
  const wid = Dimensions.get('window').width;
  return (
    <ScrollView style={{backgroundColor:'white'}}>

    <ImageBackground
        source={require('../image/home.jpg')}
        style={{width:wid, height:3.6*wid}}
        >

    <View style={{backgroundColor:'blue', flex:wid/2}}>
    
      <View
        style={{
          flexDirection: 'row',
          marginTop: wid/6,
          justifyContent:'space-between'

        }}>
        
        <TouchableOpacity onPress={() => navigation.navigate('prof')}>
          <Image
            source={require('../image/garoto.jpg')}
            style={{ width: wid/7, height: wid/7, borderRadius: wid, marginLeft: wid/24 }}
          />
        </TouchableOpacity>

        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{
              marginTop: wid/48,
              fontWeight: 'bold',
              fontSize: 17,
              paddingLeft:wid/48,
              color: 'white',
            }}>
            SOMA,
          </Text>

          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: 'white',
            }}>
            São Paulo
          </Text>

        </View>

        <MaterialIcons name='read-more' size={wid/6} color="white"
        style={{marginRight: wid/24 }}
        />

      </View>
       <Text
        style={{ marginLeft: wid/24, fontSize: 26, fontWeight:'bold', color: 'white', marginTop: wid/24 }}>
        Olá, Marcus
      </Text>
      <Text
        style={{ marginLeft: wid/24, fontSize: 13, color: 'white', marginTop: wid/96 }}>
        Nós e a matemática sentimos muito sua falta!
      </Text>

  <View style={{flexDirection:'row'}}>

    <FontAwesome5 name='trophy' size={wid/15} color="#FFFF00"
    style={{marginLeft:wid/24,marginTop: wid/24}}
    />

    <View style={{flexDirection:'column', marginTop: wid/24, marginLeft: wid/24}}>

    <Text style={{color:'white'}}>O seu ranking atual é</Text>
    <Text style={{color:'white', fontWeight:'bold'}}>#89</Text>

    </View>

  </View>

   <View style={{flexDirection:'row'}}>

    <MaterialIcons name='event' size={wid/13} color="#FFFF00"
    style={{marginTop:wid/24,marginLeft: wid/24}}
    />

    <View style={{flexDirection:'column', marginTop: 22, marginLeft: 20,}}>

    <Text style={{color:'white'}}>Seu próximo evento é</Text>
    <Text style={{color:'white', fontWeight:'bold'}}>Reunião semanal Zoom 07/10, 18h</Text>

    </View>

  </View>

  <View style={{backgroundColor:'white',width: 390, height: 35, borderRadius: 20,
  marginLeft:20,marginTop: 35,flexDirection:'row'}}>

  <FontAwesome5 name='search' size={20} color='#FFDF00'
  style={{marginTop:8,marginLeft:20}}
  />

  <TextInput placeholder='Buscar'
  style={{color:'grey',marginLeft: 20,}}
  />


  </View>

<View style={{height:wid/8}}></View>

</View>

    <TouchableOpacity onPress={() => navigation.navigate('comb')}>

       <View style={{flexDirection:'row', justifyContent:'space-between',
    width:wid/1.1,height:wid/4.25,backgroundColor:"#F6DD00", borderRadius:wid/20, marginLeft:wid/24,
    marginRight:wid/24, marginTop:wid/24
    }}>

    <Text style={{color:'white', marginTop:wid/12, marginLeft:wid/48, 
    fontWeight:'bold', fontSize:20}}>Combinatória</Text>
    <Image source={require('../image/dado.png')}
    style={{width:wid/2,height:wid/4.25, marginBottom:wid/24}}
    />

    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('geo')}>

    <View style={{flexDirection:'row-reverse', justifyContent:'space-between',
    width:wid/1.1,height:wid/4.25,backgroundColor:"blue", borderRadius:wid/20, marginLeft:wid/24,
    marginRight:wid/24, marginTop:wid/24
    }}>


    <Text style={{color:'white', marginTop:40, marginRight:10, 
    fontWeight:'bold', fontSize:20}}>Geometria</Text>
    <Image source={require('../image/geomoderno.png')}
    style={{width:wid/2,height:wid/4.25, marginBottom:wid/24}}
    />

    </View>
    </TouchableOpacity>


    <TouchableOpacity onPress={() => navigation.navigate('teo')}>

    <View style={{flexDirection:'row-reverse', justifyContent:'space-between',
     width:wid/1.1,height:wid/4.25,backgroundColor:"#F6DD00", borderRadius:wid/20, marginLeft:wid/24,
    marginRight:wid/24, marginTop:wid/24, alignItems:'center'
    }}>

    <Text style={{color:'white', marginTop:wid/15, marginRight:10, 
    fontWeight:'bold', fontSize:20}}>Teoria dos Números</Text>
    <Image source={require('../image/theory.png')}
    style={{width:wid/2,height:wid/4.25}}
    />

    </View> 
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('alge')}>

    <View style={{flexDirection:'row', justifyContent:'space-between',
    width:wid/1.1,height:wid/4.25,backgroundColor:"blue", borderRadius:wid/20, marginLeft:wid/24,
    marginRight:wid/24, marginTop:wid/24
    }}>

    <Text style={{color:'white', marginTop:40, marginLeft:10, 
    fontWeight:'bold', fontSize:20}}>Álgebra</Text>
    <Image source={require('../image/pi.png')}
    style={{width:wid/2,height:wid/4.25, marginBottom:wid/24}}
    />

    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('foru')}>

      <View style={{flexDirection:'row', justifyContent:'space-between',
    width:wid/1.1,height:wid/4.25,backgroundColor:"#F6DD00", borderRadius:wid/20, marginLeft:wid/24,
    marginRight:wid/24, marginTop:wid/24
    }}>

    <Text style={{color:'white', marginTop:40, marginLeft:10, 
    fontWeight:'bold', fontSize:20}}>Fórum</Text>
    <Image source={require('../image/chat1.png')}
    style={{width:wid/2,height:wid/4.25, marginBottom:wid/24}}
    />

    </View>

    </TouchableOpacity>

    
    <TouchableOpacity onPress={() => navigation.navigate('torn')}>

    <View style={{flexDirection:'row-reverse', justifyContent:'space-between',
    width:wid/1.1,height:wid/4.25,backgroundColor:"blue", borderRadius:wid/20, marginLeft:wid/24,
    marginRight:wid/24, marginTop:wid/24
    }}>


    <Text style={{color:'white', marginTop:40, marginRight:10, 
    fontWeight:'bold', fontSize:20}}>Torneios</Text>
    <Image source={require('../image/trophy.png')}
    style={{width:wid/2,height:wid/4.25, marginBottom:wid/24}}
    />

    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('event')}>

    <View style={{flexDirection:'row', justifyContent:'space-between',
    width:wid/1.1,height:wid/4.25,backgroundColor:"#F6DD00", borderRadius:wid/20, marginLeft:wid/24,
    marginRight:wid/24, marginTop:wid/24
    }}>

    <Text style={{color:'white', marginTop:40, marginLeft:10, 
    fontWeight:'bold', fontSize:20}}>Eventos</Text>
    <Image source={require('../image/event1.png')}
    style={{width:wid/2,height:wid/4.25, marginBottom:wid/24}}
    />

    </View>

    </TouchableOpacity>

     <TouchableOpacity onPress={() => navigation.navigate('cal')}>

    <View style={{flexDirection:'row-reverse', justifyContent:'space-between',
    width:wid/1.1,height:wid/4.25,backgroundColor:"blue", borderRadius:wid/20, marginLeft:wid/24,
    marginRight:wid/24, marginTop:wid/24
    }}>

    <Text style={{color:'white', marginTop:40, marginRight:10, 
    fontWeight:'bold', fontSize:20}}>Calendário</Text>
    <Image source={require('../image/calendar.png')}
    style={{width:wid/2,height:wid/4.25, marginBottom:wid/24}}
    />

    </View>
    </TouchableOpacity>

    <View style={{margin:wid/8}}></View>

  </ImageBackground>

  </ScrollView>
  );
}
