import React from 'react';
import './checkBox.css';

module.exports = React.createClass({
	getInitialState() {
		return { 
			checked: this.props.checked,
		}
	},

	handlerСheckbox(e) {
		e.stopPropagation();
		this.setState( { checked: e.target.checked } );
		if(this.props.onChange)
			this.props.onChange(e.target.checked);
	},

	render() {
		let id = this.props.id;
		return (
				<div className='checkbox'>
					<div className='inliner'>
						<input id={id} type='checkbox' checked={this.state.checked} onChange={this.handlerСheckbox} />
						<label for={id}>{this.props.label}</label>
					</div>
				</div>
			);
	}
});