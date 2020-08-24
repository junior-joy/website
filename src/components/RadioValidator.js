import React from 'react';
import red from '@material-ui/core/colors/red';
import RadioGroup from '@material-ui/core/RadioGroup';
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
        const { errorMessages, validators, requiredError, value, children, ...rest } = this.props;

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

export default CheckboxValidatorElement;
