import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import {Button,Header, Body, Footer, Spinner} from "native-base";
import Carousel from 'react-native-looped-carousel';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
const { width, height } = Dimensions.get('window');

class SplashScreen extends Component{
  render(){
    return(
      <View style={{flex:1,justifyContent:"center", backgroundColor:"#f2f3f5", alignItems:"center"}}>
        <Image source={require('../../assets/point.png')} style={{width:300,height:300}}/>   
      </View>
    );
  }
}

export default class OnBoarding extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
      isLoading:true
    };
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener("didFocus", async ()=>{
      await AsyncStorage.getItem('token').then((value)=>{
        this.setState({token:value});
      });
      if(this.state.token===null || this.state.token === '' ){
        setTimeout(() => {
          this.setState({isLoading:false})
        }, 2000)
      }else{
        setTimeout(() => {
          this.setState({isLoading:false})
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
          });
          this.props.navigation.dispatch(resetAction);
        }, 2000)
      }
    });
  }
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  onLogin=async()=>{
    try{
      this.props.navigation.navigate('Login');
    }catch(e){
      alert(e);
    }
  }

  render() {
    if(this.state.isLoading){
      return <SplashScreen />
    }
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Body>
          <Carousel
            delay={5000}
            style={this.state.size}
            autoplay
            onAnimateNextPage={(p) => console.log(p)}
          >
            <View style={[this.state.size]}>
              <Image source={require('../../assets/image1.jpg')} style={[this.state.size]}>
              </Image>
            </View>
            <View style={[this.state.size]}>
              <Image source={require('../../assets/image2.jpg')} style={[this.state.size]}/>
            </View>
            <View style={[this.state.size]}>
              <Image source={require('../../assets/image3.jpg')} style={[this.state.size]}/>
            </View>
          </Carousel>
        <View style={{ position: 'absolute', marginTop:"50%", justifyContent:"center", alignItems:"center"}}>
         <Image source={require('../../assets/point.png')} style={{width:200,height:200}}/>
        </View>
        </Body>
        <View style={{backgroundColor:"none",flex:0.1, flexDirection:"row", marginLeft:"5%", marginRight:"5%",marginBottom:"6%"}}>
          <Button style={{backgroundColor:"none", flex:0.5, height:50, borderRadius:10, margin:5}} onPress={() => this.onLogin()}><Text style={{color:"white",flex:1, textAlign:"center"}}>LOGIN</Text></Button>
          <Button style={{backgroundColor:"none", flex:0.5, height:50, borderRadius:10, margin:5}} onPress={() => this.props.navigation.navigate('Registration')}><Text style={{color:"white",flex:1, textAlign:"center"}}>REGISTER</Text></Button>
        </View>
      </View>
    );
  }
}