import { Text, View, StyleSheet, Button, TouchableOpacity, ScrollView, Image, ImageBackground} from 'react-native';
import {Entypo, FontAwesome} from "@expo/vector-icons";
import { Dimensions } from 'react-native';

export default function geo({navigation}) {
  const hei = Dimensions.get('window').height;
  const wid = Dimensions.get('window').width;
  return (
   <ScrollView>

   <ImageBackground
        source={require('../image/quest.jpg')}
        style={{width:wid, height:4.1*wid}}
        >

    <View style={{backgroundColor:'#FF6E25', flex: wid/2.5}}>
    <Image
              source={require('../image/geo-c.jpeg')}
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
    }}>Tópicos de Geometria</Text>

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
              backgroundColor: '#FF6E25',
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
              Congruencia de Triangulos
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
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
              backgroundColor: '#FF6E25',
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
              Semelhança de Triangulos
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
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
              backgroundColor: '#FF6E25',
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
              Quadriláteros Notáveis 
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
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
              backgroundColor: '#FF6E25',
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
              Centro dos Triangulos
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
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
              backgroundColor: '#FF6E25',
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
              Angulos Inscritos na Circ
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
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
              backgroundColor: '#FF6E25',
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
              Quadriláteros cíclicos
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
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
              backgroundColor: '#FF6E25',
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
              Relações de Áreas
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
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
              backgroundColor: '#FF6E25',
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
              Ceva e Menelaus
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
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
              backgroundColor: '#FF6E25',
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
              Introdução a trigonometria
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
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
              backgroundColor: '#FF6E25',
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
              Trigonometria
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
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
              backgroundColor: '#FF6E25',
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
              Circ inscritas e Circunscritas
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
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
              backgroundColor: '#FF6E25',
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
              Inversão
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
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
              backgroundColor: '#FF6E25',
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
              Geometria Analítica
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
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
              backgroundColor: '#FF6E25',
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
              Potencia de Ponto
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF6E25"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

    <View style={{margin:40}}></View>

    </ImageBackground>
    
    </ScrollView>
  );
}