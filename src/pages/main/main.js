import React from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

export default class MainScreen extends React.Component {
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            
            <View style={styles.container}>
                <View style={[styles.height160,styles.row]}>
                    <View style={[styles.height160, styles.part1_left]}>
                        <Text style={[styles.font14, styles.marTop18, styles.marLeft10, styles.green]}>womenyueba</Text>
                        <Text style={[styles.font14, styles.marTop14, styles.marLeft10]}>lianaijiaren</Text>
                        <Image style={{height: 80}} 
                            source={require('../../public/2289.png')}
                        />
                    </View>
                    <View style={[styles.height160, styles.part1_right]}>
                        <View style={[styles.row, {flex: 1,}]}>
                            <View style={{flex: 1}}>
                                <Text style={[styles.font14, styles.marTop18,{marginLeft:30, color: 'red'}]}>chaodijiazhi</Text>
                                <Text style={[styles.marTop14, {fontSize:12, marginLeft: 30, color: '#999'}]}>shiyuanhuishenghuo</Text>
                            </View>
                            <View style={[{flex:1}, styles.marTop18]}>
                                <Image style={{height: 55, width: 55}} 
                                    source={require('../../public/9710.jpg')}
                                />
                            </View>
                        </View>
                        <View style={[styles.row, {flex: 1,}]}>
                            <View style={{flex: 1}}>
                                <Text style={{color: '#f742ab', marginLeft: 5, fontWeight: 'bold',fontSize:15, marginTop: 8}}>
                                    jucanyaoqing
                                </Text>
                                <Text style={{fontSize:12, marginTop:4, marginLeft: 5}}>pengyoujiaren</Text>
                                <Image style={{height: 25, width: 25, alignSelf: 'center'}}
                                    source={require('../../public/2714.png')}
                                />
                            </View>
                            <View style={[styles.row, {flex: 1}]}></View>
                        </View>
                    </View>
                </View>
                
                <Button style={[styles.height160]}
                title="Go to Jane's profile"
                onPress={() => navigate('Profile', { name: 'Jane' })
                }
                />
            </View>
            
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
    },
    height160: {
        height: 160,
    },
    row: {
        flexDirection: 'row',
    },
    font30: {
        fontSize: 90,
    },
    font14: {
        fontSize: 14,
    },
    marLeft10: {
        marginLeft: 10,
    },
    marTop14: {
        marginTop: 14,
    },
    marTop18: {
        marginTop: 18,
    },
    green: {
        color: '#55a44b',
        fontWeight: '900'
    },
    part1_left: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#dcd7cd',
    },
    part1_right: {
        flex: 2,
        borderWidth: 1,
        borderColor: '#dcd7cd',


    }
})
