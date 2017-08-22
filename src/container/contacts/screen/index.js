/**
 * Created by bear on 2017/7/14.
 */

import React, {Component} from 'react';
import {
    View, Dimensions, StyleSheet,Text
} from 'react-native';
import _ from 'lodash';
import {connect} from 'react-redux'
import  {fetchCts} from "../../../action/contacts"
import List from '../../../component/list'
import {Toast, ActivityIndicator} from 'antd-mobile'
const {width, height} = Dimensions.get('window')
class Contacts extends Component {
    constructor(props) {
        super(props);

    }


    componentWillMount() {
        const {dispatch} = this.props
        dispatch(fetchCts())

    }


    componentDidMount() {

    }

    render() {

        const {contacts, navigation} = this.props;
        const {userList} = contacts;
        console.log(userList)

        if (userList.length > 0) {

            return (
                <View style={{backgroundColor: "#F0F1F1"}}>

                    <List data={userList} navigation={navigation}/>

                </View>
            );

        } else {
            return (
                <View style={{flex: 1, backgroundColor: "#F0F1F1"}}>
                    <Text style={{height:10}}></Text>
                    <ActivityIndicator style={{
                            marginTop:10
                        }}/>

                </View>
            );
        }


    }

    componentWillReceiveProps(np) {

        // console.log(np)


    }

    shouldComponentUpdate(np, ns) {

        if (this.props !== np || this.state !== ns) {

            return true
        }

        return false

    }

}
;

const styles = StyleSheet.create({
    contentContainer: {
        width: width,
        backgroundColor: 'white',
    },

})

const mapStateToProps = (state) => {
    "use strict";


    return {
        ...state,
        userList: state.userList
    }
}


export default connect(mapStateToProps)(Contacts)