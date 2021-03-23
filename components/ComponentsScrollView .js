import React, {Component} from 'react';
import {Image, ScrollView} from 'react-native';

class ComponentsScrollView extends Component {
    render() {
        return (
            <ScrollView>
                <Image style={{height:250,
                  width:450}} source={{uri:'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_960_720.jpg'}}/>
                <Image style={{height:250,
                  width:450}} source={{uri:'https://cdn.pixabay.com/photo/2020/12/07/18/16/pathway-5812488__340.jpg'}}/>
                <Image style={{height:250,
                  width:450}} source={{uri:'https://cdn.pixabay.com/photo/2019/02/02/10/40/winter-3970434__340.jpg'}}/>
                <Image style={{height:250,
                  width:450}} source={{uri:'https://cdn.pixabay.com/photo/2020/10/27/21/24/lake-5691976__340.jpg'}}/>
                <Image style={{height:250,
                  width:450}} source={{uri:'https://cdn.pixabay.com/photo/2019/12/30/20/34/snow-4730553__340.jpg'}}/>
                <Image style={{height:250,
                  width:450}} source={{uri:'https://cdn.pixabay.com/photo/2020/11/01/21/45/christmas-5705046__340.jpg'}}/>
                <Image style={{height:250,
                  width:450}} source={{uri:'https://cdn.pixabay.com/photo/2020/02/06/20/01/university-library-4825366__340.jpg'}}/>
                <Image style={{height:250,
                  width:450}} source={{uri:'https://cdn.pixabay.com/photo/2019/12/11/01/51/skating-4687221__340.png'}}/>
                <Image style={{height:250,
                  width:450}} source={{uri:'https://cdn.pixabay.com/photo/2019/11/30/21/37/star-4664313__340.jpg'}}/>
            </ScrollView>
        );
    }
}

export default ComponentsScrollView;
