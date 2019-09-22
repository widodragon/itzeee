import React, { Component } from 'react';
import {Alert, PixelRatio, ImageBackground, FlatList, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from "react-redux";
import {hp,wp, imgX, imgY} from '../../helpers/Responsive';
import DashboardCard from '../../components/Dashboard/DashboardCard';
import HeaderBar from '../../components/Dashboard/HeaderBar';
import { Container, Spinner, Button, Header, Left, Thumbnail, Body, Right,Title, Text, View, Content, Footer, Card, CardItem } from 'native-base';
import {getData} from '../../redux/actions/promotions';
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
class Profile extends Component {
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
            <Text style={{fontSize:hp(2.5), color:"white"}}>Akun Saya</Text>
          </View>
        </View>
        <View style={{flex:0.7, backgroundColor:"#e3e1e1"}}>
          <View style={{width:"90%", alignSelf:"center", marginTop:hp(23.5)}}>
            <ScrollView>
            <View style={{marginBottom:hp(0.5)}}>
              <FlatList
                data={this.state.menu}
                horizontal={false}
                renderItem={({item}) =>
                <View>
                  <TouchableNativeFeedback onPress={() =>item.button()} >
                    <View style={{flex:1, backgroundColor:"white", borderRadius:hp(1), marginBottom:hp(2), flexDirection:"row", paddingBottom:hp(2), paddingTop:hp(2)}}>
                      <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                        <Icon name={item.icon} size={hp(3)} color="blue" light />
                      </View>
                      <View style={{flex:0.65, flexDirection:"column"}}>
                        <Text style={{fontSize:hp(2), color:"blue"}}>{item.name}</Text>
                      </View>
                      <View style={{flex:0.15, justifyContent:"center", alignItems:"center"}}>
                        <Icon name="chevron-right" size={hp(3)} color="blue" light />
                      </View>
                    </View>
                  </TouchableNativeFeedback>
                </View>
                }
                keyExtractor={item => item.id.toString()}
              />
                <View>
                  <TouchableNativeFeedback onPress={() =>{}} >
                    <View style={{flex:1, backgroundColor:"white", borderRadius:hp(1), marginBottom:hp(2), flexDirection:"row", paddingBottom:hp(2), paddingTop:hp(2)}}>
                      <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                        <Icon name="sign-out-alt" size={hp(3)} color="red" light />
                      </View>
                      <View style={{flex:0.65, flexDirection:"column"}}>
                        <Text style={{fontSize:hp(2), color:"red"}}>Keluar</Text>
                      </View>
                      <View style={{flex:0.15, justifyContent:"center", alignItems:"center"}}>
                      </View>
                    </View>
                  </TouchableNativeFeedback>
                </View>
            </View>
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
              <Text style={{fontSize:hp(3), color:"black"}}>Exsperside</Text>
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
            <View style={{width:"90%", alignSelf:"center", borderColor:"grey", borderBottomWidth:1}} />
            <View style={{width:"90%", alignSelf:"center"}}>
              <View style={{paddingTop:hp(1), paddingBottom:hp(1), justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize:hp(2), color:"grey"}}>Kualifikasi</Text>
              </View>
              <View style={{paddingBottom:hp(1), justifyContent:"center", alignItems:"center"}}>
                <FlatList
                  data={qualification}
                  horizontal={true}
                  renderItem={({item}) =>
                  <View>
                    <TouchableNativeFeedback onPress={() =>{}} >
                      <View style={{width:imgX(15), marginRight:hp(1), justifyContent:"center", alignItems:"center", height:imgY(15), borderRadius:imgY(7.5), backgroundColor:"blue"}}> 
                        <Icon name={item.name} size={hp(3)} color="white" />
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                  }
                  keyExtractor={item => item.id.toString()}
                />
              </View>
            </View>
          </View>
        </View>
        <Dialog
          visible={this.state.visible}
          rounded={false}
          footer={
            <View style={{flexDirection:"row", marginBottom:hp(5), marginRight:hp(2), justifyContent:"space-between"}}>
              <View style={{flex:0.5}} />
              <TouchableOpacity style={{flex:0.5, alignItems:"flex-end"}} onPress={()=>this.setState({ visible: false })}>
                <Text style={{color:"red"}}>Batalkan</Text>
              </TouchableOpacity>
            </View>
          }
          dialogAnimation={
            new ScaleAnimation({
              initialValue: 0, // optional
              useNativeDriver: true, // optional
            })
          }
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          <DialogContent 
            style={{ 
                paddingLeft: 0,
                paddingRight: 0,
                paddingBottom: 0,
            }}
          >
            <View>
              <Image source={{uri:"https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-cute-sky-cosmic-illustration-background-backgrounduniverseplanetadvertising-backgroundbackground-materialpsd-image_60139.jpg"}} style={{width:wp(80), height:hp(30)}} />
              <Text style={{fontSize:hp(2.5), marginLeft:wp(3), marginTop:hp(3), color:"blue"}}>Call</Text>
              <View style={{borderBottomWidth:1, marginLeft:wp(3),marginRight:wp(3), marginTop:hp(1), borderColor:"grey" }} />
              <Text style={{fontSize:hp(2.5), marginLeft:wp(3),marginTop:hp(3), color:"blue"}}>Email</Text>
              <View style={{borderBottomWidth:1, marginLeft:wp(3),marginRight:wp(3), marginTop:hp(1), borderColor:"grey" }} />
              <Text style={{fontSize:hp(2.5), marginLeft:wp(3),marginTop:hp(3), color:"blue"}}>Chat Us</Text>
            </View>
          </DialogContent>
        </Dialog>
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


export default connect(mapStateToProps)(Profile)