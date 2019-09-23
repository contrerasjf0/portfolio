import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, DatePicker, Button } from 'antd';

const { TextArea } = Input;

export default class NewNotes extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="newNotes__wrapper">
                <form>
                    <div className="form__item">
                        <Input placeholder="Title" size="large" prefix={<Icon type="book"/>}/>
                    </div>
                    <div className="form__item">
                        <DatePicker size="large" />
                    </div>
                    <div className="form__item">
                        <TextArea rows={8} placeholder="Description"/>
                    </div>
                    <div className="form__item">
                        <Button type="primary">Add</Button>
                    </div>
                </form>
            </div>
        )
    }
}
