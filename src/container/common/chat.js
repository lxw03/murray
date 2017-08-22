/**
 * Created by bear on 2017/8/20.
 */
//解决键盘遮挡


import React, {Component} from 'react';
import {
    KeyboardAvoidingView,
    RefreshControl,
    StyleSheet,
    ListView,
    Image,
    Text,
    TextInput,
    Platform,
    View,
    Button
} from 'react-native';

import {InputItem} from 'antd-mobile'
const emojiList = ['😅', '😂', '🙂', '🙃', '😉', '😘', '😗', '😜', '😎', '😏', '😔', '🙁', '😶', '😢', '🤔', '👏', '🤝', '👍', '👎', '✌', '❤', '🐶', '🐱', '🐰', '🐭', '🐷', '🐸', '🙈',];

class Chat extends Component {

    constructor(props) {
        super(props);
        this.diplayName = "Chat"
        this.state = {
            textInputHeight: 40,
            inputValue: '',
            refreshing: false
        };

    }
    render() {
        let content = (
            <View
                style={styles.container}
            >

                <View
                    style={styles.bottomToolBar}
                >
                    <Text>{emojiList}</Text>
                </View>
            </View>
        );

        if (Platform.OS === 'ios') {
            return (
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.KeyboardAvoidingView}
                    keyboardVerticalOffset={this.props.keyboardVerticalOffset || 64}
                >
                    {content}
                </KeyboardAvoidingView>
            );
        } else {
            return content;
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        // backgroundColor: Color.BackgroundGrey
    },
    KeyboardAvoidingView: {
        flex: 1
    },
    bottomToolBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        // borderTopColor: Color.LittleGrey
    },
    sendButton: {
        marginHorizontal: 10,
        // backgroundColor: Color.WechatGreen,
        // borderColor: Color.WechatGreen
    },
    sendButtonText: {
        // color: Color.White
    },
    input: {
        flex: 1,
        // color: Color.Black,
        // fontSize: FontSize.Main,
        padding: 10
    },
    messageCell: {
        marginTop: 5,
        marginBottom: 5,
    },
    messageCellText: {
        // fontSize: FontSize.Content
    },
    avatar: {
        borderRadius: 4,
        margin: 5,
        width: 40,
        height: 40
    },
    contentView: {
        borderRadius: 4,
        padding: 4,
        paddingHorizontal: 8,
        overflow: 'hidden',
        flex: 1,
        margin: 5,
        justifyContent: 'center'
    },
    endBlankBlock: {
        margin: 5,
        width: 50,
        height: 40
    }
});
export default Chat
