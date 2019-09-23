import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon } from 'antd';

const  propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onClickEdit: PropTypes.func,
};


function NoteCard (props) {
    let {title, description, id, date, onClickEdit} = props;
    return (
        <Card
        title={title}
        className="noteCard__component-Card">
            <p>{date}</p>
            <p onClick={() => onClickEdit(id) }>{description}</p>
        </Card>
    );
}

NoteCard.propTypes = propTypes;

export default NoteCard;
