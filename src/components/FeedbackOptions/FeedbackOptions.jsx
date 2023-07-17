import { ButtonOption, Buttons } from "./FeedbackOptions.module"
import PropTypes from 'prop-types';
const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <Buttons>
            {options.map(el => {
                return(
                    <ButtonOption
                    key={el}
                    type="button"
                    onClick={() => onLeaveFeedback(el)
                    }>{el}</ButtonOption>
            )})}
        </Buttons>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback:PropTypes.func.isRequired,
}
export default FeedbackOptions