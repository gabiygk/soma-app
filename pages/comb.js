import { Text, View, StyleSheet, Button, TouchableOpacity, CheckBox,Image, ScrollView, ImageBackground} from 'react-native';
import {Entypo, FontAwesome} from "@expo/vector-icons";
import { Dimensions } from 'react-native';

export default function comb({navigation}) {
  const hei = Dimensions.get('window').height;
  const wid = Dimensions.get('window').width;
  return (
    <ScrollView>

    <ImageBackground
        source={require('../image/quest.jpg')}
        style={{width:wid, height:4.7*wid}}>

    <View style={{backgroundColor:'#FF31E8', flex: wid/2.5}}>
      <Image
                source={require('../image/comb-c.jpeg')}
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
      margin: 20,}}>Tópicos de Combinatoria</Text>

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
              backgroundColor: '#FF31E8',
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
              Paridade
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Tabuleiros
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Jogos
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Contagem
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Indução
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Princípio da Casa dos Pombos
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Invariantes
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Princípio do Extremo
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Grafos: Definição
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Indução em Grafos
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Grafos: Teoria de Ramsey
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Grafos: Casamentos
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Grafos: Teorema de Turan
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Combinatória Geométrica
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Recorrencia
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wid / 32.5,
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
              backgroundColor: '#FF31E8',
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
              Método Probabilístico
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#FF31E8"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>
  
<View style={{margin:40}}></View>

</ImageBackground>
    
    </ScrollView>
  );
}