import React, { Component } from 'react';
import {Alert, ImageBackground, TextInput, FlatList, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from "react-redux";
import {hp,wp} from '../../helpers/Responsive';
import DashboardCard from '../../components/Dashboard/DashboardCard';
import HeaderBar from '../../components/Dashboard/HeaderBar';
import { Container, Spinner, Button, Header, Left, Thumbnail, Body, Right,Title, Text, View, Content, Footer, Card, CardItem } from 'native-base';
import {getData} from '../../redux/actions/api';
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
class Withdraw extends Component {
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
        <View style={{flex:0.1, width:"90%", justifyContent:"center", alignItems:"center", flexDirection:"row", paddingTop:hp(1.5), paddingBottom:hp(1.5), marginBottom:hp(2), alignSelf:"center",borderRadius:hp(0.5), marginTop:hp(2)}}>
          <Text style={{fontSize:hp(2.3)}}>Masukkan jumlah uang yang akan Anda tarik</Text>
        </View>
        <View style={{flex:0.1, paddingRight:wp(5), justifyContent:"center", paddingLeft:wp(5), borderBottomWidth:1, borderColor:"#e3e1e1", width:"90%", flexDirection:"column", paddingTop:hp(1), paddingBottom:hp(1), alignSelf:"center",borderRadius:hp(1), backgroundColor:"white"}}>
          <TextInput 
            placeholder="Jumlah Uang"
            style={{borderColor:"grey", fontSize:hp(2.3)}}
            keyboardType="default"
            placeholderTextColor="grey"
            underlineColorAndroid='transparent'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <View style={{flex:0.1, width:"97%", paddingTop:hp(1.5), alignSelf:"center", marginTop:hp(2)}}>
          <Slider
            style={{width: "100%", height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
        <View style={{flex:0.1, width:"90%", flexDirection:"row", borderBottomWidth:1, borderColor:"grey", alignSelf:"center", justifyContent:"space-between"}}>
          <Text style={{fontSize:hp(2.3)}}>Saldo Terakhir</Text>
          <Text style={{fontSize:hp(2.3)}}>Rp.2.500.000</Text>
        </View>
        <View style={{flex:0.1, width:"90%", flexDirection:"row", marginTop:hp(2), alignSelf:"center"}}>
          <Text style={{fontSize:hp(2.3)}}>Tujuan Akun Bank</Text>
        </View>
        <View style={{flex:0.4, width:"90%", alignSelf:"center"}}>
          <FlatList
            data={bank_list}
            style={{marginTop:hp(-2)}}
            horizontal={false}
            renderItem={({item}) =>
              <TouchableNativeFeedback onPress={() =>{}} >
                <View style={{flexDirection:"row", marginTop:hp(1), paddingTop:hp(2), paddingBottom:hp(2), backgroundColor:"white", width:"100%", borderRadius:hp(0.5), alignSelf:"center"}}>
                  <View style={{flex:0.1}}></View>
                  <View style={{flex:0.2, justifyContent:"center"}}>
                    <Image source={{uri:item.icon}} style={{width:"100%",height:hp(3), resizeMode:"cover"}} />
                  </View>
                  <View style={{flex:0.1}}></View>
                  <View style={{flex:0.6, justifyContent:"center", flexDirection:"column"}}>
                    <Text style={{fontSize:hp(2), fontWeight:"bold"}}>{item.name}</Text>
                    <Text style={{fontSize:hp(2)}}>{item.no}</Text>
                    <Text style={{fontSize:hp(1.5)}}>{item.user}</Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            }
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <TouchableOpacity style={{flex:0.1, justifyContent:"center", alignItems:"center", paddingTop:hp(1), backgroundColor:"blue", borderRadius:hp(1), paddingBottom:hp(1), marginBottom:hp(2), width:"90%", flexDirection:"row", marginTop:hp(2), alignSelf:"center"}} onPress={()=>this.props.navigation.navigate('ConfirmWithdraw')}>
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


export default connect(mapStateToProps)(Withdraw)