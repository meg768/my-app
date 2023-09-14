import './index.scss';
import classNames from 'classnames';

const Dropdown = (args) => {
	let { children, className, ...props } = args;

	className = classNames('Dropdown dropdown-menu show', className);
	return (
		<div className={className} {...props}>
			{children}
		</div>
	);
};

Dropdown.Header = (props) => {
	function disableClick(event) {
		event.preventDefault();
		event.stopPropagation();
	}
	return (
		<div className='dropdown-header' onClick={disableClick}>
			{props.children}
		</div>
	);
};

Dropdown.Devider = (props) => {
	return <div className='dropdown-divider'>{props.children}</div>;
};

Dropdown.Switch = (props) => {
	let onChange = props.onClick || props.onChange;

	return (
		<div className='dropdown-item switch' onClick={onChange}>
			<div className='form-check form-switch'>
				<input className='form-check-input ' type='checkbox' role='switch' onChange={onChange} checked={props.checked} />
				<label className='form-check-label ps-1'>{props.children} </label>
			</div>
		</div>
	);
};

Dropdown.Item = (props) => {
	return (
		<button className='dropdown-item' onClick={props.onClick}>
			{props.children}
		</button>
	);
};

Dropdown.Radio = (props) => {
	let onChange = props.onClick || props.onChange;

	return (
		<div className='dropdown-item radio' onClick={onChange}>
			<div className='form-check'>
				<input className='form-check-input' type='radio' role='switch' onChange={onChange} checked={props.checked} />
				<label className='form-check-label ps-1'>{props.children}</label>
			</div>
		</div>
	);
};

export default Dropdown;
