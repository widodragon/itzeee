import React, { Component } from 'react';
import {Alert, ImageBackground, FlatList, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from "react-redux";
import {hp,wp} from '../../helpers/Responsive';
import HeaderIcon from '../../components/Dashboard/HeaderIcon';
import { Container, Tabs, Tab, Spinner, Button, Header, Left, Thumbnail, Body, Right,Title, Text, View, Content, Footer, Card, CardItem } from 'native-base';
import {getReward} from '../../redux/actions/promotions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationActions, StackActions } from 'react-navigation';
import Penawaran from '../Offering';
import Proses from '../Processed';

class Bidding extends Component {
  render() {
    return (
      <Container>
        <Tabs tabBarUnderlineStyle={{borderBottomWidth:1}}>
          <Tab activeTabStyle={{backgroundColor:"#0969A5"}} tabStyle={{backgroundColor:"#0969A5"}} heading="Penawaran">
            <Penawaran {...this.props} />
          </Tab>
          <Tab activeTabStyle={{backgroundColor:"#0969A5"}} tabStyle={{backgroundColor:"#0969A5"}} heading="Diproses">
            <Proses {...this.props} />
          </Tab>
        </Tabs>
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
    promotion: state.promotion
  }
}


export default connect(mapStateToProps)(Bidding)