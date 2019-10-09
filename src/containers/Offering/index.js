import React, { Component } from 'react';
import {connect} from "react-redux";
import {FlatList, TouchableNativeFeedback, StyleSheet, Image, TouchableOpacity, ScrollView, Picker, ImageBackground} from 'react-native';
import TextInputDefault from '../../components/Auth/TextInputDefault';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text, Card} from "native-base";
import {getLogin} from '../../redux/actions/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp, imgX, imgY} from '../../helpers/Responsive';
import RNPickerSelect from 'react-native-picker-select';
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
    id:1,
    nid:"#434234738749",
    title:"Pasang lampu",
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
    id:1,
    nid:"#434234738749",
    title:"Pasang pipa toren air",
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
class Penawaran extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname   : '',
      email      : '',
      password   : '',
      phone      : '',
      token      : ''
    }
  }
  // componentWillUnmount(){
  //     if(this.state.token===null || this.state.token === '' ){
  //       this.props.navigation.navigate('Login');
  //     }else{
  //       const resetAction = StackActions.reset({
  //         index: 0,
  //         actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
  //       });
  //       this.props.navigation.dispatch(resetAction);
  //     }
  // }
  static navigationOptions = {
    title: 'Pendaftaran Mitra',
    headerStyle: {
      backgroundColor: '#0969A5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  async onLogin(){
    try{
      const data={
        username:this.state.username,
        password:this.state.password,
      };
      await this.props.dispatch(getLogin(data));
      AsyncStorage.setItem('token', this.props.login.login.token);
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
      });
      this.props.navigation.dispatch(resetAction);
    }catch(e){
      alert("Please check your data again!");
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{width:"90%", alignSelf:"center", marginTop:hp(2)}}>
            <View style={{backgroundColor:"white", paddingTop:hp(1),paddingBottom:hp(1), flexDirection:"row", borderRadius:hp(1), marginBottom:hp(2)}}>
              <View style={{flex:0.02, justifyContent:"center", alignItems:"center"}}>
              </View>
              <View style={{flex:0.95, justifyContent:"center"}}>
                <RNPickerSelect
                    onValueChange={(service)=>this.setState({service})}
                    placeholder={{label:"Tipe Mitra"}}
                    useNativeAndroidPickerStyle={false}
                    textInputProps={{fontSize:hp(2)}}
                    items={[
                        { label: 'Otomotif', value: 'Penawaran Terbaru', color:"grey" },
                        { label: 'Teknologi', value: 'teknologi', color:"grey" },
                        { label: 'Kesehatan', value: 'kesehatan', color:"grey" },
                    ]}
                />
              </View>
              <View style={{flex:0.03}}></View>
            </View>
            <FlatList
              data={penawaran}
              horizontal={false}
              renderItem={({item}) =>
              <View style={{marginBottom:hp(2)}}>
                <TouchableNativeFeedback onPress={() =>this.props.navigation.navigate('DetailBidding')} >
                  <View style={{flex:1, backgroundColor:"white", borderRadius:hp(1), flexDirection:"column", paddingLeft:hp(2), paddingRight:hp(2), paddingBottom:hp(1), paddingTop:hp(1)}}>
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
                        <Text style={{fontSize:hp(2), color:"grey"}}>Expired At</Text>
                        <Text style={{fontSize:hp(2), color:"red"}}>00.00.02</Text>
                      </View>
                    </View>
                  </View>
                </TouchableNativeFeedback>
              </View>
              }
              keyExtractor={item => item.title}
            />
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
    backgroundColor:"#e3e1e1",
  }
})

export default connect(mapStateToProps)(Penawaran)