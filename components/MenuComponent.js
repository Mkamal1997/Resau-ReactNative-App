import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { DISHES } from '../shared/dishes';




class Menu extends Component {

    constructor(props){
        super(props);
        this.state={
            dishes:DISHES
        }
    }
    static navigationOptions = {
        title: 'Menu'
    };


render(){ 
   

    const renderMenuItem = ({item, index}) => {
        return (
            <Tile
                key={index}
                title={item.name}
                caption={item.description}
                featured
                onPress={() => navigate('Dishdetail', { dishId: item.id })}
                imageSrc={require('./images/uthappizza.png')}
                />
        );
};

const { navigate } = this.props.navigation;

    return (
        <FlatList 
            data={this.state.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />
             );
        }
    }
  



    export default Menu;