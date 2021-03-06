import React from 'react';
import InputText from './inputText.js';

import './fieldText.css';

module.exports = React.createClass({
    getInitialState() {
        return { classErr: '' };
    },

    handleChange(value) {
        this.props.validator.set(value);
    },

    getDefaultProps() {
        return {
            enable: true,
            type: 'def',
            validator: {
                    set() {},
                    subscribe() {}
                }
        };
    },

    componentWillMount() {
        this.props.validator.set(this.props.text.get());
        this.props.validator.subscribe(this.setNoValid);
    },

    setNoValid(e) {
        this.handlFocus = x => {
            this.handlFocus = null;
            this.setState({ classErr: '' });
            this.messageError = null;
        }
        this.messageError = (<p className='err'>{e.message}</p>);
        this.setState({ classErr: 'err ' });
    },

    componentDidMount(){
        if(this.props.focus)
            this._input.focus();
    },

    render: function() {
            
            let propsInput = {};
            if(this.handlFocus)
                propsInput.onFocus = this.handlFocus;
            propsInput.ref = (c) => this._input = c;

            if(this.props.type === 'def')
                return (
                    <div className={'field-text-label input-box-text ' + this.props.className} >
                        <label className='input-label'>{this.props.label}</label>
                        <InputText className={this.state.classErr} text={this.props.text} onChange={this.handleChange} props={propsInput} enable={this.props.enable}/>
                        <p className='last_editor'>{this.props.editor}</p>
                        {this.messageError}
                    </div>
                    )
            else
                return (
                    <div className={'field-text-label input-box-text ' + this.props.className} >
                        <label className='input-label'>{this.props.label}</label>
                        <div className='indent'>
                            <InputText className={this.state.classErr} text={this.props.text} onChange={this.handleChange} props={propsInput} enable={this.props.enable}/>
                            {this.messageError}
                        </div>
                    </div>
                    )
    }
});