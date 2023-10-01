import './index.scss';
import React, { useEffect, useState, useRef } from 'react';
import Fade from '../fade';

import { usePopper } from 'react-popper';

const Component = (args) => {
	let { placement = 'bottom-start', ...props } = args;

	const [visible, setVisible] = useState(false);
	const [fading, setFading] = useState(false);
	const [trigger, setTrigger] = useState(null);
	const [popper, setPopper] = useState(null);

	const children = React.Children.toArray(props.children);

	let triggerElement = undefined;
	let popperElement = undefined;

	if (triggerElement == undefined && popperElement == undefined && children.length == 2) {
		triggerElement = children[0];
		popperElement = children[1];
	}

	const { styles, attributes } = usePopper(trigger, popper, {
		placement: placement,
	});

	function debug() {
		console.log.apply(this, arguments);
	}

	useEffect(() => {
		function onDocumentClick(event) {
			if (visible) {
				if (trigger.contains(event.target)) {
					debug('Inside target', event.target);
				} else if (popper.contains(event.target)) {
					debug(event.target);
					debug('Inside dropdown', event.target);
					setVisible(false);
				} else {
					debug('Both outside target and dropdown', event.target);
					setVisible(false);
				}
			}
		}

		if (visible) {
			const from = { opacity: 0 };
			const to = { opacity: 1 };
			const options = { duration: 400, fill: 'forwards' };

			document.addEventListener('click', onDocumentClick, false);

			if (popper) {
				popper.animate([from, to], options);
			}

			return function cleanup() {
				if (popper) {
					const animation = popper.animate([to, from], options);

					animation.onfinish = () => {
						setVisible(false);
					};
				}
				document.removeEventListener('click', onDocumentClick, false);
			};
		}
	}, [popper, visible]);

	function renderPopper() {
		let style = { ...styles.popper };

		if (!visible) {
			return;
		}

		if (!visible) {
			style.display = 'none';
		}

		let clone = React.cloneElement(popperElement, { ref: setPopper, ...attributes.popper, style: style });
		return clone;
		return (
			<Fade duration={300} show={visible}>
				{clone}
			</Fade>
		);
		//return clone;
		return visible ? clone : undefined;
	}

	function renderTrigger() {
		function onClick(event) {
			setVisible(!visible);
		}

		return React.cloneElement(triggerElement, { onClick: onClick, ref: setTrigger });
	}

	return (
		<>
			{renderTrigger()}
			{renderPopper()}
		</>
	);
};

export default Component;
