import React, { Component } from 'react';
import {Alert, ImageBackground, FlatList, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from "react-redux";
import {hp,wp, imgX, imgY} from '../../helpers/Responsive';
import DashboardCard from '../../components/Dashboard/DashboardCard';
import HeaderBar from '../../components/Dashboard/HeaderBar';
import { Container, Spinner, Button, Header, Left, Thumbnail, Body, Right,Title, Text, View, Content, Footer, Card, CardItem } from 'native-base';
import {getData} from '../../redux/actions/api';
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
class DetailWithdraw extends Component {
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
  static navigationOptions = {
    title: 'Detail Penarikan',
    headerStyle: {
      backgroundColor: '#0969A5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
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
      <Container style={{flex:1,backgroundColor:"#e3e1e1"}}>
        <View style={{flex:0.1, width:"90%", flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), alignSelf:"center",borderRadius:hp(0.5), backgroundColor:"white", marginTop:hp(2)}}>
            <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
              <View style={{width:50, height:50, borderRadius:25, justifyContent:"center", alignItems:"center", backgroundColor:"#e6eaf0"}}>
                <Image source={require('../../assets/withdraw.png')} style={{width:wp(5), height:hp(3), resizeMode:"cover"}} />
              </View>
            </View>
            <View style={{flex:0.8, flexDirection:"column", justifyContent:"center"}}>
              <Text style={{fontSize:hp(2.5)}}>Penarikan</Text>
              <View style={{fontSize:hp(2), marginTop:hp(1), flexDirection:"row"}}>
                <View style={{flex:0.1, justifyContent:"center"}}>
                  <Icon name="clock" color="black" size={hp(1)} />
                </View>
                <View style={{flex:0.9, justifyContent:"center"}}>
                  <Text style={{fontSize:hp(1.5), color:"grey"}}>Aug 15, 2019 10.00 AM</Text>
                </View>
              </View>
            </View>
        </View>
        <View style={{flex:0.3, paddingRight:wp(5), paddingLeft:wp(5), borderBottomWidth:1, borderColor:"#e3e1e1", width:"90%", flexDirection:"column", paddingTop:hp(2), paddingBottom:hp(2), alignSelf:"center",borderRadius:hp(0.5), backgroundColor:"white", marginTop:hp(0.1)}}>
          <View style={{flex:0.3,paddingBottom:hp(1), paddingTop:hp(1), flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize:hp(2)}}>Jumlah Penarikan</Text>
            <Text style={{fontSize:hp(2), color:"blue"}}>Rp. 1.500.000</Text>
          </View>
          <View style={{flex:0.3,paddingBottom:hp(1), paddingTop:hp(1), flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize:hp(2)}}>Tujuan Akun Bank</Text>
            <Text style={{fontSize:hp(2), fontWeight:"bold"}}>Visa Experside ****-4567</Text>
          </View>
          <View style={{flex:0.3,paddingBottom:hp(1), paddingTop:hp(1), flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize:hp(2)}}>ID Transaksi</Text>
            <Text style={{fontSize:hp(2), fontWeight:"bold"}}>ID #4342423</Text>
          </View>
          <View style={{flex:0.3,paddingBottom:hp(1), paddingTop:hp(1), flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize:hp(2)}}>ID Transaksi</Text>
            <Text style={{fontSize:hp(2), fontWeight:"bold", color:"green"}}>Success</Text>
          </View>
        </View>
        <View style={{flex:0.1, paddingRight:wp(5), justifyContent:"center", paddingLeft:wp(5), borderBottomWidth:1, borderColor:"#e3e1e1", width:"90%", flexDirection:"column", paddingTop:hp(2), paddingBottom:hp(2), alignSelf:"center",borderRadius:hp(0.5), backgroundColor:"white", marginTop:hp(2)}}>
          <View style={{flex:1, justifyContent:"center", flexDirection:"row", justifyContent:"space-between", paddingTop:hp(2)}}>
            <Text style={{fontSize:hp(2)}}>Saldo Terakhir</Text>
            <Text style={{fontSize:hp(2), color:"blue"}}>Rp. 1.500.000</Text>
          </View>
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


export default connect(mapStateToProps)(DetailWithdraw)