import './index.scss';
import classNames from 'classnames';
import { useTransition, animated } from 'react-spring';
import React, { useEffect, useState, useRef } from 'react';
import { usePopper } from 'react-popper';


const Component = (props) => {
	const [visible, setVisible] = useState(false);
	const [trigger, setTrigger] = useState(null);
	const [popper, setPopper] = useState(null);

	const children = React.Children.toArray(props.children);

	let triggerElement = getChildOfType(Component.Trigger);
	let popperElement = getChildOfType(Component.Content);


	if (triggerElement == undefined && popperElement == undefined && children.length == 2) {
		triggerElement = children[0];
		popperElement = children[1];
	}

	const { styles, attributes } = usePopper(trigger, popper, {
		placement: props.placement || 'bottom-start',
		xmodifiers: [
			{
				name: 'offset',
				enabled: true,
				options: {
					offset: [0, 0],
				},
			},
		],
	});

	useEffect(() => {
		function onDocumentClick(event) {
            console.log('Document click');
			if (visible) {
				if (trigger.contains(event.target)) {
					console.log('Inside target', event.target);
				} else if (popper.contains(event.target)) {
					console.log('Inside dropdown', event.target);
					setVisible(false);
				} else {
					console.log('Both outside target and dropdown', event.target);
					setVisible(false);
				}

                
			}
		}

		if (visible) {
			console.log('Adding document click');
			document.addEventListener('click', onDocumentClick, false);

			return function cleanup() {
				console.log('Removing document click');
				document.removeEventListener('click', onDocumentClick, false);
			};
		}
	}, [popper]);

	function getChildOfType(type) {
		return React.Children.toArray(props.children).find((child) => {
			return child.type === type;
		});
	}

	function onTriggerClick(event) {
		setVisible(!visible);
	}


	function renderPopper() {


		if (visible) {
			return (
				<div ref={setPopper} style={styles.popper} {...attributes.popper}>
    				{popperElement}
 				</div>
			);
		}
	}

	function renderTrigger() {

		return (
			<div ref={setTrigger} className='d-inline-block' onClick={onTriggerClick}>
				{triggerElement}
			</div>
		);
	}

	return (
		<>
			{renderTrigger()}
			{renderPopper()}
		</>
	);
};

Component.Menu = (props) => {
	var { children, style = {}, className, ...props } = props;

	className = classNames('Dropdown dropdown-menu show', className);

	return (
		<div style={style} className={className} {...props}>
			{children}
		</div>
	);
};

Component.Header = (props) => {
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

Component.Devider = (props) => {

	return <div className='dropdown-divider' >{props.children}</div>;
};

Component.Switch = (props) => {
	let onChange = props.onClick || props.onChange;

	return (
		<div className='dropdown-item' onClick={onChange}>
			<div className='form-check form-switch'>
				<input className='form-check-input ' type='checkbox' role='switch' onChange={onChange} checked={props.checked} />
				<label className='form-check-label ps-1'>{props.children} </label>
			</div>
		</div>
	);
};

Component.Item = (props) => {
	return (
		<button className='dropdown-item' onClick={props.onClick}>
			{props.children}
		</button>
	);
};

Component.Radio = (props) => {
	let onChange = props.onClick || props.onChange;

	return (
		<div className='dropdown-item' onClick={onChange}>
			<div className='form-check'>
				<input className='form-check-input' type='radio' role='switch' onChange={onChange} checked={props.checked} />
				<label className='form-check-label ps-1'>{props.children}</label>
			</div>
		</div>
	);
};

Component.Range = (props) => {
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


Component.Trigger = function (props) {
	const children = React.Children.toArray(props.children);
	return children[0];
};

Component.Content = function (props) {
	const children = React.Children.toArray(props.children);
	return children[0];
};

export default Component;
