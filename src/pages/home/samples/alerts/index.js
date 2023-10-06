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
	var allAlerts = { warning: true, danger: true, success: true };
	var { template: Template, ...props } = props;
	const [alerts, setAlerts] = React.useState(allAlerts);

	function closeAlert(name, event) {
		let value = { ...alerts };
		value[name] = false;
		setAlerts(value);
	}

	function resetAlerts() {
		setAlerts(allAlerts);
	}

	return (
		<Template title='Alerts'>
			<Fade show={alerts['warning']} fadeIn={false} duration={500}>
				<div class='alert alert-dismissible alert-warning'>
					<span>Ligula tincidunt sodales vel nibh. Magnis luctus suscipit conubia, pellentesque.</span>
					<button type='button' onClick={closeAlert.bind(this, 'warning')} class='btn-close'></button>
				</div>
			</Fade>

			<Fade show={alerts['danger']} fadeIn={false} duration={500}>
				<div class='alert alert-dismissible alert-danger'>
					<button type='button' onClick={closeAlert.bind(this, 'danger')} class='btn-close'></button>
					<span>Hymenaeos. Velit lectus varius dignissim magna gravida donec phasellus inceptos.</span>
				</div>
			</Fade>

			<Fade show={alerts['success']} fadeIn={false} duration={500}>
				<div class='alert alert-dismissible alert-success'>
					<button type='button' onClick={closeAlert.bind(this, 'success')} class='btn-close'></button>
					<span>Dignissim aliquam convallis quisque nonummy tellus rutrum, aliquet tellus fusce condimentum accumsan odio leo suspendisse lorem fusce ligula. Sociis lacinia.</span>
				</div>
			</Fade>

			<div className='text-center '>
				<button className='btn btn-primary' onClick={resetAlerts}>
					Reset alerts
				</button>
			</div>
		</Template>
	);
}
