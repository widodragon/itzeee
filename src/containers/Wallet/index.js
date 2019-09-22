import React, { Component } from 'react';
import {Alert, ImageBackground, FlatList, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from "react-redux";
import {hp,wp} from '../../helpers/Responsive';
import DashboardCard from '../../components/Dashboard/DashboardCard';
import HeaderBar from '../../components/Dashboard/HeaderBar';
import { Container, Spinner, Button, Header, Left, Thumbnail, Body, Right,Title, Text, View, Content, Footer, Card, CardItem } from 'native-base';
import {getData} from '../../redux/actions/promotions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationActions, StackActions } from 'react-navigation';

const information = [
  {
    id      : 1,
    status  : "Penambahan",
    content : "Invoice #45354624",
    result  : "+ Rp. 1200000",
    date    : "Aug 15, 2019 10.00 AM",
    saldo   : "Rp 3500000"
  },
  {
    id      : 2,
    status  : "Penambahan",
    content : "Invoice #45354624",
    result  : "+ Rp. 1200000",
    date    : "Aug 15, 2019 10.00 AM",
    saldo   : "Rp 3500000"
  },
  {
    id      : 3,
    status  : "Penarikan",
    content : "Experside #45354624",
    result  : "- Rp. 1200000",
    date    : "Aug 15, 2019 10.00 AM",
    saldo   : "Rp 3500000"
  },
  {
    id      : 4,
    status  : "Penarikan",
    content : "Experside #45354624",
    result  : "+ Rp. 1200000",
    date    : "Aug 15, 2019 10.00 AM",
    saldo   : "Rp 3500000"
  }
]
class Wallet extends Component {
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
      isLoading:false
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
        <View style={{flex:0.3, width:"100%", backgroundColor:"blue", height:hp(300)}}>
          <View style={{top:"20%",flexDirection:"row", alignSelf:"center", position:"absolute"}}>
            <Text style={{fontSize:hp(2.5), color:"white"}}>Itzeee Wallet</Text>
          </View>
        </View>
        <View style={{flex:0.7, backgroundColor:"#e3e1e1"}}>
          <View style={{width:"90%", alignSelf:"center", marginTop:hp(8.5)}}>
            <Text style={{fontSize:hp(2.5),marginBottom:hp(2)}}>Aktifitas Terakhir</Text>
            <ScrollView style={{marginBottom:hp(6)}}>
              <FlatList
                data={information}
                horizontal={false}
                renderItem={({item}) =>
                <View>
                  <TouchableNativeFeedback onPress={item.status=="Penambahan"?() =>this.props.navigation.navigate('DetailDeposit'):() =>this.props.navigation.navigate('DetailWithdraw')} >
                    <View style={{flex:1, borderRadius:hp(1), backgroundColor:"white", marginBottom:hp(2), flexDirection:"row", paddingBottom:hp(2), paddingTop:hp(2)}}>
                      <View style={{flex:0.1}}>
                      </View>
                      <View style={{flex:0.5, flexDirection:"column"}}>
                        <View style={{flex:0.8}}>
                          <Text style={{fontSize:hp(2)}}>{item.status}</Text>
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
                        <View style={{flex:0.2, marginTop:hp(1), justifyContent:"center"}}>
                          <Text style={{fontSize:hp(2)}}>Saldo Akhir</Text>
                        </View>
                      </View>
                      <View style={{flex:0.3,flexDirection:"column"}}>
                        <View style={{flex:0.8, justifyContent:"center", alignItems:"flex-end"}}>
                        {
                          item.status=="Penarikan"?
                          <Text style={{fontSize:hp(2), color:"red", fontWeight:"bold"}}>{item.result}</Text>
                          :
                          <Text style={{fontSize:hp(2), color:"blue", fontWeight:"bold"}}>{item.result}</Text>
                        }
                        </View>
                        <View style={{flex:0.2, marginTop:hp(1), justifyContent:"center", alignItems:"flex-end"}}>
                          <Text style={{fontSize:hp(2), fontWeight:"bold"}}>{item.saldo}</Text>
                        </View>
                      </View>
                      <View style={{flex:0.1}}></View>
                    </View>
                  </TouchableNativeFeedback>
                </View>
                }
                keyExtractor={item => item.id.toString()}
              />
            </ScrollView>
          </View>
        </View>
        <View style={{flexDirection:"row", position:"absolute", height:hp(20), borderRadius:hp(1), backgroundColor:"white", width:"90%", alignSelf:"center", top:hp(15)}}>
            <View style={{flex:0.1}}></View>
            <View style={{flex:0.6, justifyContent:"center", flexDirection:"column"}}>
              <Text style={{fontSize:hp(2.5), color:"grey"}}>Saldo Saat Ini</Text>
              <Text style={{fontSize:hp(3), fontWeight:"bold"}}>Rp 450000</Text>
            </View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Withdraw')} style={{flex:0.3, flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <Image source={require('../../assets/withdraw.png')} style={{width:wp(10), height:hp(5), resizeMode:"cover"}} />
              <Text style={{fontSize:hp(2), color:"blue"}}>Penarikan</Text>
            </TouchableOpacity>
        </View>
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


export default connect(mapStateToProps)(Wallet)