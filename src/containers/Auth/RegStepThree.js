import React, { Component } from 'react';
import {connect} from "react-redux";
import {Alert, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, Picker, ImageBackground} from 'react-native';
import TextInputDefault from '../../components/Auth/TextInputDefault';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text} from "native-base";
import {getLogin} from '../../redux/actions/login';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp} from '../../helpers/Responsive';
class RegStepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname   : '',
      email      : '',
      password   : '',
      phone      : '',
      token      : '',
      sertifikat : ''
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
  _dayJob=(state)=>{
    if(state=="hari biasa"){
      this.setState({
        job_status:state,
        hari_biasa:true,
        hari_libur:false
      })
    }else{
      this.setState({
        job_status:state,
        hari_libur:true,
        hari_biasa:false
      })
    }
  }
  type_mitra=(state)=>{
    if(state=="plumbing"){
      this.setState({
        type_mitra:state,
        mitra_satu:true,
        mitra_dua:false,
        mitra_tiga:false,
        mitra_empat:false,
        mitra_lima:false
      })
    }else if(state=="air"){
      this.setState({
        type_mitra:state,
        mitra_satu:false,
        mitra_dua:true,
        mitra_tiga:false,
        mitra_empat:false,
        mitra_lima:false
      })
    }else if(state=="lighting"){
      this.setState({
        type_mitra:state,
        mitra_satu:false,
        mitra_dua:false,
        mitra_tiga:true,
        mitra_empat:false,
        mitra_lima:false
      })
    }else if(state=="electrical"){
      this.setState({
        type_mitra:state,
        mitra_satu:false,
        mitra_dua:false,
        mitra_tiga:false,
        mitra_empat:true,
        mitra_lima:false
      })
    }else{
      this.setState({
        type_mitra:state,
        mitra_satu:false,
        mitra_dua:false,
        mitra_tiga:false,
        mitra_empat:false,
        mitra_lima:true
      })
    }
  }
  _timeJob=(state)=>{
    if(state==1){
      this.setState({
        time:"18.00-17.00",
        waktu_satu:true,
        waktu_dua :false,
        waktu_tiga:false
      })
    }else if(state==2){
      this.setState({
        time:"15.00-22.00",
        waktu_satu:false,
        waktu_dua :true,
        waktu_tiga:false
      })
    }else{
       this.setState({
        time:"22.00-06.00",
        waktu_satu:false,
        waktu_dua :false,
        waktu_tiga:true
      })     
    }
  }
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
  getDocument=async()=>{
    // Pick a single file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{width:"90%", flexDirection:"column", alignSelf:"center", marginTop:hp(2)}}>
            <View style={{marginBottom:hp(2)}}>
              <Text style={{fontSize:hp(2), color:"grey", marginBottom:hp(2)}}>Training dan Sertifikat</Text>
              <TouchableOpacity onPress={()=>this._timeJob(3)} style={this.state.waktu_tiga?{marginBottom:hp(2), borderRadius:hp(1), backgroundColor:"grey", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}:{marginBottom:hp(1), borderRadius:hp(1), backgroundColor:"white", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}}>
                <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                  <Icon name="check-circle" size={hp(1)} />
                </View>
                <View style={{flex:0.8, justifyContent:"center"}}>
                  <Text style={{fontSize:hp(2)}}>Kesehatan dan Keselamatan Kerja</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this._timeJob(3)} style={this.state.waktu_tiga?{marginBottom:hp(2), borderRadius:hp(1), backgroundColor:"grey", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}:{marginBottom:hp(1), borderRadius:hp(1), backgroundColor:"white", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}}>
                <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                  <Icon name="check-circle" size={hp(1)} />
                </View>
                <View style={{flex:0.8, justifyContent:"center"}}>
                  <Text style={{fontSize:hp(2)}}>Peraturan Umum Instalasi Listrik</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this._timeJob(3)} style={this.state.waktu_tiga?{marginBottom:hp(2), borderRadius:hp(1), backgroundColor:"grey", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}:{marginBottom:hp(1), borderRadius:hp(1), backgroundColor:"white", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}}>
                <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                  <Icon name="check-circle" size={hp(1)} />
                </View>
                <View style={{flex:0.8, justifyContent:"center"}}>
                  <Text style={{fontSize:hp(2)}}>Water Plumbing</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this._timeJob(3)} style={this.state.waktu_tiga?{marginBottom:hp(2), borderRadius:hp(1), backgroundColor:"grey", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}:{marginBottom:hp(1), borderRadius:hp(1), backgroundColor:"white", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}}>
                <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                  <Icon name="check-circle" size={hp(1)} />
                </View>
                <View style={{flex:0.8, justifyContent:"center"}}>
                  <Text style={{fontSize:hp(2)}}>Air Conditioner</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this._timeJob(3)} style={this.state.waktu_tiga?{marginBottom:hp(2), borderRadius:hp(1), backgroundColor:"grey", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}:{marginBottom:hp(1), borderRadius:hp(1), backgroundColor:"white", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}}>
                <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                  <Icon name="check-circle" size={hp(1)} />
                </View>
                <View style={{flex:0.8, justifyContent:"center"}}>
                  <Text style={{fontSize:hp(2)}}>Lighting</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this._timeJob(3)} style={this.state.waktu_tiga?{marginBottom:hp(2), borderRadius:hp(1), backgroundColor:"grey", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}:{marginBottom:hp(1), borderRadius:hp(1), backgroundColor:"white", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}}>
                <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                  <Icon name="check-circle" size={hp(1)} />
                </View>
                <View style={{flex:0.8, justifyContent:"center"}}>
                  <Text style={{fontSize:hp(2)}}>Electrical</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this._timeJob(3)} style={this.state.waktu_tiga?{marginBottom:hp(2), borderRadius:hp(1), backgroundColor:"grey", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}:{marginBottom:hp(1), borderRadius:hp(1), backgroundColor:"white", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"black", borderWidth:1}}>
                <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                  <Icon name="check-circle" size={hp(1)} />
                </View>
                <View style={{flex:0.8, justifyContent:"center"}}>
                  <Text style={{fontSize:hp(2)}}>Other</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{marginBottom:hp(-1)}}>
              <Text style={{marginBottom:hp(2), fontSize:hp(2), color:"grey"}}>Portfolio</Text>
              <View style={{flexDirection:"row", backgroundColor:"white", borderRadius:hp(1), marginBottom:hp(2)}}>
                <View style={{flex:0.1}} />
                <TextInput
                  placeholder="Deskripsikan pengalaman Anda di sini"
                  multiline = {true}
                  numberOfLines = {4}
                  style={{fontSize:hp(2), marginTop:hp(1), marginBottom:hp(1)}}
                  keyboardType="default"
                  placeholderTextColor="grey"
                  underlineColorAndroid='transparent'
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({password})}
                />
                </View>
            </View>
            <View style={{flexDirection:"row", marginBottom:hp(4)}}>
              <TouchableOpacity onPress={()=>this.getDocument()} style={{flex:0.5, flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderRadius:hp(1), backgroundColor:"#f5f3f2"}}>
                <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                  <Text style={{fontSize:hp(2)}}>+</Text>
                </View>
                <View style={{flex:0.7, justifyContent:"center"}}>
                  <Text style={{fontSize:hp(2)}}>Tambah Portfolio </Text>
                </View>
                <View style={{flex:0.1}}></View>
              </TouchableOpacity>
              <View style={{flex:0.5}} />
            </View>
            <TouchableOpacity style={{height:hp(8),backgroundColor:"#0969A5", borderRadius:hp(1), justifyContent:"center",marginBottom:hp(2), alignItems:"center"}} onPress={() =>this.props.navigation.navigate('Dashboard')}>
              <Text style={{fontSize:hp(2.3), color:"white"}}>Lanjut</Text>
            </TouchableOpacity>
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

export default connect(mapStateToProps)(RegStepThree)