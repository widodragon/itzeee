import React, { Component } from 'react';
import {Alert, ImageBackground, FlatList, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from "react-redux";
import {hp,wp,imgX,imgY} from '../../helpers/Responsive';
import DashboardCard from '../../components/Dashboard/DashboardCard';
import HeaderBar from '../../components/Dashboard/HeaderBar';
import { Container, Spinner, Button, Header, Left, Thumbnail, Body, Right,Title, Text, View, Content, Footer, Card, CardItem } from 'native-base';
import {getData} from '../../redux/actions/api';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationActions, StackActions } from 'react-navigation';
import Dialog, { DialogContent, ScaleAnimation, DialogFooter, DialogButton } from 'react-native-popup-dialog';

const information = [
  {
    id      : 1,
    status  : 1,
    icon    : "briefcase",
    content : "Lorem ipsum sir helmet ados super alo star indie soe mara tina pansos malam sikar",
    date    : "Aug 15, 2019 10.00 AM"
  },
  {
    id      : 2,
    status  : 3,
    icon    : "hands-helping",
    content : "Lorem ipsum sir helmet ados super alo star indie soe mara tina pansos malam sikar",
    date    : "Aug 15, 2019 10.00 AM"
  },
  {
    id      : 3,
    status  : 2,
    icon    : "briefcase",
    content : "Lorem ipsum sir helmet ados super alo star indie soe mara tina pansos malam sikar",
    date    : "Aug 15, 2019 10.00 AM"
  },
  {
    id      : 4,
    status  : 1,
    icon    : "briefcase",
    content : "Lorem ipsum sir helmet ados super alo star indie soe mara tina pansos malam sikar",
    date    : "Aug 15, 2019 10.00 AM"
  }
]
class Dashboard extends Component {
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
      visible:false
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
      <Container style={{flex:1}}>
        <View style={{flex:0.3, width:"100%", backgroundColor:"#0969A5", height:hp(300)}}>
          <View style={{top:"20%",flexDirection:"row", left:"5%", position:"absolute"}}>
            <Text style={{fontSize:hp(2.5), color:"white"}}>Experside</Text>
          </View>
          <TouchableNativeFeedback style onPress={()=>this.props.navigation.navigate('Wallet')}>
            <View style={{top:"20%",flexDirection:"row", right:"5%", width:wp(40), position:"absolute", paddingTop:hp(1), borderRadius:hp(1), paddingBottom:hp(1), backgroundColor:"#58b5e0"}}>
              <View style={{flex:0.3, justifyContent:"center", alignItems:"center"}}>
                <Icon name="bell" size={hp(2)} color="white" light />
              </View>
              <View style={{flex:0.7, justifyContent:"center"}}>
                <Text style={{fontSize:hp(2.5)}}>Rp 450.000</Text>
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={{flex:0.7, backgroundColor:"#e3e1e1"}}>
          <View style={{width:"90%", alignSelf:"center", marginTop:hp(20.5)}}>
            <Text style={{fontSize:hp(2.5),marginBottom:hp(2)}}>Aktifitas Terakhir</Text>
            <ScrollView style={{marginBottom:hp(5)}}>
              <FlatList
                data={information}
                horizontal={false}
                renderItem={({item}) =>
                <View>
                  <TouchableNativeFeedback onPress={
                    item.status==1?() =>this.props.navigation.navigate("DetailBidding"):item.status==3?() =>this.props.navigation.navigate("ProofDelivery"):item.status==2?()=>this.setState({visible:true}):null
                  } >
                    <View style={{flex:1, marginBottom:hp(2), borderRadius:hp(1), backgroundColor:"white", flexDirection:"row", paddingBottom:hp(2), paddingTop:hp(2), elevation:2}}>
                      <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                        <Icon name={item.icon} size={hp(3)} color="blue" light />
                      </View>
                      <View style={{flex:0.75, flexDirection:"column"}}>
                        <Text style={{fontSize:hp(2)}}>{item.content}</Text>
                        <View style={{flexDirection:"row"}}>
                          <View style={{flex:0.1, justifyContent:"center"}}>
                            <Icon name="clock" color="black" size={hp(1)} />
                          </View>
                          <View style={{flex:0.9, justifyContent:"center"}}>
                            <Text style={{fontSize:hp(1.5), color:"grey"}}>{item.date}</Text>
                          </View>
                        </View>
                      </View>
                      <View style={{flex:0.05}}></View>
                    </View>
                  </TouchableNativeFeedback>
                </View>
                }
                keyExtractor={item => item.id.toString()}
              />
            </ScrollView>
          </View>
        </View>
        <View style={{position:"absolute", height:hp(30), borderRadius:hp(1), backgroundColor:"white", width:"90%", alignSelf:"center", top:hp(15)}}>
          <View style={{flexDirection:"column"}}>
            <View style={{justifyContent:"center", alignItems:"center",marginBottom:hp(2), marginTop:hp(1)}}>
              <Text style={{fontSize:hp(2), color:"grey"}}>24 Agustus 2019</Text>
            </View>
            <View style={{justifyContent:"center", alignItems:"center",marginBottom:hp(1), marginTop:hp(1)}}>
              <Text style={{fontSize:hp(2.5)}}>Total Pendapatan</Text>
            </View>
            <View style={{justifyContent:"center", alignItems:"center",marginBottom:hp(2), marginTop:hp(1)}}>
              <Text style={{fontSize:hp(3), fontWeight:"bold"}}>Rp 450.000</Text>
            </View>
            <View style={{width:"90%", alignSelf:"center", borderColor:"grey", borderBottomWidth:1}} />
            <View style={{width:"90%", alignSelf:"center", flexDirection:"row"}}>
              <View style={{flex:0.5, flexDirection:"column", paddingTop:hp(1), borderColor:"grey", paddingBottom:hp(1), borderRightWidth:1, justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize:hp(2)}}>Penawaran Tersedia</Text>
                <Text style={{fontSize:hp(3), fontWeight:"bold"}}>35</Text>
              </View>
              <View style={{flex:0.5, flexDirection:"column", paddingTop:hp(1), paddingBottom:hp(1), justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize:hp(2)}}>Penawaran Tersedia</Text>
                <Text style={{fontSize:hp(3), fontWeight:"bold"}}>30</Text>
              </View>
            </View>
          </View>
        </View>
        <Dialog
          visible={this.state.visible}
          rounded={false}
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
              <View style={{width:wp(85), marginTop:hp(3), justifyContent:"space-between", flexDirection:"row"}}>
                <Text></Text>
                <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('Work')
                  this.setState({visible:false})
                }}>
                  <Icon name="times" size={hp(3)} color="grey" light />
                </TouchableOpacity>
              </View>
              <Image source={{uri:"https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-cute-sky-cosmic-illustration-background-backgrounduniverseplanetadvertising-backgroundbackground-materialpsd-image_60139.jpg"}} style={{width:imgX(80), height:imgY(80), borderRadius:imgY(40), marginTop:hp(2), marginLeft:wp(10), marginRight:wp(10), alignSelf:"center"}}/>
              <Text style={{fontSize:hp(3), alignSelf:"center", marginTop:wp(3), fontWeight:"bold"}}>Selamat!</Text>
              <Text style={{fontSize:hp(2.5), width: wp(80), textAlign:"center", marginLeft:wp(5), marginRight:wp(5), marginTop:wp(2.5), color:"grey"}}>Anda terpilih sebagai mitra kami untuk request AC dan pasang pipa air</Text>
              <TouchableOpacity 
                onPress={()=>{
                  this.props.navigation.navigate('DetailRequest')
                  this.setState({visible:false})
                }} 
                style={{marginLeft:wp(5), marginRight:wp(5), marginTop:wp(2.5), marginBottom:hp(2.5)}}
              >
                <Text style={{fontSize:hp(2.5), width: wp(80), textAlign:"center", color:"blue"}}>Lihat Detail</Text>
              </TouchableOpacity>
            </View>
          </DialogContent>
        </Dialog>
      </Container>
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


export default connect(mapStateToProps)(Dashboard)