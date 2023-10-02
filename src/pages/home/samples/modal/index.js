import React from 'react';
import './index.scss';

import Fade from '../../../../components/fade';
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

	const defaultConfig = { blurBackground: true, fadeBackground: true, centered:false};

	const [visible, setVisible] = React.useState(false);
	const [config, setConfig] = React.useState(defaultConfig);

	function onClick(event) {
		setVisible(!visible);
	}

	function onClose(event) {
		setVisible(false);
	}

	let blur = 'blur(2px)';
	let backgoundColor = 'rgba(0,0,0,0.10)';

	let modalStyle = {};

	modalStyle = {
		display: 'block',
	};

    if (config.fadeBackground) {
		modalStyle['background-color'] = backgoundColor;

    }
    if (config.blurBackground) {
		modalStyle['backdrop-filter'] = blur;
		modalStyle['-webkit-backdrop-filter'] = blur;
    }

	function onChange(prop, event) {
		let value = { ...config };
		value[prop] = !value[prop];
		setConfig(value);
	}

    let modalDialogClassName = 'modal-dialog';
    
    modalDialogClassName = classNames(modalDialogClassName, config.centered ? 'modal-dialog-centered' : null);
    
	return (
		<Template title='Modalt' className='ModalSample'>
			<p>Ett exempel på modalt med backdrop. Finns lite alternativ.</p>
			<div className='my-2 mb-4'>
				<Switch onChange={onChange.bind(this, 'blurBackground')} checked={config.blurBackground}>
					Diffus bakgrund
				</Switch>
				<Switch onChange={onChange.bind(this, 'fadeBackground')} checked={config.fadeBackground}>
					Mörka bakgrunden
				</Switch>
				<Switch onChange={onChange.bind(this, 'centered')} checked={config.centered}>
					Centrera dialogen
				</Switch>
			</div>
			<button onClick={onClick} className='btn btn-primary'>
				Visa modalt
			</button>

			<Fade duration={200} show={visible} style={modalStyle} className='modal' tabindex='-1'>
				<div className={modalDialogClassName}>
					<div className='modal-content shadow-sm'>
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
					</div>
				</div>
			</Fade>
		</Template>
	);
}
