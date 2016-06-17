/**
 * Created by xuwei on 2016/6/16.
 */
import React, {Component} from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';
const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'
};
class KanbanBoardContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            cards: []
        };
    }

    componentDidMount() {
        fetch(API_URL + '/cards', {headers: API_HEADERS})
            .then((response) => response.json())
            .then((responseDate) => {
                this.setState({
                    cards: responseDate
                });
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
    }

    addTask(cardId, taskName){

    }
    deleteTask(cardId, taskId, taskIndex){

    }
    toggleTask(cardId, taskId, taskIndex){

    }

    render() {
        return <KanbanBoard cards={this.state.cards} taskCallbacks={{
        toggle: this.toggleTask.bind(this),
        delete: this.deleteTask.bind(this),
        add: this.addTask.bind(this)
        }}/>
    }
}
export default KanbanBoardContainer;