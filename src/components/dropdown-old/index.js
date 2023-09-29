import './index.scss';
import classNames from 'classnames';
import { useTransition, animated } from 'react-spring';



function Fade(props) {
	var { children, show, duration = 200, ...props } = props;

	let fromStyle = { opacity: show ? 0 : 1 };
	let enterStyle = { opacity: show ? 1 : 0 };
	let toStyle = undefined; //{ opacity: show ? 1 : 0 };
	let leaveStyle = { opacity: 0 }; 

	if (!show) {
		enterStyle = { ...enterStyle, ...{ display: 'none' } };
	}

	const transitions = useTransition(children, {
		from: fromStyle,
		to: toStyle,
		enter: enterStyle,
		leave: leaveStyle,
		config: {
			duration: duration,
		},
	});

	return transitions((style, item) => {
		return <animated.div style={style}>{item}</animated.div>;
	});
}

const Dropdown = (props) => {
	var { children, style = {}, className, ...props } = props;

	className = classNames('Dropdown dropdown-menu show', className);


	return (
		<div style={style} className={className} {...props}>
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
		<div className='dropdown-header' onClick={disableClick} >
			{props.children}
		</div>
	);
};

Dropdown.Devider = (props) => {

	return <div className='dropdown-divider' >{props.children}</div>;
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

Dropdown.Range = (props) => {
	let onChange = props.onClick || props.onChange;

    function disableClick(event) {
		event.preventDefault();
		event.stopPropagation();
	}

	return (
		<div className='dropdown-item range' onClick={disableClick}>
			<input type='range' min="0" max="10" step="1" className='form-range' onClick={disableClick}/>
		</div>
	);
};

export default Dropdown;
