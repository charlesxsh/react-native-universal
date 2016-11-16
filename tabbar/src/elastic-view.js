import React, { Component } from 'react';
import { LayoutAnimation, 
    StyleSheet, 
    View, 
    TouchableHighlight
} from 'react-native';

const styles = {
    container: {
        overflow: 'hidden'
    },
}

class ElasticView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }
    toggle() {
        LayoutAnimation.spring();
        this.setState({
            expanded: !this.state.expanded
        });
    }
    render() {

        return (
            <View style={[styles.container, this.props.style]} >
                <TouchableHighlight
                    onPress={this.toggle.bind(this)}
                    underlayColor="#f1f1f1"
                    >
                    <View >
                        {this.props.children[0]}
                    </View>
                </TouchableHighlight>

                {this.state.expanded && 
                <View
                    >
                    {this.props.children.slice(1)}
                </View>
                }

            </View >
        );
    }
};

export { ElasticView };