import React, { useEffect, useState, useRef } from 'react';
import { usePopper } from 'react-popper';

const Popper = (props) => {
	const [visible, setVisible] = useState(false);
	const [trigger, setTrigger] = useState(null);
	const [popper, setPopper] = useState(null);

	const children = React.Children.toArray(props.children);

	let triggerElement = getChildOfType(Popper.Trigger);
	let contentElement = getChildOfType(Popper.Content);

	if (triggerElement == undefined && contentElement == undefined && children.length == 2) {
		triggerElement = children[0];
		contentElement = children[1];
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

	function renderPopperX() {
		let style = { ...styles.popper };

        console.log('Rendering popperX')
		style.display = visible ? 'block' : 'none';

		return (
			<div ref={setPopper} style={style} {...attributes.popper}>
				{contentElement}
			</div>
		);
	}

	function renderPopper() {
		if (visible) {
			return (
				<div ref={setPopper} style={styles.popper} {...attributes.popper}>
					{contentElement}
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

Popper.Trigger = function (props) {
	const children = React.Children.toArray(props.children);
	return children[0];
};

Popper.Content = function (props) {
	const children = React.Children.toArray(props.children);
	return children[0];
};

export default Popper;
