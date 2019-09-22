import React, { Component } from 'react';
import {Alert, ImageBackground, FlatList, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from "react-redux";
import { Container, Spinner, Button, Header, Left, Thumbnail, Body, Right, Icon, Title, Text, View, Content, Card, CardItem } from 'native-base';

class DashboardCard extends Component {
  onDetailNews=(item)=>{
    this.props.navigation.navigate('NewsDetail',{data:item});
  }
  onDetailPromotion=(item)=>{
    this.props.navigation.navigate('PromotionDetail',{data:item});
  }
  render() {
    return (
      <View style={styles.promotionBox}>
        <View style={{
          flexDirection:"row",
          justifyContent:"space-between",
          width:"95%"
        }}>
          <Text style={{fontSize:18, fontWeight:"bold"}}>{this.props.title}</Text>
          <TouchableOpacity onPress={this.props.allPress}>
            <Text style={{fontSize:16, color:"grey"}}>See More</Text>
          </TouchableOpacity>
        </View>
        <View>{this.props.isLoading?<Spinner color="red" />:null}</View>
        <FlatList
          data={this.props.data}
          horizontal={true}
          renderItem={({item}) =>
          <View>
            <TouchableNativeFeedback onPress={() =>{}} >
              <Card>
                <CardItem cardBody>
                  <Image source={{uri: item.image}} style={{height: 150, width: 200, flex: 1, resizeMode:"cover"}}/>
                </CardItem>
                <CardItem>
                  <View style={{flexDirection:"column", width:200}}>
                    <View style={{height:50}}>
                      <Text style={{
                        fontSize:18,
                        fontWeight: 'bold'
                      }}>
                        {item.title}
                      </Text>
                    </View>
                    <View>
                      <Text style={{
                        fontSize:16,
                        color:"grey"
                      }}>
                        {item.subtitle}
                      </Text>
                    </View>
                    <Button style={{
                      backgroundColor:"black",
                      alignSelf:"center",
                      marginRight:5,
                      width:200,
                      marginLeft:5,
                      marginBottom:10,
                      marginTop:10,
                      justifyContent:"center"
                    }} 
                      onPress={()=>
                        this.props.status=="1"?
                          this.onDetailPromotion(item):
                          this.onDetailNews(item)
                      }
                    >
                      <Text>VIEW DETAILS</Text>
                    </Button>
                  </View>
                </CardItem>
              </Card>
            </TouchableNativeFeedback>
          </View>
          }
          keyExtractor={item => item.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  promotionBox:{
    backgroundColor:"white",
    marginTop:10,
    marginBottom:5,
    paddingLeft:15
  }
});

const mapStateToProps = (state) => {
  return {
    promotion: state.promotion
  }
}


export default connect(mapStateToProps)(DashboardCard)