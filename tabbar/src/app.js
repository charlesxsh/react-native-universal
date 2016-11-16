import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import {Tabbar, TabbarItem} from './universal-tabbar';
import {ElasticView} from './elastic-view';

class Page1 extends Component{
    componentDidMount(){
        console.log('Page1 mount');
    }
    render(){
        console.log('Page1 render')
        return(<View style={{flex:1,
            justifyContent:'center',
            backgroundColor:'yellow',
    }}
        
>
            <ElasticView style={{
                marginHorizontal: 10,
            }}>
                <Text>this is shown area
                 </Text>
                <Text> 
                this is hidden area
                this is hidden area
                this is hidden area
                </Text>
            </ElasticView>
         </View>);
    }
}

class Page2 extends Component{
    componentDidMount(){
        console.log('Page2 mount');
    }
    render(){
        console.log('Page2 render')
        return(<View style={{flex:1,
            justifyContent:'center',
            backgroundColor:'yellow'
            
    }}>
            <Text> page2 </Text>
         </View>);
    }
}

export default class App extends Component {
    render(){
    return(
        <Tabbar>
            <TabbarItem>
                <Page1/>
            </TabbarItem>
            <TabbarItem>
                <Page2/>
            </TabbarItem>
        </Tabbar>
    );
    }
}