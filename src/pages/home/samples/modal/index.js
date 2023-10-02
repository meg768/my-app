import React from 'react';
import './index.scss';

import Fade from '../../../../components/fade';
import Modal from '../../../../components/modal';
import classNames from 'classnames';

function Switch(props) {
	var { children, checked, onChange, ...props } = props;

	return (
		<div className='form-check form-switch ' onClick={onChange}>
			<input className='form-check-input ' type='checkbox' role='switch' onChange={onChange} checked={checked} />
			<label className='form-check-label ps-1'>{children}</label>
		</div>
	);
}

export default function (props) {
	var { template: Template, ...props } = props;

	const defaultConfig = { blurBackground: true, fadeBackground: true, centered: false };

	const [visible, setVisible] = React.useState(false);
	const [config, setConfig] = React.useState(defaultConfig);

	function onClick(event) {
		setVisible(!visible);
	}

	function onClose(event) {
		setVisible(false);
	}

	function onChange(prop, event) {
		let value = { ...config };
		value[prop] = !value[prop];
		setConfig(value);
	}

	return (
		<Template title='Modalt' className='ModalSample'>
			<p>Ett exempel på modalt med backdrop. Finns lite alternativ.</p>
			<div className='my-2 mb-4'>
				<Switch onChange={onChange.bind(this, 'blurBackground')} checked={config.blurBackground}>
					Diffus bakgrund
				</Switch>
				<Switch onChange={onChange.bind(this, 'fadeBackground')} checked={config.fadeBackground}>
					Tona ut bakgrunden
				</Switch>
				<Switch onChange={onChange.bind(this, 'centered')} checked={config.centered}>
					Centrera dialogen
				</Switch>
			</div>
			<button onClick={onClick} className='btn btn-primary'>
				Visa modalt
			</button>


			<Modal show={false}>
				<div className='p-3'>
					<p>A simple primary alert—check it out!</p>
					<button type='button' onClick={onClose} className='btn btn-primary'>
						Acceptera alla cookies
					</button>
				</div>
			</Modal>

			<Modal show={visible} centered={config.centered} blur={config.blurBackground} backdrop={config.fadeBackground}>
				<div className='modal-header'>
					<p className='modal-title' style={{ fontSize: '150%' }}>
						Pax Vobiscum
					</p>
					<button type='button' onClick={onClose} className='btn-close' style={{ fontSize: '60%' }}></button>
				</div>
				<div className='modal-body'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet arcu auctor feugiat congue. Duis in laoreet ex. Vivamus suscipit in nisl sit amet mollis. Phasellus lacinia viverra tempor. </p>
				</div>
				<div className='modal-footer'>
					<button type='button' onClick={onClose} className='btn btn-primary'>
						Acceptera alla cookies
					</button>
				</div>
			</Modal>
		</Template>
	);
}
