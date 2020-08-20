import React from 'react';
import red from '@material-ui/core/colors/red';import {
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Checkbox from '@material-ui/core/Checkbox';
import { ValidatorComponent } from 'react-material-ui-form-validator';

const red300 = red['500'];

const style = {
    right: 0,
    fontSize: '12px',
    color: red300,
    position: 'absolute',
    marginTop: '-25px',
};

class CheckboxValidatorElement extends ValidatorComponent {

    renderValidatorComponent() {
        const { errorMessages, validators, requiredError, value, ...rest } = this.props;
        const { isValid } = this.state;

        return (
            <div>
            <KeyboardDatePicker
                className={ isValid || 'inputError' }
                {...rest}
                value={value  }
                ref={(r) => { this.input = r; }}
            />
            {this.errorText()}
            </div>
        );
    }

    errorText() {
        const { isValid } = this.state;

        if (isValid) {
            return null;
        }

        return (
            <div style={style}>
                {this.getErrorMessage()}
            </div>
        );
    }
}

export default CheckboxValidatorElement;
