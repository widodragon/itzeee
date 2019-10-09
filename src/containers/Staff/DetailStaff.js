import React, { Component } from 'react';
import {Alert, PixelRatio, ImageBackground, FlatList, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from "react-redux";
import {hp,wp, imgX, imgY} from '../../helpers/Responsive';
import DashboardCard from '../../components/Dashboard/DashboardCard';
import HeaderBar from '../../components/Dashboard/HeaderBar';
import { Container, Spinner, Button, Header, Left, Thumbnail, Body, Right,Title, Text, View, Content, Footer, Card, CardItem } from 'native-base';
import {getData} from '../../redux/actions/api';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationActions, StackActions } from 'react-navigation';
import StarRating from 'react-native-star-rating';
import Dialog, { DialogContent, ScaleAnimation, DialogFooter, DialogButton } from 'react-native-popup-dialog';

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
const penawaran=[
  {
    id:1,
    nid:"#434234738749",
    title:"AC dan keran rusak",
    name:"Rahayu Sandra",
    address:"Komplek Bentang Bahari, Jalan Kenari II No.19, RT 03/04, Tanah Baru, Depok",
    price:"600000",
    icon:[
      {
        id:1,
        name:"shower"
      },
      {
        id:2,
        name:"water"
      }
    ]
  },
  {
    id:2,
    nid:"#434234738749",
    title:"AC dan keran rusak",
    name:"Rahayu Sandra",
    address:"Komplek Bentang Bahari, Jalan Kenari II No.19, RT 03/04, Tanah Baru, Depok",
    price:"600000",
    icon:[
      {
        id:1,
        name:"shower"
      },
      {
        id:2,
        name:"water"
      }
    ]
  }

]
class DetailStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parent : [],
      promotion : [],
      news_info : [],
      page : 1,
      company_logo:null,
      banner_image:null,
      points:0,
      notification_count:0,
      isLoading:false,
      starCount: 3.5,
      visible:false,
      menu : [
        {
          id:1,
          name:"Ubah Profile",
          icon:"edit",
          button:()=>{
          }
        },
        {
          id:2,
          name:"Atur Staff",
          icon:"user",
          button:()=>{
            this.props.navigation.navigate('Staff')
          }
        },
        {
          id:3,
          name:"Atur Akun Bank",
          icon:"building",
          button:()=>{
            this.props.navigation.navigate('BankAccount')
          }
        },
        {
          id:4,
          name:"Hubungi Kami",
          icon:"phone",
          button:()=>{
            this.setState({visible:true})
          }
        },
        {
          id:5,
          name:"Ubah Password",
          icon:"lock",
          button:()=>{
            this.props.navigation.navigate("ChangePassword")
          }
        },
      ]
    }
  }
  async onExit(){
    try{
      await AsyncStorage.removeItem('token');
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'OnBoarding' })],
        });
        this.props.navigation.dispatch(resetAction);
    }catch(e){
      alert("e");
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:0.3, width:"100%", backgroundColor:"#0969A5", height:hp(25.5)}}>
          <View style={{top:"20%",flexDirection:"row", alignSelf:"center", position:"absolute"}}>
            <Text style={{fontSize:hp(2.5), color:"white"}}>Detail Staff</Text>
          </View>
        </View>
        <View style={{flex:0.7, backgroundColor:"#e3e1e1"}}>
          <View style={{width:"90%", alignSelf:"center", marginTop:hp(20)}}>
          <Text style={{fontSize:hp(2.3)}}>Riwayat Pekerjaan</Text>
          <ScrollView style={{marginTop:hp(1)}}>
            <FlatList
              data={penawaran}
              style={{marginBottom:hp(3), marginTop:hp(2)}}
              horizontal={false}
              renderItem={({item}) =>
              <View style={{borderRadius:hp(1), marginBottom:hp(2)}}>
                <TouchableNativeFeedback onPress={() =>this.props.navigation.navigate('ProcessBidding')} >
                  <View style={{flex:1, borderTopLeftRadius: hp(1),borderTopRightRadius: hp(1), backgroundColor:"white", flexDirection:"column", paddingLeft:hp(2), paddingRight:hp(2), paddingBottom:hp(1), paddingTop:hp(1)}}>
                    <View style={{flex:0.1,flexDirection:"row", justifyContent:"space-between", marginBottom:hp(1)}}>
                      <Text style={{fontSize:hp(2), fontWeight:"bold"}}>{item.title}</Text>
                      <Text style={{fontSize:hp(2)}}>{item.nid}</Text>
                    </View>
                    <View style={{flex:0.1, flexDirection:"row", marginBottom:hp(1)}}>
                      <View style={{flex:0.1, justifyContent:"center"}}>
                        <Icon name="user" size={hp(2)} color="blue" />
                      </View>
                      <View style={{flex:0.9}}>
                        <Text style={{fontSize:hp(2)}}>{item.name}</Text>
                      </View>
                    </View>
                    <View style={{flex:0.1, flexDirection:"row", marginBottom:hp(1)}}>
                      <View style={{flex:0.1, justifyContent:"center"}}>
                        <Icon name="map-marker" size={hp(2)} color="blue" />
                      </View>
                      <View style={{flex:0.9}}>
                        <Text style={{fontSize:hp(2)}}>{item.address}</Text>
                      </View>
                    </View>
                    <View style={{flex:0.1, flexDirection:"row", marginBottom:hp(1)}}>
                      <View style={{flex:0.1, justifyContent:"center"}}>
                        <Text style={{fontSize:hp(2), color:"blue"}}>Rp</Text>
                      </View>
                      <View style={{flex:0.9}}>
                        <Text style={{fontSize:hp(2)}}>{item.price}</Text>
                      </View>
                    </View>
                    <View style={{flex:0.3, flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2)}}>
                      <View style={{flex:0.8}}>
                        <FlatList
                          data={item.icon}
                          horizontal={true}
                          renderItem={({item}) =>
                            <View style={{marginRight:hp(0.5)}}>
                              <View style={{width:imgX(15), height:imgY(15), justifyContent:"center", alignItems:"center", borderRadius:imgY(15/2), backgroundColor:"blue"}}>
                                <Icon name={item.name} size={hp(3)} color="white" />
                              </View>
                            </View>
                          }
                          keyExtractor={item => item.id.toString()}
                        />
                      </View>
                      <View style={{flex:0.2, flexDirection:"column"}}>
                        <Text style={{fontSize:hp(2), color:"grey"}}>Done At</Text>
                        <Text style={{fontSize:hp(2), color:"red"}}>00.00.02</Text>
                      </View>
                    </View>
                  </View>
                </TouchableNativeFeedback>
              </View>
              }
              keyExtractor={item => item.title}
            />
            </ScrollView>
          </View>
        </View>
        <View style={{position:"absolute", height:hp(30), borderRadius:hp(1), backgroundColor:"white", width:"90%", alignSelf:"center", top:hp(17)}}>
          <TouchableNativeFeedback style={{paddingTop:hp(5),paddingBottom:hp(5)}} onPress={()=>{this.onExit()}}>
            <View style={{top:"-20%", alignSelf:"center", width:imgX(40), height:imgY(40), borderRadius:imgY(20), position:"absolute", backgroundColor:"grey"}}>
            </View>
          </TouchableNativeFeedback>
          <View style={{flexDirection:"column", marginTop:hp(8)}}>
            <View style={{justifyContent:"center", alignItems:"center", marginTop:hp(1)}}>
              <Text style={{fontSize:hp(3), color:"black"}}>Budi Hartajo</Text>
              <Text style={{fontSize:hp(2), color:"black"}}>Technician</Text>
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
            <View style={{width:"90%", alignSelf:"center"}}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
  return {
    promotion: state.promotion
  }
}


export default connect(mapStateToProps)(DetailStaff)