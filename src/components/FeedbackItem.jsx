import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types';
import Card from "./shared/Card";

const FeedbackItem = ({ item }) => {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button 
            className="edit"
            onClick={() => editFeedback(item)}
        >
            <FaEdit color="purple" />
        </button>
        <button 
            className="close"
            onClick={() => deleteFeedback(item.id)}
        >
            <FaTimes color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem