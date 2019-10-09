import React, { Component } from 'react';
import {connect} from "react-redux";
import {Alert, StyleSheet, FlatList, Image, TouchableNativeFeedback, TouchableOpacity, ScrollView, Picker, ImageBackground} from 'react-native';
import TextInputDefault from '../../components/Auth/TextInputDefault';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text} from "native-base";
import {getLogin} from '../../redux/actions/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp} from '../../helpers/Responsive';
const qualification=[
  {
    id:1,
    name:"shower"
  },
  {
    id:2,
    name:"water"
  },
  {
    id:3,
    name:"lightbulb"
  },
  {
    id:4,
    name:"wrench"
  },
  {
    id:5,
    name:"charging-station"
  }
]
const task=[
  {
    id:1,
    icon:'water',
    name:"Water Plumbing",
    content:"lorem ipsum sir helmet dos arem asa tir lorem ipsum apem lorem ipmu sase lorem ipsum asem gerom dos arem asa tir lorem ipsum apem lorem ipmu sase lorem ipsum asem gerom",
    price:300000
  },
  {
    id:2,
    icon:'air',
    name:"Air Conditioner",
    content:"lorem ipsum sir helmet dos arem asa tir lorem ipsum apem lorem ipmu sase lorem ipsum asem gerom dos arem asa tir lorem ipsum apem lorem ipmu sase lorem ipsum asem gerom",
    price:300000
  }
]
const product=[
  {
    id:1,
    title:"Kabel Ties",
    detail:"Kabel ties 15 cm",
    price :310000
  },
  {
    id:2,
    title:"Kabel Ties",
    detail:"Kabel ties 15 cm",
    price :310000
  },
]
const photo=[
  {
    id:1,
    image:"https://manaberita.com/v1/uploads/2019/01/images-102.jpg"
  },
  {
    id:2,
    image:"https://manaberita.com/v1/uploads/2019/01/images-102.jpg"
  },
  {
    id:3,
    image:"https://manaberita.com/v1/uploads/2019/01/images-102.jpg"
  },
  {
    id:4,
    image:"https://manaberita.com/v1/uploads/2019/01/images-102.jpg"
  }
]
class DetailRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname   : '',
      email      : '',
      password   : '',
      phone      : '',
      token      : '',
      job_status : '',
      mitra_lima : false
    }
  }
  static navigationOptions = {
    title: 'Detail Request',
    headerStyle: {
      backgroundColor: '#0969A5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:0.8}}>
          <ScrollView>
            <View style={{width:"90%", marginTop:hp(1.5), borderRadius:hp(0.5), alignSelf:"center", backgroundColor:"white", paddingTop:hp(1), paddingBottom:hp(3)}}>
              <View style={{alignSelf:"center", flex:0.1, marginTop:hp(2), marginBottom:hp(1)}}>
                <FlatList
                  data={qualification}
                  horizontal={true}
                  renderItem={({item}) =>
                  <View>
                    <TouchableNativeFeedback onPress={() =>{}} >
                      <View style={{width:40, marginRight:hp(1), justifyContent:"center", alignItems:"center", height:40, borderRadius:20, backgroundColor:"blue"}}> 
                        <Icon name={item.name} size={hp(3)} color="white" />
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                  }
                  keyExtractor={item => item.id.toString()}
                />
              </View>
              <View style={{flex:0.1,flexDirection:"column", marginTop:hp(1), width:"90%",alignSelf:"center"}}>
                <View style={{justifyContent:"space-between", flexDirection:"row"}}>
                  <Text style={{color:"black", fontWeight:"bold", fontSize:hp(2)}}>AC dan keran rusak</Text>
                  <Text style={{color:"black", fontSize:hp(2)}}>#3423432424</Text>
                </View>
              </View>
              <View style={{flex:0.1,flexDirection:"column", marginTop:hp(1), width:"90%",alignSelf:"center"}}>
                <Text style={{color:"black", fontSize:hp(1.8)}}>loren ipsum sir helmet adus slow sie ameh tor tanpa go sain gdaj jdal dah alh cal dfah aldj adfdal dfjs</Text>
              </View>
              <View style={{marginTop:hp(2), paddingBottom:hp(2), borderBottomWidth:1, borderColor:"#e3e1e1"}}>
                <View style={{flex:0.4,flexDirection:"column", marginTop:hp(1.5), width:"90%",alignSelf:"center"}}>
                  <View style={{justifyContent:"space-between", flexDirection:"row"}}>
                    <Text style={{color:"black", fontWeight:"bold", fontSize:hp(2)}}>Status</Text>
                    <View style={{width:wp(25), paddingTop:hp(0.5),paddingBottom:hp(0.5), backgroundColor:"blue", borderRadius:hp(0.5), justifyContent:"center", alignItems:"center"}}>
                      <Text style={{color:"white", fontSize:hp(2)}}>Bidding</Text>
                    </View>
                  </View>
                  <View style={{justifyContent:"space-between", marginTop:hp(1), flexDirection:"row"}}>
                    <Text style={{color:"black", fontSize:hp(2)}}>Staff</Text>
                    <Text style={{color:"black", fontWeight:"bold", fontSize:hp(2)}}>2 Man Power</Text>
                  </View>
                  <View style={{justifyContent:"space-between", marginTop:hp(1), flexDirection:"row"}}>
                    <Text style={{color:"black", fontSize:hp(2)}}>Expired Bidding At</Text>
                    <Text style={{color:"red", fontWeight:"bold", fontSize:hp(2)}}>00:02:00</Text>
                  </View>
                </View>
              </View>
              <View style={{paddingTop:hp(1.5)}}>
                <View style={{flex:0.4,flexDirection:"column", marginTop:hp(1.5), width:"90%",alignSelf:"center"}}>
                  <Text style={{color:"black", fontSize:hp(2)}}>Customer</Text>
                  <View style={{flexDirection:"row", flex:0.1, marginTop:hp(1)}}>
                    <View style={{flex:0.1, justifyContent:"center"}}>
                      <Icon name="user" color="blue" size={hp(2)} />
                    </View>
                    <View style={{flex:0.9, justifyContent:"center"}}>
                      <Text style={{color:"black", fontSize:hp(2)}}>Rahayu Sandra</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:"row", flex:0.1, marginTop:hp(1)}}>
                    <View style={{flex:0.1, justifyContent:"center"}}>
                      <Icon name="map-marker" color="blue" size={hp(2)} />
                    </View>
                    <View style={{flex:0.9, justifyContent:"center"}}>
                      <Text style={{color:"black", fontSize:hp(2)}}>Komplek Batang Bahari, Jalan Kenari 2, Tanah Baru, Beji, Depok</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{width:"90%", alignSelf:"center", marginTop:hp(2),marginBottom:hp(2)}}>
              <Text style={{fontSize:hp(2.5)}}>Task/Service</Text>
              <FlatList
                data={task}
                horizontal={false}
                renderItem={({item}) =>
                  <TouchableNativeFeedback onPress={() =>{}} >
                    <View style={{flex:1, borderRadius:hp(0.5), backgroundColor:"white", marginTop:hp(1), marginBottom:hp(1)}}>
                      <View style={{flex:0.4, paddingTop:hp(1), paddingBottom:hp(1),width:"90%", justifyContent:"space-between", flexDirection:"row", alignSelf:"center", marginTop:hp(2),marginBottom:hp(2)}}>
                        <View style={{flexDirection:"row", justifyContent:"center"}}>
                          <View style={{justifyContent:"center", alignItems:"center"}}>
                            <View style={{width:30, height:30, borderRadius:15, backgroundColor:"blue", justifyContent:"center", alignItems:"center"}}>
                              <Icon name={item.icon} size={hp(2)} color="white" />
                            </View>
                          </View>
                          <View style={{justifyContent:"center", marginLeft:wp(2)}}>
                            <Text style={{color:"black", fontSize:hp(2)}}>{item.name}</Text>
                          </View>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"center"}}>
                          <View style={{justifyContent:"center", alignItems:"center"}}>
                            <View style={{width:20, height:20, borderColor:"grey", borderWidth:1, justifyContent:"center", alignItems:"center"}}>
                              <Text style={{color:"black", fontSize:hp(1.5)}}>Rp</Text>
                            </View>
                          </View>
                          <View style={{justifyContent:"center", marginLeft:wp(2)}}>
                            <Text style={{color:"black", fontSize:hp(2)}}>{item.price}</Text>
                          </View>
                        </View>
                      </View>
                      <View style={{borderColor:"#e3e1e1", borderBottomWidth:1}} />
                      <View style={{flex:0.4, paddingTop:hp(1), paddingBottom:hp(1),width:"90%",alignSelf:"center", marginTop:hp(2),marginBottom:hp(2)}}>
                        <Text style={{color:"black", fontSize:hp(2)}}>{item.content}</Text>
                      </View>
                      <View style={{flex:0.2, flexDirection:"row", justifyContent:"space-between", paddingTop:hp(1), paddingBottom:hp(1),width:"90%",alignSelf:"center", marginTop:hp(2),marginBottom:hp(2)}}>
                        <Text style={{color:"black", fontSize:hp(2)}}>hfdhsfkkfsd</Text>
                        <Text style={{color:"black", fontSize:hp(2)}}>hfdhsfkkfsd</Text>
                      </View>
                    </View>
                  </TouchableNativeFeedback>
                }
                keyExtractor={item => item.id.toString()}
              />
            </View>
            <View style={{width:"90%", alignSelf:"center", marginTop:hp(-1),marginBottom:hp(2)}}>
              <Text style={{fontSize:hp(2.5)}}>Product</Text>
              <FlatList
                data={product}
                horizontal={false}
                renderItem={({item}) =>
                  <TouchableNativeFeedback onPress={() =>{}} >
                    <View style={{flex:1, borderRadius:hp(0.5), backgroundColor:"white", marginTop:hp(1), marginBottom:hp(1)}}>
                      <View style={{flex:0.4, paddingTop:hp(1), paddingBottom:hp(1),width:"90%", flexDirection:"row", alignSelf:"center", marginTop:hp(2),marginBottom:hp(2)}}>
                        <View style={{flex:0.2, justifyContent:"center"}}>
                          <View style={{width:25, height:25, justifyContent:"center", alignItems:"center", borderWidth:1, borderColor:"grey"}}>
                            <Text style={{fontSize:hp(1.5), color:"grey"}}>Rp</Text>
                          </View>
                        </View>
                        <View style={{flex:0.4, flexDirection:"column"}}>
                          <Text style={{fontSize:hp(2), color:"black", fontWeight:"bold"}}>{item.title}</Text>
                          <Text style={{fontSize:hp(2), color:"black"}}>{item.detail}</Text>
                        </View>
                        <View style={{flex:0.4, justifyContent:"center", alignItems:"flex-end"}}>
                          <Text style={{fontSize:hp(2), color:"black", fontWeight:"bold"}}>Rp {item.price}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableNativeFeedback>
                }
                keyExtractor={item => item.id.toString()}
              />
            </View>
            <View style={{width:"90%", alignSelf:"center", marginTop:hp(-1),marginBottom:hp(2)}}>
              <Text style={{fontSize:hp(2.5)}}>Request Photos</Text>
              <FlatList
                data={photo}
                horizontal={true}
                renderItem={({item}) =>
                  <TouchableNativeFeedback onPress={() =>{}} >
                    <View style={{flex:1, borderRadius:hp(0.5), marginLeft:hp(0.3), backgroundColor:"white", marginTop:hp(1), marginBottom:hp(1)}}>
                      <Image source={{uri:item.image}} style={{width:wp(50), borderRadius:hp(0.5), height:hp(30), resizeMode:"cover"}} />
                    </View>
                  </TouchableNativeFeedback>
                }
                keyExtractor={item => item.id.toString()}
              />
            </View>
          </ScrollView>
        </View>
        <View style={{flex:0.2}}>
          <View style={{flex:1, flexDirection:"column"}}>
            <View style={{flex:0.4, marginBottom:hp(1), backgroundColor:"white", borderRadius:hp(0.5), paddingTop:hp(2), width:"90%", alignSelf:"center", paddingBottom:hp(1)}}>
              <View style={{width:"90%", alignSelf:"center", flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={{color:"black", fontSize:hp(2.3)}}>Total Pendapatan</Text>
                <Text style={{color:"black", fontSize:hp(2.3)}}>Rp 2.400.000</Text>
              </View>
            </View>
            <TouchableOpacity style={{flex:0.6, backgroundColor:"blue", width:"100%", justifyContent:"center", alignItems:"center", width:"100%", paddingTop:hp(1), paddingBottom:hp(1)}}>
                <Text style={{color:"white", fontSize:hp(2.3)}}>Kirim Proof of Delivery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    flexDirection:"column",
    backgroundColor:"#e3e1e1",
  },
  circle_wrap:{
    width:120,
    height:120, 
    borderRadius:60, 
    backgroundColor:"blue", 
    justifyContent:"center", 
    alignItems:"center"
  },
  circle:{
    width:110,
    height:110, 
    borderRadius:55, 
    backgroundColor:"#7fa8b5", 
    justifyContent:"center", 
    alignItems:"center"
  },
  active_circle:{
    width:110,
    height:110, 
    borderRadius:55, 
    backgroundColor:"yellow", 
    justifyContent:"center", 
    alignItems:"center"   
  }
})

export default connect(mapStateToProps)(DetailRequest)