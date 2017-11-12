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
    Button,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import io from 'socket.io-client'
import MessageCell from '../../component/messageCell'
import Icon from 'react-native-vector-icons/MaterialIcons';
import AddIcon from 'react-native-vector-icons/Ionicons'
import {InputItem} from 'antd-mobile'
const emojiList = ['😅', '😂', '🙂', '🙃', '😉', '😘', '😗', '😜', '😎', '😏', '😔', '🙁', '😶', '😢', '🤔', '👏', '🤝', '👍', '👎', '✌', '❤', '🐶', '🐱', '🐰', '🐭', '🐷', '🐸', '🙈',];


const data = [
    {
        remark: "me",
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: '李佳鑫',
        des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
    },
    {
        remark: "a",
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: '李益',
        des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
    },
    {
        remark: "a",
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '程远泰',
        des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
    },
    {
        remark: "me",
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: '李佳鑫',
        des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
    },
    {
        remark: "a",
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: '李益',
        des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
    },
    {
        remark: "a",
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '程远泰',
        des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
    },
    {
        remark: "me",
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: '李佳鑫',
        des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
    },
    {
        remark: "a",
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: '李益',
        des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
    },
    {
        remark: "a",
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '程远泰',
        des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
    },
];


let index = data.length - 1;

const NUM_ROWS = 20;
let pageIndex = 0;

class Chat extends Component {

    constructor(props) {
        super(props);
        this.diplayName = "Chat"
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.rData = {};
        this._userReachEnd = true
        this._userHasBeenInputed = false
        this.state = {
            dataSource: dataSource.cloneWithRows(this.genData()),
            isLoading: false,
            textInputHeight: 40,
            inputValue: '',
            refreshing: false,
            // _data: [
            //     {   remark:"me",
            //         img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
            //         title: '李佳鑫',
            //         des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
            //     },
            //     {
            //         remark:"a",
            //         img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
            //         title: '李益',
            //         des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
            //     },
            //     {
            //         remark:"a",
            //         img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
            //         title: '程远泰',
            //         des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
            //     },
            //     {   remark:"me",
            //         img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
            //         title: '李佳鑫',
            //         des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
            //     },
            //     {
            //         remark:"a",
            //         img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
            //         title: '李益',
            //         des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
            //     },
            //     {
            //         remark:"a",
            //         img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
            //         title: '程远泰',
            //         des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
            //     },
            //     {   remark:"me",
            //         img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
            //         title: '李佳鑫',
            //         des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
            //     },
            //     {
            //         remark:"a",
            //         img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
            //         title: '李益',
            //         des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
            //     },
            //     {
            //         remark:"a",
            //         img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
            //         title: '程远泰',
            //         des: '爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶爱的卡到了卡就是大洛杉矶',
            //     },
            // ]
        };


    }

    genData = (pIndex = 0) => {
        let dataBlob = data;
        // for (let i = 0; i < NUM_ROWS; i++) {
        //     const ii = (pIndex * NUM_ROWS) + i;
        //     dataBlob[`${ii}`] = `row - ${ii}`;
        // }
        return dataBlob;
    }

    renderRow = (rowData, rowId) => {
        return (
            <MessageCell
                data={rowData}
            />
        )
    }

    _scrollToBottom() {
        let scrollProperties = this._listView.scrollProperties;
        console.log(scrollProperties)
        // 如果组件没有挂载完全，则不进行内容偏移
        if (!scrollProperties.visibleLength) {
            return;
        }

        // 如果是刷新操作，则不进行滑动
        if (!this._userReachEnd) {
            return;
        }
        // 如果组件内元素还没渲染完全，则不进行底部偏移
        // if (socketStore.currentChatRoomHistory.length - this.currentMaxRowId > 11) {
        //     return;
        // }

        // 这里是一个大坑，在测试环境的时候，由于运行速度较慢，scrollProperties.contentLength 总能
        // 获取到正确的值，生产环境需要加个延时，用来保证 `renderRow` 执行完毕
        // 这里设置了 130ms 的延时
        setTimeout(() => {
            let offsetY = scrollProperties.contentLength - scrollProperties.visibleLength;
            this._listView.scrollTo({
                y: offsetY > 0 ? offsetY : 0,
                animated: this._userHasBeenInputed
            });
        }, this._userHasBeenInputed ? 0 : 130);
    }

    _onSubmitEditing = (event) => {

        const {navigation}=this.props
        const {state}=navigation
        const username=state.params.name


        console.log(username)


        this._userHasBeenInputed = true

        // console.log(this.state.inputValue)
        data.push({
            remark: "me",
            img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
            des: this.state.inputValue
        })
        let dataBlob = data




        this.setState({
                dataSource: this.state.dataSource.cloneWithRows(dataBlob),
                inputValue: ''
            }
        );


    }

    render() {
        let content = (
            <View style={styles.container}>
                <ListView
                    // contentContainerStyle={styles.contentContainer}
                    ref={listView => this._listView = listView}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    // renderSectionHeader={this.renderSectionHeader}
                    enableEmptySections={true}
                    initialListSize={500}
                    removeClippedSubviews={false}
                    // refreshControl={rcEl}
                    onLayout={
                        (event) => {
                            this._scrollToBottom();
                        }
                    }
                    onContentSizeChange={
                        (event) => {
                            this._scrollToBottom();
                        }
                    }
                    onEndReached={() => {
                        this._userReachEnd = true;
                    }}

                />

                <View style={styles.flexContainer}>
                    <View style={styles.leftIcon}>
                        {/*<Text>1</Text>*/}
                        <Icon name="keyboard-voice" size={25} style={{color: '#b2b2b2', margin: 7}}/>
                    </View>
                    <View style={styles.cell}>
                        <TextInput
                            style={[styles.input, {
                                height: Math.max(40, this.state.textInputHeight < 180 ? this.state.textInputHeight : 180)
                            }]}
                            returnKeyType="send"
                            multiline={false}
                            controlled={true}
                            blurOnSubmit={false}
                            underlineColorAndroid="transparent"
                            value={this.state.inputValue}
                            placeholder="发送消息"
                            // ios only
                            enablesReturnKeyAutomatically={true}
                            onContentSizeChange={
                                (event) => {
                                    // this.setState({textInputHeight: event.nativeEvent.contentSize.height});
                                }
                            }
                            onChangeText={ (text) => {
                                this.setState({inputValue: text});
                            }}
                            onEndEditing={(event) => console.log("编辑完成")
                            }
                            onSubmitEditing={this._onSubmitEditing}
                        />
                    </View>
                    <View style={styles.rightIcon}>
                        <Icon name="tag-faces" size={25} style={{color: '#b2b2b2', margin: 7,}}/>
                        <AddIcon name="ios-add-circle-outline" size={25} style={{color: '#b2b2b2', margin: 7,}}/>
                    </View>
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
        backgroundColor: "white",
        borderColor: "#d7d7d7",
        marginTop: 50

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
        borderWidth: 1,
        margin: 6,
        borderRadius: 4,
        borderColor: "#d7d7d7",
        fontSize: 12,
        paddingLeft: 8
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
    },

    //dasd
    flexContainer: {

        flexDirection: 'row',
        borderTopWidth: 1,
        backgroundColor: "white",
        borderColor: "#d7d7d7",
        // marginTop: 50


    },

    cell: {
        flex: 1,
        height: 40,

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    leftIcon: {
        height: 40,
        width: 40,

    },
    rightIcon: {
        height: 40,
        width: 80,
        flexDirection: 'row'
    },

});
export default Chat
