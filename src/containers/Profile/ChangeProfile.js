import React, { Component } from 'react';
import {Alert, ImageBackground, FlatList, TextInput, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from "react-redux";
import TextInputComp from '../../components/Profile/TextInputComp';
import HeaderIcon from '../../components/Dashboard/HeaderIcon';
import { Container, Spinner, Button, Header, Left, Thumbnail, Body, Right,Title, Text, View, Content, Footer, Card, CardItem } from 'native-base';
import {getProfile} from '../../redux/actions/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationActions, StackActions } from 'react-navigation';

class ChangeProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parent : [],
      profile : [],
      page : 1,
      isLoading:false
    }
  }
  static navigationOptions = {
    title:"CHANGE PROFILE",
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  componentDidMount(){
    this.dataProfile();
  }
  dataProfile=async()=>{
    try{
      this.setState({isLoading:true})
      const src=await this.props.dispatch(getProfile());
      this.setState({profile:src.value.data[0]});
      // alert(JSON.stringify(this.state.profile))
      this.setState({isLoading:false})
    }catch(e){
      // console.warn(e)
    }
  }
  async onExit(){
    try{
      await AsyncStorage.removeItem('token');
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })],
        });
        this.props.navigation.dispatch(resetAction);
    }catch(e){
      alert("e");
    }
  }
  render() {
    return (
      <Container style={{flex:1, backgroundColor:"#f2f3f5"}}>
        <ScrollView style={{flex:0.8, paddingLeft:wp("5%"), paddingTop:hp("5%"), paddingRight:wp("5%"), marginTop:wp("1%"), backgroundColor:"white"}}>
          <View style={{justifyContent:"space-between", flexDirection:"row"}}>
            <View style={{justifyContent:"center"}}><Text>PERSONAL INFO</Text></View>
            <TouchableOpacity style={{justifyContent:"center"}}>
              <Text style={{color:"red", fontSize:hp("1.8%")}}>CHANGE PROFILE</Text>
            </TouchableOpacity> 
          </View>  
          <TextInputComp
            title="NAMA" 
            style={{borderColor:"grey",borderBottomWidth:0.5, marginBottom:hp("1%")}}
            keyboardType="default"
            editable={false}
            value = {this.state.profile.name}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}
          />
          <TextInputComp
            title="EMAIL" 
            style={{borderColor:"grey",borderBottomWidth:0.5, marginBottom:hp("1%")}}
            keyboardType="default"
            editable={false}
            value = {this.state.profile.email}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}
          />
          <TextInputComp
            title="PHONE" 
            style={{borderColor:"grey",borderBottomWidth:0.5, marginBottom:hp("1%")}}
            keyboardType="default"
            editable={false}
            value = {this.state.profile.phone}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}
          />
          <TextInputComp
            title="BIRTH PLACE" 
            style={{borderColor:"grey",borderBottomWidth:0.5, marginBottom:hp("1%")}}
            keyboardType="default"
            editable={false}
            value = {this.state.profile.birthplace}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}
          />  
          <TextInputComp
            title="BIRTHDAY" 
            style={{borderColor:"grey",borderBottomWidth:0.5, marginBottom:hp("1%")}}
            keyboardType="default"
            editable={false}
            value = {this.state.profile.birthdate}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}
          /> 
          <TextInputComp
            title="GENDER" 
            style={{borderColor:"grey",borderBottomWidth:0.5, marginBottom:hp("1%")}}
            keyboardType="default"
            editable={false}
            value = {this.state.profile.gender}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}
          /> 
          <TextInputComp
            title="RELIGION" 
            style={{borderColor:"grey",borderBottomWidth:0.5, marginBottom:hp("1%")}}
            keyboardType="default"
            editable={false}
            value = {this.state.profile.religion}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}
          />
          <TextInputComp
            title="ADDRESS" 
            style={{borderColor:"grey",borderBottomWidth:0.5, marginBottom:hp("5%")}}
            keyboardType="default"
            editable={false}
            value = {this.state.profile.address}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}
          />    
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  promotionBox:{
    backgroundColor:"white",
    marginTop:5,
    marginBottom:5,
    paddingLeft:10
  },
  dashboardMenu:{
    flex:0.3,
    marginTop:70,
    width:"90%",
    flexDirection:"column",
    alignSelf:"center",
    height:150,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
    paddingTop:5,
    paddingBottom:5
  },
  iconMenu:{
    textAlign:"center",
  },
  iconBox:{
    flex:0.25,
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  iconCircle:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    backgroundColor:'#b89127',
    borderRadius:25
  }
});

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(ChangeProfile)