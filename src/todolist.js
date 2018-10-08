import React, { Component } from 'react';
import ToDoItems from './todoitems';

import './todolist.css';


class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }


    }

    addItem = (e) => {

        let itemArray = this.state.items;

        if(this._input.value !== '') {
            itemArray.unshift( {
                text: this._input.value,
                key: Date.now()
            }); 

            this.setState({
                items: itemArray
            });

            this._input.value = '';
            
        }

       console.log(this.state.items)
       e.preventDefault();
    }

    deleteItem = (key) => {
        let filteredItems = this.state.items.filter((item) => item.key !== key);
        this.setState({
            items: filteredItems
        })
    }

   

    render() {
        
        return (<div className="todoListMain">
            <div className="header">
                <form onSubmit={this.addItem}>
                    <input name="tasks" placeholder="enter task"
                    ref = {
                        (element) => this._input = element
                    }
                    >
                    </input>
                    <button type="submit">add</button>
                </form>
            </div>
            <ToDoItems entries={this.state.items}
                       delete={this.deleteItem} />
        </div>);
    }
}

export default ToDoList;