import React, { Component } from 'react';
import {connect} from "react-redux";
import {Alert, StyleSheet, FlatList, Image, TouchableNativeFeedback, TouchableOpacity, ScrollView, Picker, ImageBackground} from 'react-native';
import TextInputDefault from '../../components/Auth/TextInputDefault';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text} from "native-base";
import {getLogin} from '../../redux/actions/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp, imgX,imgY} from '../../helpers/Responsive';
import StarRating from 'react-native-star-rating';
import Timeline from 'react-native-timeline-listview'

const timeline=[
  {
    id:1,
    date:"23 Aug",
    content:"Delivery Diterima, Pekerjaan Selesai",
    time:"19.00 WIB"
  },
  {
    id:2,
    date:"28 Aug",
    content:"Mengirim Proof of Delivery",
    time:"19.00 WIB"
  },
  {
    id:3,
    date:"30 Aug",
    content:"Menerima Task Water Plumbing",
    time:"19.00 WIB"
  },
]
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
    icon:'shower',
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
class ProofDelivery extends Component {
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
    this.data = [
      {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
      {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
      {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
      {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
      {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
    ]
  }
  static navigationOptions = {
    title: 'Proof of Delivery',
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
        <ScrollView>
          <View style={{flex:0.8}}>
              <View style={{width:"90%", alignSelf:"center", marginTop:hp(2),marginBottom:hp(2)}}>
                <FlatList
                  data={task}
                  horizontal={false}
                  renderItem={({item}) =>
                    <TouchableNativeFeedback onPress={() =>{}} >
                      <View style={{flex:1, borderRadius:hp(0.5), backgroundColor:"white", marginTop:hp(1), marginBottom:hp(1)}}>
                        <View style={{flex:0.4, paddingTop:hp(1), paddingBottom:hp(1),width:"90%", justifyContent:"space-between", flexDirection:"row", alignSelf:"center", marginTop:hp(2),marginBottom:hp(2)}}>
                          <View style={{flexDirection:"row", justifyContent:"center"}}>
                            <View style={{justifyContent:"center", alignItems:"center"}}>
                              <View style={{width:imgX(12), height:imgY(12), borderRadius:imgY(6), backgroundColor:"blue", justifyContent:"center", alignItems:"center"}}>
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
                        <TouchableOpacity style={{borderBottomLeftRadius: hp(0.5),borderBottomRightRadius: hp(0.5),justifyContent:"center", alignItems:"center", paddingBottom:hp(2), paddingTop:hp(2), backgroundColor:"green"}}>
                          <Text style={{fontSize:hp(2), color:"white"}}>Delivery Diterima</Text>
                        </TouchableOpacity>
                      </View>
                    </TouchableNativeFeedback>
                  }
                  keyExtractor={item => item.id.toString()}
                />
              </View>
              <View style={{width:"90%", alignSelf:"center", marginTop:hp(-1),marginBottom:hp(2)}}>
                <Text style={{fontSize:hp(2.5)}}>Staff Detail</Text>
                <View style={{flexDirection:"column", marginTop:hp(1), marginBottom:hp(1), backgroundColor:"white", borderRadius:hp(0.5)}}>
                  <View style={{flexDirection:"row", paddingTop:hp(3), paddingBottom:hp(2)}}>
                    <View style={{flex:0.1, justifyContent:"center", paddingLeft:wp(5)}}>
                      <Icon name="user" size={hp(2)} color="blue" light />
                    </View>
                    <View style={{flex:0.9, justifyContent:"center"}}>
                      <Text style={{fontSize:hp(2), color:"black"}}>Budi Hartajo</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:"row", paddingTop:hp(1), paddingBottom:hp(3)}}>
                    <View style={{flex:0.1, justifyContent:"center", paddingLeft:wp(5)}}>
                      <Icon name="phone" size={hp(2)} color="blue" light />
                    </View>
                    <View style={{flex:0.9, justifyContent:"center"}}>
                      <Text style={{fontSize:hp(2), color:"black"}}>+628971908217</Text>
                    </View>
                  </View>
                  <View style={{justifyContent:"center", alignItems:"center", paddingTop:hp(3), marginBottom:hp(1), borderTopWidth:1, borderColor:"#e3e1e1"}}>
                    <Text style={{fontSize:hp(2), color:"black"}}>Staff Rating</Text>
                  </View>
                  <View style={{justifyContent:"center", flexDirection:"row", alignItems:"center",marginBottom:hp(1), marginTop:hp(1)}}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      fullStarColor="#c49c0c"
                      emptyStarColor="#c49c0c"
                      rating={this.state.starCount}
                      starSize={hp(3)}
                      starStyle={{borderColor:"black"}}
                    />
                    <Text style={{fontSize:hp(2)}}>{this.state.starCount}</Text>
                  </View>
                  <View style={{width:"90%", alignSelf:"center", paddingBottom:hp(2)}}>
                    <View style={{paddingTop:hp(1),flexDirection:"row", paddingBottom:hp(1), justifyContent:"center", alignItems:"center"}}>
                      <View style={{flex:0.34, justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                        <Text style={{fontSize:hp(2), color:"grey"}}>Kecepatan</Text>
                        <View style={{flexDirection:'row', justifyContent:"center", alignItems:"center"}}>
                          <StarRating
                            disabled={false}
                            maxStars={1}
                            fullStarColor="#c49c0c"
                            emptyStarColor="#c49c0c"
                            rating={this.state.starCount}
                            starSize={hp(3)}
                            starStyle={{borderColor:"black"}}
                          />
                          <Text style={{fontSize:hp(2)}}>4</Text>
                        </View>
                      </View>
                      <View style={{flex:0.34, justifyContent:"center", alignItems:"center"}}>
                        <Text style={{fontSize:hp(2), color:"grey"}}>Kerapihan</Text>
                        <View style={{flexDirection:'row', justifyContent:"center", alignItems:"center"}}>
                          <StarRating
                            disabled={false}
                            maxStars={1}
                            fullStarColor="#c49c0c"
                            emptyStarColor="#c49c0c"
                            rating={this.state.starCount}
                            starSize={hp(3)}
                            starStyle={{borderColor:"black"}}
                          />
                          <Text style={{fontSize:hp(2)}}>5</Text>
                        </View>
                      </View>
                      <View style={{flex:0.34, justifyContent:"center", alignItems:"center"}}>
                        <Text style={{fontSize:hp(2), color:"grey"}}>Kecepatan</Text>
                        <View style={{flexDirection:'row', justifyContent:"center", alignItems:"center"}}>
                          <StarRating
                            disabled={false}
                            maxStars={1}
                            fullStarColor="#c49c0c"
                            emptyStarColor="#c49c0c"
                            rating={this.state.starCount}
                            starSize={hp(3)}
                            starStyle={{borderColor:"black"}}
                          />
                          <Text style={{fontSize:hp(2)}}>4</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
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
          </View>
          <View style={{flex:0.2}}>
            <View style={{width:"90%", alignSelf:"center", marginTop:hp(-1),marginBottom:hp(2)}}>
              <Text style={{fontSize:hp(2.5)}}>History Task</Text>
                <View style={{marginTop:hp(1), marginBottom:hp(1)}}>
                  <FlatList
                    data={timeline}
                    horizontal={false}
                    renderItem={({item}) =>
                      <View style={{flexDirection:"row"}}>
                        <View style={{flex:0.2}}>
                          <Text style={{fontSize:hp(2), fontWeight:"bold"}}>{item.date}</Text>
                        </View>
                        <View style={{flex:0.1, justifyContent:"center", flexDirection:"column"}}>
                          <View style={{width:imgX(4), height:imgY(4), borderRadius:imgY(2), backgroundColor:"blue"}}/>
                          <View style={{flex:1, borderRightWidth:1, borderColor:"blue", marginRight:wp(6.8)}}/>
                        </View>
                        <View style={{flex:0.7, marginBottom:hp(1), marginTop:hp(1), justifyContent:"center", flexDirection:"column", paddingTop:hp(2), paddingBottom:hp(2), paddingLeft:hp(2), paddingRight:hp(2), backgroundColor:"white", borderRadius:hp(1)}}>
                          <Text style={{fontSize:hp(2)}}>{item.content}</Text>
                          <View style={{marginTop:hp(1), marginBottom:hp(1), borderBottomWidth:1, borderColor:"#e3e1e1"}}/>
                          <Text style={{fontSize:hp(1.8), color:"grey"}}>{item.time}</Text>
                        </View>
                      </View>
                    }
                    keyExtractor={item => item.id.toString()}
                  />
                </View>
            </View>
          </View>
        </ScrollView>
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

export default connect(mapStateToProps)(ProofDelivery)