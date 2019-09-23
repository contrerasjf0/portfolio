import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, DatePicker } from 'antd';
import moment from 'moment';

import notesDataSet from '../dataSet/notes';

const { TextArea } = Input;

export default class EditNote extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props){
        super(props);

        this.state = {
            note: {}
        }

    }

    componentDidMount(){
        console.log(this.props);
        const id =  this.props.match.params.uid;
        const noteOject = notesDataSet.find((note) => (note.id === id));
        
        this.setState({note: noteOject});
    }

    render() {
        const { note } = this.state;

        return (
            <div className="newNotes__wrapper">
                <form>
                    <div className="form__item">
                        <Input disabled value={note.title} size="large" prefix={<Icon type="book"/>}/>
                    </div>
                    <div className="form__item">
                        <DatePicker size="large" disabled value={(note.date)? moment(note.date, 'YYYY-MM-DD') : moment()}/>
                    </div>
                    <div className="form__item">
                        <TextArea rows={8} value={note.description} disabled/>
                    </div>
                </form>
            </div>
        )
    }
}
