import { Text, View, StyleSheet, Button, TouchableOpacity, CheckBox,Image, ScrollView,ImageBackground } from 'react-native';
import {Entypo, FontAwesome} from "@expo/vector-icons";
import { Dimensions } from 'react-native';

export default function alge({navigation}) {
  const hei = Dimensions.get('window').height;
  const wid = Dimensions.get('window').width;
  return (
    <ScrollView>

    <ImageBackground
        source={require('../image/quest.jpg')}
        style={{width:wid, height:4.06*wid}}
        >

    <View style={{backgroundColor:'#F6DD00', flex: wid/2.5}}>
      <Image
                source={require('../image/alge-c.jpeg')}
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
      margin: 20,}}>Tópicos de Álgebra</Text>

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
              backgroundColor: '#F6DD00',
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
              Equações e Seus Sistemas
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#F6DD00"
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
              backgroundColor: '#F6DD00',
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
              Equações de Segundo Grau
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#F6DD00"
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
              backgroundColor: '#F6DD00',
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
              Produtos Notáveis
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#F6DD00"
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
              backgroundColor: '#F6DD00',
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
              Desigualdades
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#F6DD00"
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
              backgroundColor: '#F6DD00',
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
              Sequencias
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#F6DD00"
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
              backgroundColor: '#F6DD00',
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
              Números Complexos
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#F6DD00"
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
              backgroundColor: '#F6DD00',
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
              Raízes da Unidade
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#F6DD00"
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
              backgroundColor: '#F6DD00',
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
              Equações Funcionais
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#F6DD00"
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
              backgroundColor: '#F6DD00',
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
              Polinomios
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#F6DD00"
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
              backgroundColor: '#F6DD00',
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
              Análise
            </Text>
            <Text style={{ color: '#79717A', fontSize: wid / 27 }}>25 min</Text>
          </View>
        </View>

        <FontAwesome
          name="bookmark-o"
          size={wid / 11}
          color="#F6DD00"
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
              backgroundColor: '#F6DD00',
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
          color="#F6DD00"
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
              backgroundColor: '#F6DD00',
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
          color="#F6DD00"
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
              backgroundColor: '#F6DD00',
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
          color="#F6DD00"
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
              backgroundColor: '#F6DD00',
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
          color="#F6DD00"
          style={{ marginRight: wid / 48, marginTop: wid / 30 }}
        />
      </View>

    
    <View style={{margin:40}}></View>

    </ImageBackground>
    
  </ScrollView>
  );
}