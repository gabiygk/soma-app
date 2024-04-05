import { Text, View, StyleSheet, Button, TouchableOpacity, ScrollView,Image, ImageBackground, TextInput } from 'react-native';
import {AntDesign,Ionicons, FontAwesome5,Entypo, Foundation, MaterialIcons} from "@expo/vector-icons";
import { Dimensions } from 'react-native';

export default function prof({navigation}) {
  const hei = Dimensions.get('window').height;
  const wid = Dimensions.get('window').width;
  return (
    <ScrollView>

    <View style={{backgroundColor:'#283BEA', flex:wid/2}}>
    <ImageBackground source={{uri:'https://img.freepik.com/vetores-gratis/degrade-de-fundo-azul_23-2149331354.jpg'}}/>

    <View style={{flexDirection:'row',justifyContent:'space-between', marginTop:15, alignContent:'center'}}>
    <Entypo name='trophy' size={25} color="white"
    style={{marginLeft:wid/48}}
    />
    <Text style={{fontWeight:'bold', color:'white', fontSize:25}}>Perfil</Text>
    <Ionicons name='ios-settings-sharp' size={25} color="white" 
    style={{marginRight:wid/48}}/>
    </View>

    <View style={{flexDirection:'column', marginTop:35, alignItems:'center'}}>

   <Image
            source={require('../image/garoto.jpg')}
            style={{width: 83, height: 83, borderRadius: 100, borderWidth:3,borderColor:'white' }}
          />

          <Text style={{fontWeight:'bold', color:'white', fontSize:15, marginTop:10}}>Marcus Lancelotti Silva</Text>
          <Text style={{color:'white', fontSize:12, }}>São Paulo, colégio Dom Bosco</Text>

    </View>

    <View style={{flexDirection:'row', margin:35, marginLeft:wid/5, }}>
    <Text style={{fontWeight:'bold', color:'white', fontSize:wid/28}}>
    984 seguidores      |</Text>
    <Text style={{fontWeight:'bold', color:'white', fontSize:wid/28}}>      107 seguindo</Text>
    </View>
    
    </View>

    <View style={{flexDirection:'row', margin:20}}>
    <Ionicons name='person' size={30} color="#283BEA"/>
    <View style={{flexDirection:'column', marginLeft:10}}>
    <Text style={{fontSize:17,fontWeight:'bold', color:'#283BEA'}}>Nome</Text>
    <Text style={{fontSize:17, color:'#4C5958'}}>Marcus Lancelotti Silva</Text>
    </View>
    </View>

    <View style={styles.linha}>
    </View>

    <View style={{flexDirection:'row', margin:20}}>
    <Entypo name='mail' size={30} color="#283BEA"/>
    <View style={{flexDirection:'column', marginLeft:10}}>
    <Text style={{fontSize:17,fontWeight:'bold', color:'#283BEA'}}>E-mail</Text>
    <Text style={{fontSize:17, color:'#4C5958'}}>marcuslan1@gmail.com</Text>
    </View>
    </View>

    <View style={styles.linha}>
    </View>

    <View style={{flexDirection:'row', margin:20}}>
    <Entypo name='calendar' size={30} color="#283BEA"/>
    <View style={{flexDirection:'column', marginLeft:10}}>
    <Text style={{fontSize:17,fontWeight:'bold', color:'#283BEA'}}>Data de nascimento</Text>
    <Text style={{fontSize:17, color:'#4C5958'}}>09/07/2006</Text>
    </View>
    </View>

    <View style={styles.linha}>
    </View>

    <View style={{flexDirection:'row', margin:20}}>
    <Foundation name='telephone' size={30} color="#283BEA"/>
    <View style={{flexDirection:'column', marginLeft:10}}>
    <Text style={{fontSize:17,fontWeight:'bold', color:'#283BEA'}}>Telefone</Text>
    <Text style={{fontSize:17, color:'#4C5958'}}>+11 8835-8392</Text>
    </View>
    </View>

    <View style={styles.linha}>
    </View>

    <View style={{flexDirection:'row', margin:20}}>
    <FontAwesome5 name='building' size={30} color="#283BEA"/>
    <View style={{flexDirection:'column', marginLeft:10}}>
    <Text style={{fontSize:17,fontWeight:'bold', color:'#283BEA'}}>Instituição de Ensino</Text>
    <Text style={{fontSize:17, color:'#4C5958'}}>Colégio Dom Bosco</Text>
    </View>
    </View>

    <View style={styles.linha}>
    </View>

    <View style={{flexDirection:'row', margin:20}}>
    <FontAwesome5 name='city' size={30} color="#283BEA"/>
    <View style={{flexDirection:'column', marginLeft:10}}>
    <Text style={{fontSize:17,fontWeight:'bold', color:'#283BEA'}}>Estado</Text>
    <Text style={{fontSize:17, color:'#4C5958'}}>São Paulo</Text>
    </View>
    </View>

    <View style={styles.linha}>
    </View>


    <View style={{flexDirection:'row', margin:20}}>
    <FontAwesome5 name='city' size={30} color="#283BEA"/>
    <View style={{flexDirection:'column', marginLeft:10}}>
    <Text style={{fontSize:17,fontWeight:'bold', color:'#283BEA'}}>Cidade</Text>
    <Text style={{fontSize:17, color:'#4C5958'}}>São Paulo</Text>
    </View>
    </View>

    <View style={styles.linha}>
    </View>

    <View style={{flexDirection:'row', margin:20, width:wid}}>
    <Ionicons name='person' size={30} color="#283BEA"/>
    <View style={{flexDirection:'column', marginLeft:10}}>
    <Text style={{fontSize:17,fontWeight:'bold', color:'#283BEA'}}>Conte sobre quem voce é.</Text>
    <Text style={{fontSize:17, color:'#4C5958', width:wid-wid/4}}>Quando criança, comecei a me interessar por problemas lógicos e quis me aprofundar mais. No entanto, minha escola não possuía recursos suficientes de conteúdos e eventos mais aprofundados. Tentei estudar sozinho e nesse caminho, encontrei esta comunidade. :)</Text>
    </View>
    </View>
    
    <View style={{height:hei/10}}></View>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({ 
  linha: {backgroundColor:'#BFBFBF', width:380, height:1, marginLeft:20, margintop:10},
});

