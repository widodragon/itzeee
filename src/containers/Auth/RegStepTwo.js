import React, { Component } from 'react';
import {connect} from "react-redux";
import {Alert, StyleSheet, Image, TouchableOpacity, ScrollView, Picker, ImageBackground} from 'react-native';
import TextInputDefault from '../../components/Auth/TextInputDefault';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {View,Input,Text} from "native-base";
import {getLogin} from '../../redux/actions/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {hp,wp, imgX,imgY} from '../../helpers/Responsive';
class RegStepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname   : '',
      email      : '',
      password   : '',
      phone      : '',
      token      : '',
      job_status : '',
      hari_biasa : false,
      hari_libur : false,
      waktu_satu : false,
      waktu_dua  : false,
      waktu_tiga : false,
      time       : "",
      type_mitra : [],
      mitra_satu : false,
      mitra_dua  : false,
      mitra_tiga : false,
      mitra_empat: false,
      mitra_lima : false
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
      if(this.state.type_mitra.indexOf(state)==-1){
        this.setState({
          type_mitra:[...this.state.type_mitra, state],
          mitra_satu:true
        })
      }else{
        let array_sementara=this.state.type_mitra
        array_sementara.splice(array_sementara.indexOf(state), 1) 
        this.setState({
          type_mitra:array_sementara,
          mitra_satu:false
        })
      }
    }else if(state=="air"){
      if(this.state.type_mitra.indexOf(state)==-1){
        this.setState({
          type_mitra:[...this.state.type_mitra, state],
          mitra_dua:true
        })
      }else{
        let array_sementara=this.state.type_mitra
        array_sementara.splice(array_sementara.indexOf(state), 1) 
        this.setState({
          type_mitra:array_sementara,
          mitra_dua:false
        })
      }
    }else if(state=="lighting"){
      if(this.state.type_mitra.indexOf(state)==-1){
        this.setState({
          type_mitra:[...this.state.type_mitra, state],
          mitra_tiga:true
        })
      }else{
        let array_sementara=this.state.type_mitra
        array_sementara.splice(array_sementara.indexOf(state), 1) 
        this.setState({
          type_mitra:array_sementara,
          mitra_tiga:false
        })
      }
    }else if(state=="electrical"){
      if(this.state.type_mitra.indexOf(state)==-1){
        this.setState({
          type_mitra:[...this.state.type_mitra, state],
          mitra_empat:true
        })
      }else{
        let array_sementara=this.state.type_mitra
        array_sementara.splice(array_sementara.indexOf(state), 1) 
        this.setState({
          type_mitra:array_sementara,
          mitra_empat:false
        })
      }
    }else{
      if(this.state.type_mitra.indexOf(state)==-1){
        this.setState({
          type_mitra:[...this.state.type_mitra, state],
          mitra_lima:true
        })
      }else{
        let array_sementara=this.state.type_mitra
        array_sementara.splice(array_sementara.indexOf(state), 1) 
        this.setState({
          type_mitra:array_sementara,
          mitra_lima:false
        })
      }
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
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{width:"90%", flexDirection:"column", alignSelf:"center", marginTop:hp(2)}}>
            <View style={{flex:0.1, marginBottom:hp(2.5), flexDirection:"column", alignItems:"center"}}>
              <Text style={{fontSize:hp(2), color:"grey"}}>Pilih kualifikasi bidang pekerjaan yang</Text>
              <Text style={{fontSize:hp(2), color:"grey"}}>dapat dilakukan oleh mitra anda</Text>
            </View>
            <View style={{flexDirection:"column", flex:0.4}}>
              <View style={{flexDirection:"row", flex:0.34, marginBottom:hp(2)}}>
                <View style={{flex:0.5, justifyContent:"center", alignItems:"center", marginRight:wp(2)}}>
                  <TouchableOpacity onPress={()=>this.type_mitra('plumbing')} style={this.state.mitra_satu?styles.active_circle:styles.circle_wrap}>
                    <View style={styles.circle}>
                      <Icon name="shower" size={hp(7)}/>
                    </View>
                  </TouchableOpacity>
                  <Text style={{marginTop:hp(1),color:"blue", fontSize:hp(2)}}>Water Plumbing</Text>
                </View>
                <View style={{flex:0.5, justifyContent:"center", alignItems:"center", marginLeft:wp(2)}}>
                  <TouchableOpacity onPress={()=>this.type_mitra('air')} style={this.state.mitra_dua?styles.active_circle:styles.circle_wrap}>
                    <View style={styles.circle}>
                      <Icon name="water" size={hp(7)}/>
                    </View>
                  </TouchableOpacity>
                  <Text style={{marginTop:hp(1),color:"blue", fontSize:hp(2)}}>Air Conditioner</Text>
                </View>
              </View>
              <View style={{flexDirection:"row", flex:0.34, marginBottom:hp(2)}}>
                <View style={{flex:0.5, justifyContent:"center", alignItems:"center", marginRight:wp(2)}}>
                  <TouchableOpacity onPress={()=>this.type_mitra('lighting')} style={this.state.mitra_tiga?styles.active_circle:styles.circle_wrap}>
                    <View style={styles.circle}>
                      <Icon name="lightbulb" size={hp(7)}/>
                    </View>
                  </TouchableOpacity>
                  <Text style={{marginTop:hp(1),color:"blue", fontSize:hp(2)}}>Lighting</Text>
                </View>
                <View style={{flex:0.5, justifyContent:"center", alignItems:"center", marginLeft:wp(2)}}>
                  <TouchableOpacity onPress={()=>this.type_mitra('electrical')} style={this.state.mitra_empat?styles.active_circle:styles.circle_wrap}>
                    <View style={styles.circle}>
                     <Icon name="charging-station" size={hp(7)}/>
                    </View>
                  </TouchableOpacity>
                  <Text style={{marginTop:hp(1),color:"blue", fontSize:hp(2)}}>Electrical</Text>
                </View>
              </View>
              <View style={{flexDirection:"column", flex:0.34, justifyContent:"center", alignItems:"center", marginBottom:hp(2)}}>
                  <TouchableOpacity onPress={()=>this.type_mitra('service')} style={this.state.mitra_lima?styles.active_circle:styles.circle_wrap}>
                    <View style={styles.circle}>
                      <Icon name="wrench" size={hp(7)}/>
                    </View>
                  </TouchableOpacity>
                  <Text style={{marginTop:hp(1),color:"blue", fontSize:hp(2)}}>Service Lainnya</Text>
              </View>
            </View>
            <View style={{flexDirection:"column", flex:0.5}}>
              <View style={{marginBottom:hp(2)}}>
                <Text style={{fontSize:hp(2.3), marginBottom:hp(1)}}>Pilih Hari Kerja</Text>
                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                  <TouchableOpacity onPress={()=>this._dayJob("hari biasa")} style={this.state.hari_biasa?{borderRadius:hp(1), backgroundColor:"white", flex:0.5, marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"blue", borderWidth:1}:{borderRadius:hp(1), backgroundColor:"white", flex:0.5, marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2)}}>
                    <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                      <Icon name="check-circle" size={hp(1)} />
                    </View>
                    <View style={{flex:0.8, justifyContent:"center"}}>
                      <Text style={{fontSize:hp(2)}}>Hari Biasa</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this._dayJob("hari libur")} style={this.state.hari_libur?{borderRadius:hp(1), backgroundColor:"white", flex:0.5, marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"blue", borderWidth:1}:{borderRadius:hp(1), backgroundColor:"white", flex:0.5, marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2)}}>
                    <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                      <Icon name="check-circle" size={hp(1)} />
                    </View>
                    <View style={{flex:0.8, justifyContent:"center"}}>
                      <Text style={{fontSize:hp(2)}}>Hari Libur</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{marginBottom:hp(2)}}>
                <Text style={{fontSize:hp(2.3), marginBottom:hp(1)}}>Jam Kerja</Text>
                <View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                  <TouchableOpacity onPress={()=>this._timeJob(1)} style={this.state.waktu_satu?{marginBottom:hp(1), borderRadius:hp(1), backgroundColor:"white", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"blue", borderWidth:1}:{marginBottom:hp(1), borderRadius:hp(1), backgroundColor:"white", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2)}}>
                    <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                      <Icon name="check-circle" size={hp(1)} />
                    </View>
                    <View style={{flex:0.8, justifyContent:"center"}}>
                      <Text style={{fontSize:hp(2)}}>08.00 - 17.00</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this._timeJob(2)} style={this.state.waktu_dua?{marginBottom:hp(1), borderRadius:hp(1), backgroundColor:"white", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"blue", borderWidth:1}:{marginBottom:hp(1), borderRadius:hp(1), backgroundColor:"white", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2)}}>
                    <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                      <Icon name="check-circle" size={hp(1)} />
                    </View>
                    <View style={{flex:0.8, justifyContent:"center"}}>
                      <Text style={{fontSize:hp(2)}}>15.00 - 22.00</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this._timeJob(3)} style={this.state.waktu_tiga?{marginBottom:hp(2), borderRadius:hp(1), backgroundColor:"white", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2), borderColor:"blue", borderWidth:1}:{marginBottom:hp(1), borderRadius:hp(1), backgroundColor:"white", marginRight:wp(1), flexDirection:"row", paddingTop:hp(2), paddingBottom:hp(2)}}>
                    <View style={{flex:0.2, justifyContent:"center", alignItems:"center"}}>
                      <Icon name="check-circle" size={hp(1)} />
                    </View>
                    <View style={{flex:0.8, justifyContent:"center"}}>
                      <Text style={{fontSize:hp(2)}}>22.00 - 06.00</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={{height:hp(8),backgroundColor:"#0969A5", borderRadius:hp(1), justifyContent:"center",marginBottom:hp(2), alignItems:"center"}} onPress={() =>this.props.navigation.navigate('RegStepThree')}>
                <Text style={{fontSize:hp(2.3), color:"white"}}>Lanjut</Text>
              </TouchableOpacity>
            </View>
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
    width:100,
    height:100, 
    borderRadius:50, 
    backgroundColor:"blue", 
    justifyContent:"center", 
    alignItems:"center"
  },
  circle:{
    width:98,
    height:98, 
    borderRadius:49, 
    backgroundColor:"#7fa8b5", 
    justifyContent:"center", 
    alignItems:"center"
  },
  active_circle:{
    width:98,
    height:98, 
    borderRadius:49, 
    backgroundColor:"yellow", 
    justifyContent:"center", 
    alignItems:"center"   
  }
})

export default connect(mapStateToProps)(RegStepTwo)