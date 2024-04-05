import { Text, View, StyleSheet, Button, TouchableOpacity, CheckBox,Image, ScrollView, ImageBackground, TextInput} from 'react-native';
import {Entypo, FontAwesome5, FontAwesome, AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import { Dimensions } from 'react-native';

export default function event({navigation}) {
  const hei = Dimensions.get('window').height;
  const wid = Dimensions.get('window').width;
  return (
    <ScrollView style={{backgroundColor:'white'}}>

    <ImageBackground
        source={require('../image/quest.jpg')}
        style={{width:wid, height:4.7*wid}}
        >

    <View style={{flexDirection:'column', backgroundColor:'blue', height:0.29*wid,  borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15}}>
      <Text
          style={{ marginLeft: wid/24, fontSize: 26, fontWeight:'bold', color: 'white', marginTop: wid/24 }}>
          Desafie-se!
      </Text>

      <Text
        style={{ marginLeft: wid/24, fontSize: 13, color: 'white', marginTop: wid/96 }}>
        Participe de olimpíadas oficiais e faça amigos!
      </Text>
          
    <View style={{flexDirection:'row'}}>
     <View style={{backgroundColor:'#FFDF00',width: wid/1.25, height: wid/9, borderRadius: 20,
  marginLeft:wid/48,marginTop: wid/20,flexDirection:'row', alignItems:'center'}}>

      <FontAwesome5 name='search' size={wid/18} color='#FFffff'
      style={{marginLeft:20}}/>

      <TextInput placeholder='Buscar'
      style={{color:'#ffffff',marginLeft: 20, width:wid/1.3}}
      />
    </View>
      
    <View style={{alignItems:'center', width:'12%', height:wid/9, backgroundColor:'#FFDF00', 
    borderRadius:5, marginLeft:wid/48, marginTop:hei/39}}>
        <AntDesign name='bars' size={wid/11} color='white'
        style={{marginTop:wid/96}}/>
      </View>

    </View>

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>

        <Text style={{color: 'blue', fontSize:wid/16, marginLeft:wid/48, fontWeight:'bold', marginTop:wid/22}}>Olimpíadas Oficiais
        </Text>

        <AntDesign name='rightcircle' size={wid/16} color='blue'
        style={{marginRight:15, marginTop:20}}/>

      </View>


      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 48,
          backgroundColor: '#EBF0F2',
          borderRadius: 10,
          width: wid - wid / 24,
          marginLeft: wid / 48,
          height: wid / 6,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wid / 48,
            marginTop: wid / 70,
          }}>
          <View
            style={{
              width: wid / 7,
              height: wid / 7,
              borderRadius: 10,
              backgroundColor: 'blue',
              alignItems: 'center',
            }}>
            <FontAwesome5
              name="medal"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              OBMEP
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>6 ano ao 3 ano • Gratuita</Text>
          </View>
        </View>

        <AntDesign
          name="form"
          size={wid / 11}
          color="blue"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 48,
          backgroundColor: '#EBF0F2',
          borderRadius: 10,
          width: wid - wid / 24,
          marginLeft: wid / 48,
          height: wid / 6,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wid / 48,
            marginTop: wid / 70,
          }}>
          <View
            style={{
              width: wid / 7,
              height: wid / 7,
              borderRadius: 10,
              backgroundColor: 'blue',
              alignItems: 'center',
            }}>
            <FontAwesome5
              name="medal"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Canguru de Matemática
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>8 ano ao 3 ano • Gratuita</Text>
          </View>
        </View>

        <AntDesign
          name="form"
          size={wid / 11}
          color="blue"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>


      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 48,
          backgroundColor: '#EBF0F2',
          borderRadius: 10,
          width: wid - wid / 24,
          marginLeft: wid / 48,
          height: wid / 6,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wid / 48,
            marginTop: wid / 70,
          }}>
          <View
            style={{
              width: wid / 7,
              height: wid / 7,
              borderRadius: 10,
              backgroundColor: 'blue',
              alignItems: 'center',
            }}>
            <FontAwesome5
              name="medal"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Olimpíada Brasileira de Lógica 
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>4 ano ao 3 ano • Paga</Text>
          </View>
        </View>

        <AntDesign
          name="form"
          size={wid / 11}
          color="blue"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
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

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>

          <Text style={{color: 'blue', fontSize:wid/16, marginLeft:wid/48, fontWeight:'bold', marginTop:wid/22}}>Competições da Comunidade
          </Text>

          <AntDesign name='rightcircle' size={wid/16} color='blue'
          style={{marginRight:15, marginTop:20}}
          />

      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 48,
          backgroundColor: '#EBF0F2',
          borderRadius: 10,
          width: wid - wid / 24,
          marginLeft: wid / 48,
          height: wid / 6,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wid / 48,
            marginTop: wid / 70,
          }}>
          <View
            style={{
              width: wid / 7,
              height: wid / 7,
              borderRadius: 10,
              backgroundColor: 'blue',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="trophy-award"
              size={wid / 10}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Matemáticos em Ação
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>Categoria Livre • Outubro</Text>
          </View>
        </View>

        <AntDesign
          name="form"
          size={wid / 11}
          color="blue"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 48,
          backgroundColor: '#EBF0F2',
          borderRadius: 10,
          width: wid - wid / 24,
          marginLeft: wid / 48,
          height: wid / 6,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wid / 48,
            marginTop: wid / 70,
          }}>
          <View
            style={{
              width: wid / 7,
              height: wid / 7,
              borderRadius: 10,
              backgroundColor: 'blue',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="trophy-award"
              size={wid / 10}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Jogo πtágoras
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>15-17 anos • Junho</Text>
          </View>
        </View>

        <AntDesign
          name="form"
          size={wid / 11}
          color="blue"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 48,
          backgroundColor: '#EBF0F2',
          borderRadius: 10,
          width: wid - wid / 24,
          marginLeft: wid / 48,
          height: wid / 6,
          shadowColor: '#98A6B3',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wid / 48,
            marginTop: wid / 70,
          }}>
          <View
            style={{
              width: wid / 7,
              height: wid / 7,
              borderRadius: 10,
              backgroundColor: 'blue',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="trophy-award"
              size={wid / 10}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Roundmath
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>15-17 anos • Junho</Text>
          </View>
        </View>

        <AntDesign
          name="form"
          size={wid / 11}
          color="blue"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
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

    </View>

    </ImageBackground>

    </ScrollView>
  );
}