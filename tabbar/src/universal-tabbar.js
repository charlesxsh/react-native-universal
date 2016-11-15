import * as React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabbar: {
    backgroundColor: 'red',
    position: 'absolute',
    height: 49,
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    flexDirection: 'row',
  },
  tabbarItem: {
    flex: 1,
    backgroundColor: 'green',
  },
  gone: {
        height:0,
        width: 0
    },
});

class Tabbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:0
    };
    
    //parse childs in each TabbarItem
    this.scenes = React.Children.map(this.props.children, (child, i)=>{
      return React.cloneElement(child,{
        key:i,
      });
    });

    //parse tabs
    this.tabs = React.Children.map(this.scenes, (child,i) => {
      return (
        <TouchableHighlight style={styles.tabbarItem}
          onPress={()=>{
            this.setState({selectedTab:i});
          }}
          key={i}
        >
          <View>
          </View>
        </TouchableHighlight>
      );
    });

  }

  render() {
    let currentScene = this.scenes.map((p,i)=>{
      // const sceneContainerStyle = this.state.selectedTab == i?{flex:1}:styles.gone;
      //   return (
      //     <View key={i} style={sceneContainerStyle}>
      //     {p}
      //     </View>
      //   );
      if(this.state.selectedTab === i){
        return (
           <View key={i} style={{flex:1}}>
           {p}
           </View>
         );
      }else{
        return null;
      }
      }
    );
    return (
      <View style={styles.container}>
        {currentScene}
        <View style={styles.tabbar}>
          {this.tabs}
        </View>
      </View>
    );
  }
}

class TabbarItem extends React.Component {
  render() {
    return this.props.children;
  }
}

export { Tabbar, TabbarItem };
