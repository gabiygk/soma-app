import { Text, View, StyleSheet, Button, TouchableOpacity, CheckBox,Image, ScrollView, ImageBackground } from 'react-native';
import {Entypo, FontAwesome} from "@expo/vector-icons";
import { Dimensions } from 'react-native';

export default function teo({navigation}) {
  const hei = Dimensions.get('window').height;
  const wid = Dimensions.get('window').width;
  return (
    <ScrollView>

     <ImageBackground
        source={require('../image/quest.jpg')}
        style={{width:wid, height:4.0*wid}}
        >

    <View style={{backgroundColor:'#283BEA', flex: wid/2.5}}>
    <Image
              source={require('../image/teo-c.jpeg')}
              style={{
                width: wid/1.1,
                height: wid/1.1,
                borderRadius: 12,
                marginTop: wid/12,
                marginLeft: wid/24,
                marginRight: wid/24,
              }}
            />

    <Text style={{fontWeight:'bold', color:'white', fontSize: wid/12,
    margin: 20,
    }}>Tópicos de Teoria dos Números</Text>

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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              MDC & MMC
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Algoritmo de Euclides
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Divisibilidade
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Congruencia
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Teorema de Fermat
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Teorema de Euler
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Teorema de Wilson 
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Parte Inteira (piso e teto)
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Teorema Chines dos Restos
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Ordem
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Raízes Primitivas
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Resíduos Quadráticos
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Equações Diofantinas
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
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
              backgroundColor: '#283BEA',
              alignItems: 'center',
            }}>
            <Entypo
              name="book"
              size={wid / 11}
              color="white"
              style={{ marginTop: wid / 50 }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginLeft: wid / 48, marginTop:wid/48 }}>
            <Text style={{ fontWeight: 'bold', fontSize: wid / 23 }}>
              Equação de Pell
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#283BEA"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

    



  



    </ImageBackground>
    
<View style={{margin:40}}></View>
    
    </ScrollView>
  );
}