import React, { Component } from 'react';
import {connect} from "react-redux";
import {FlatList, TouchableNativeFeedback, StyleSheet, Image, TouchableOpacity, ScrollView, Picker, ImageBackground} from 'react-native';
import TextInputDefault from '../../components/Auth/TextInputDefault';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text, Card} from "native-base";
import {getLogin} from '../../redux/actions/login';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp} from '../../helpers/Responsive';
import DatePicker from 'react-native-datepicker'
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
  }
]
class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname   : '',
      email      : '',
      password   : '',
      phone      : '',
      token      : '',
      date:"2016-05-15"
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
            <View style={{flexDirection:"row"}}>
              <View style={{flex:0.5,backgroundColor:"white", marginRight:wp(0.5), paddingTop:hp(1),paddingBottom:hp(1), flexDirection:"row", borderRadius:hp(1), marginBottom:hp(2)}}>
                <View style={{flex:0.02, justifyContent:"center", alignItems:"center"}}>
                </View>
                <View style={{flex:0.95, justifyContent:"center"}}>
                  <Picker selectedValue = {this.state.religious} onValueChange = {this.updateReligious}>
                     <Picker.Item color="grey" label = "Status" value = "Proses" />
                     <Picker.Item color="grey" label = "Otomotif" value = "otomotif" />
                     <Picker.Item color="grey" label = "Teknologi" value = "teknologi" />
                     <Picker.Item color="grey" label = "Kesehatan" value = "kesehatan" />
                  </Picker>
                </View>
                <View style={{flex:0.03}}></View>
              </View>
              <DatePicker
                style={{flex:0.5, marginLeft:wp(0.5), backgroundColor:"white", paddingTop:hp(1),paddingBottom:hp(1), flexDirection:"row", borderRadius:hp(1), marginBottom:hp(2)}}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    right:0 ,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />
            </View>
            <FlatList
              data={penawaran}
              horizontal={false}
              renderItem={({item}) =>
              <View style={{borderRadius:hp(1), marginBottom:hp(2)}}>
                <TouchableNativeFeedback onPress={() =>this.props.navigation.navigate('DetailRequest')}>
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
                              <View style={{width:40, height:40, justifyContent:"center", alignItems:"center", borderRadius:20, backgroundColor:"blue"}}>
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
                <TouchableOpacity style={{borderBottomLeftRadius: hp(1),borderBottomRightRadius: hp(1),justifyContent:"center", alignItems:"center", paddingBottom:hp(2), paddingTop:hp(2), backgroundColor:"#dba309"}}>
                  <Text style={{fontSize:hp(2), color:"white"}}>Sedang Dikerjakan</Text>
                </TouchableOpacity>
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

export default connect(mapStateToProps)(Work)