import React from 'react';
import red from '@material-ui/core/colors/red';
import {
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { ValidatorComponent } from 'react-material-ui-form-validator';

const red300 = red['500'];

const style = {
    fontSize: '12px',
    color: red300,
};

class CheckboxValidatorElement extends ValidatorComponent {

    render() {
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
