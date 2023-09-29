import React from 'react';

import './index.scss';

import Popup from '../../../../components/popup';
import classNames from 'classnames';


export default function (props) {
	var { template: Template, ...props } = props;

	let defaultConfig = {
		volume: 3,
		options: 'A',
		checkA: true,
		checkB: false,
		checkC: false,
	};
	const [text, setText] = React.useState('.');
	const [config, setConfig] = React.useState(defaultConfig);
	const [show, setShow] = React.useState(false);

	const radioSample = () => {
		function onClick(option, event) {
			let value = { ...config };
			value.options = option;
			setConfig(value);
			event.stopPropagation();
		}

		function ignoreClick(event) {
			event.preventDefault();
			event.stopPropagation();
		}

		let optionA = onClick.bind(this, 'A');
		let optionB = onClick.bind(this, 'B');
		let optionC = onClick.bind(this, 'C');

		return (
			<Popup>
				<button className='btn btn-primary m-1'>
					Radio <span style={{ fontSize: '75%' }}>▼</span>
				</button>

				<div className='Dropdown dropdown-menu mt-1 show shadow-sm'>
					<div className='dropdown-header' onClick={ignoreClick}>
						Välj alternativ
					</div>

					<div className='dropdown-item  hover:none' onClick={optionA}>
						<div className='form-check'>
							<input className='form-check-input' type='radio' role='switch' onChange={optionA} checked={config.options == 'A'} />
							<label className='form-check-label ps-1'>Alternativ A</label>
						</div>
					</div>
					<div className='dropdown-item hover:none' onClick={optionB}>
						<div className='form-check'>
							<input className='form-check-input' type='radio' role='switch' onChange={optionB} checked={config.options == 'B'} />
							<label className='form-check-label ps-1'>Alternativ B</label>
						</div>
					</div>
					<div className='dropdown-item hover:none' onClick={optionC}>
						<div className='form-check'>
							<input className='form-check-input' type='radio' role='switch' onChange={optionC} checked={config.options == 'C'} />
							<label className='form-check-label ps-1'>Alternativ C</label>
						</div>
					</div>
				</div>
			</Popup>
		);
	};

	const switchSample = () => {
		function ignoreClick(event) {
			event.preventDefault();
			event.stopPropagation();
		}

		const onConfig = (description, name, value, event) => {
			let foo = { ...config };

			foo[name] = value;

			setConfig(foo);
			setText(description);
			event.stopPropagation();
		};

		return (
			<Popup>
				<button className='btn btn-primary m-1'>
					Switch <span style={{ fontSize: '75%' }}>▼</span>
				</button>

				<div className='Dropdown dropdown-menu mt-1 show shadow-sm' xonClick={ignoreClick}>
					<div className='dropdown-header' onClick={ignoreClick}>
						Alternativ
					</div>

					<div className='dropdown-item hover:none' onClick={onConfig.bind(this, 'Slicka ledstångar!', 'checkA', !config.checkA)}>
						<div className='form-check form-switch '>
							<input className='form-check-input ' type='checkbox' role='switch' checked={config.checkA} />
							<label className='form-check-label ps-1'>Slicka ledgångar</label>
						</div>
					</div>

					<div className='dropdown-item hover:none' onClick={onConfig.bind(this, 'Sprid virus', 'checkB', !config.checkB)}>
						<div className='form-check form-switch'>
							<input className='form-check-input ' type='checkbox' role='switch' checked={config.checkB} />
							<label className='form-check-label ps-1'>Sprid virus</label>
						</div>
					</div>

					<div className='dropdown-item hover:none' onClick={onConfig.bind(this, 'Gå hem', 'checkC', !config.checkC)}>
						<div className='form-check form-switch'>
							<input className='form-check-input ' type='checkbox' role='switch' checked={config.checkC} />
							<label className='form-check-label ps-1'>Gå hem</label>
						</div>
					</div>
				</div>
			</Popup>
		);
	};

	const rangeSample = () => {
		function ignoreClick(event) {
			event.preventDefault();
			event.stopPropagation();
		}

		function onChange(event) {
			let volume = event.target.value;
			setConfig({ ...config, volume: volume });
			setText(`Ljudvolym ${volume}%`);
		}

		return (
			<Popup>
				<button className='btn btn-primary m-1'>
					Ljudvolym <span style={{ fontSize: '75%' }}>▼</span>
				</button>

				<div className='Dropdown dropdown-menu mt-1 pb-1 show shadow-sm' xonClick={ignoreClick}>
					<div className='dropdown-item hover:none' onClick={ignoreClick}>
						<input type='range' min='0' max='10' step='1' className='form-range' value={config.volume} onChange={onChange} onClick={ignoreClick} />
					</div>
				</div>
			</Popup>
		);
	};

	const popoverSample = () => {
		const onClick = (description, event) => {
			setText(`${description}`);
		};

		return (
			<Popup>
				<button className='btn btn-primary m-1'>
					Popover <span style={{ fontSize: '70%' }}>▼</span>
				</button>

				<div className='popover mt-1 shadow-sm'>
					<div style={{ xfontSize: '95%' }} className='py-1 popover-header'>
						Välj kategori
					</div>

					<div className='popover-body'>
						<div className='btn-group'>
							<div className='btn btn-primary' onClick={onClick.bind(this, 'Du valt kläder')}>
								Kläder
							</div>
							<button className='btn btn-primary' onClick={onClick.bind(this, 'Du valt perfym')}>
								Perfym
							</button>
							<button className='btn btn-primary' onClick={onClick.bind(this, 'Du valt skor')}>
								Skor
							</button>
						</div>
					</div>
				</div>
			</Popup>
		);
	};

	return (
		<Template title='Exempel på popups med Bootstrap CSS'>
			{radioSample()}
			{switchSample()}
			{popoverSample()}
			{rangeSample()}

			<br />
				<label className='form-label p-1'>{text}</label>
		</Template>
	);
}
