import React from 'react';
import './index.scss';
import Fade from '../../../../components/fade';

import classNames from 'classnames';

const Alert = React.forwardRef((props, ref) => {
	var { dismissable = true, show, dismiss = true, tag, color, role, children, className, ...props } = props;

	if (!show) return null;

	className = classNames(className, { 'alert': true });
	className = classNames(className, dismissable ? `alert-dismissible` : undefined);
	className = classNames(className, color ? `alert-${color}` : undefined);

	let foo = 'kalle olle pelle';
	let bar = classNames(foo, { 'olle': false });
	console.log(foo);
	console.log(bar);

	var dismissButton = null;

	if (dismiss) {
		if (typeof dismiss !== 'function') dismiss = () => {};

		dismissButton = <button type='button' class='btn-close' data-bs-dismiss='alert'></button>;
	}
	return (
		<div ref={ref} tag={tag} className={className} role={role} {...props}>
			{dismissButton}
			{children}
		</div>
	);
});

export default function (props) {
	var { template: Template, ...props } = props;
	const [showAlert, setShowAlert] = React.useState(true);

	function closeAlert() {
		setShowAlert(false);
	}

	return (
		<Template title='Buttons'>
			<button type='button' class='btn btn-primary m-1'>
				Primary
			</button>
			<button type='button' class='btn btn-secondary m-1'>
				Secondary
			</button>
			<button type='button' class='btn btn-success m-1'>
				Success
			</button>
			<button type='button' class='btn btn-info m-1'>
				Info
			</button>
			<button type='button' class='btn btn-warning m-1'>
				Warning
			</button>
			<button type='button' class='btn btn-danger m-1'>
				Danger
			</button>
			<button type='button' class='btn btn-light m-1'>
				Light
			</button>
			<button type='button' class='btn btn-dark m-1'>
				Dark
			</button>
			<button type='button' class='btn btn-link m-1'>
				Link
			</button>
			<br />
			<button type='button' class='btn btn-primary btn-lg m-1'>
				Large button
			</button>
			<button type='button' class='btn btn-primary m-1'>
				Default button
			</button>
			<button type='button' class='btn btn-primary btn-sm m-1'>
				Small button
			</button>
		</Template>
	);
}
