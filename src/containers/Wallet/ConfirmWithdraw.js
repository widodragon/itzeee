import React, { Component } from 'react';
import {Alert, ImageBackground, TextInput, FlatList, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from "react-redux";
import {hp,wp} from '../../helpers/Responsive';
import DashboardCard from '../../components/Dashboard/DashboardCard';
import HeaderBar from '../../components/Dashboard/HeaderBar';
import { Container, Spinner, Button, Header, Left, Thumbnail, Body, Right,Title, Text, View, Content, Footer, Card, CardItem } from 'native-base';
import {getData} from '../../redux/actions/promotions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationActions, StackActions } from 'react-navigation';
import Slider from '@react-native-community/slider';

const bank_list = [
  {
    id:1,
    icon:'https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/472px-BCA_logo.svg.png',
    name:'PT.Bank Centra Asia',
    no : '****6258',
    user : 'Experside'
  },
  {
    id:2,
    icon:'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1280px-BNI_logo.svg.png',
    name:'PT.Bank Negara Indonesia',
    no : '****6258',
    user : 'Experside'
  }
]
class ConfirmWithdraw extends Component {
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
      rangeLow:"",
      rangeHigh:""
    }
  }
  static navigationOptions = {
    title: 'Penarikan',
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
        <View style={{flex:0.6, width:"90%", flexDirection:"column", paddingTop:hp(2), paddingBottom:hp(-2), alignSelf:"center",borderRadius:hp(0.5), backgroundColor:"white", marginTop:hp(2)}}>
          <View style={{flex:0.2, width:"100%", borderBottomWidth:1, paddingTop:hp(1), justifyContent:"center", paddingBottom:hp(1), borderColor:"grey", width:"90%", alignSelf:"center"}}>
            <Text style={{fontSize:hp(2.5), color:"black", fontWeight:"bold"}}>Konfirmasi Penarikan</Text>
          </View>
          <View style={{flex:0.1, width:"100%", justifyContent:"center", marginTop:hp(2), paddingTop:hp(1), paddingBottom:hp(1), width:"90%", alignSelf:"center"}}>
            <Text style={{fontSize:hp(2), color:"grey"}}>Tujuan Akun Bank</Text>
          </View>
          <View style={{flex:0.4, borderBottomWidth:1, borderColor:"grey", flexDirection:"row", width:"100%", paddingTop:hp(1), paddingBottom:hp(1), width:"90%", alignSelf:"center"}}>
            <View style={{flex:0.2, justifyContent:"center"}}>
              <Image source={{uri:"https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/472px-BCA_logo.svg.png"}} style={{width:"100%",height:hp(3), resizeMode:"cover"}} />
            </View>
            <View style={{flex:0.1}} />
            <View style={{flex:0.7, flexDirection:"column", justifyContent:"center"}}>
              <Text style={{fontSize:hp(2), fontWeight:"bold"}}>PT. BANK CENTRAL ASIA (BCA)</Text>
              <Text style={{fontSize:hp(2)}}>123241221</Text>
              <Text style={{fontSize:hp(1.5)}}>Experside</Text>
            </View>
          </View>
          <View style={{flex:0.3, justifyContent:"space-between", flexDirection:"row", width:"100%", paddingTop:hp(1), paddingBottom:hp(1), width:"90%", alignSelf:"center"}}>
            <View style={{flexDirection:"column", justifyContent:"center"}}>
              <Text style={{fontSize:hp(2)}}>Jumlah</Text>
              <Text style={{fontSize:hp(2)}}>Penarikan</Text>
            </View>
            <View style={{justifyContent:"center"}}>
              <Text style={{fontSize:hp(3), color:"#d69d18", fontWeight:"bold"}}>Rp. 1.232.000</Text>
            </View>
          </View>
        </View>
        <View style={{flex:0.3}} />
        <TouchableOpacity style={{flex:0.1, justifyContent:"center", alignItems:"center", paddingTop:hp(1), backgroundColor:"blue", borderRadius:hp(1), paddingBottom:hp(1), marginBottom:hp(2), width:"90%", flexDirection:"row", marginTop:hp(2), alignSelf:"center"}} onPress={()=>this.props.navigation.navigate('Wallet')}>
            <Text style={{fontSize:hp(2.5), color:"white"}}>Tarik Uang</Text>
        </TouchableOpacity>
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


export default connect(mapStateToProps)(ConfirmWithdraw)