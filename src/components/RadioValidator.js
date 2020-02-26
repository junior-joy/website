import React from 'react';
import red from '@material-ui/core/colors/red';
import RadioGroup from '@material-ui/core/RadioGroup';
import { ValidatorComponent } from 'react-material-ui-form-validator';

const red300 = red['500'];

const style = {
    fontSize: '12px',
    color: red300,
};

class RadioValidator extends ValidatorComponent {

    render() {
        const { errorMessages, validators, requiredError, value, children, ...rest } = this.props;
        const isValid = this.state;

        return (
            <div>
                <RadioGroup
                    {...rest}
                    ref={(r) => { this.input = r; }}
                >
                  {children}
                </RadioGroup>
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

export default RadioValidator;
