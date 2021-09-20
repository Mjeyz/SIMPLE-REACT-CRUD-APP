import React, { Component } from 'react';
import {Button, View} from 'react-native';

class AddUserScreen extends Component {
    
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button 
                    title="GO TO USER LIST"
                    onPress={() => this.props.navigation.navigate('UserScreen')}
                    color="#19AC52"
                />
            </View>
        );
    }
}

export default AddUserScreen;