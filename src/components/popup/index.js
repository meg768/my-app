import './index.scss';
import React from 'react';

import { usePopper } from 'react-popper';

const Component = (args) => {
	let { placement = 'bottom-start', ...props } = args;

	const UNMOUNTED = 0;
	const MOUNTED = 1;
	const MOUNT = 2;
	const UNMOUNT = 3;

	const [mountState, setMountState] = React.useState(UNMOUNTED);
	const [trigger, setTrigger] = React.useState(null);
	const [popper, setPopper] = React.useState(null);

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

	React.useEffect(() => {
		if (mountState == MOUNTED) {

			function onDocumentClick(event) {
				if (mountState == MOUNTED && trigger && popper) {
					if (trigger.contains(event.target)) {
						debug('Inside target', event.target);
					} else if (popper.contains(event.target)) {
						debug(event.target);
						debug('Inside dropdown', event.target);
						setMountState(UNMOUNT);
					} else {
						debug('Both outside target and dropdown', event.target);
						setMountState(UNMOUNT);
					}
				}
			}

			debug(`Adding document event listener...`);
			document.addEventListener('click', onDocumentClick, false);

			return function cleanup() {
				debug(`Removing document event listener...`);
				document.removeEventListener('click', onDocumentClick, false);
			};
		}

		if (popper && mountState == MOUNT) {
			const from = { opacity: 0 };
			const to = { opacity: 1 };
			const options = { duration: 200, fill: 'forwards' };

			const animation = popper.animate([from, to], options);

			animation.onfinish = () => {
				setMountState(MOUNTED);
			};
		}

		if (popper && mountState == UNMOUNT) {
			const from = { opacity: 1 };
			const to = { opacity: 0 };
			const options = { duration: 200, fill: 'forwards' };

			const animation = popper.animate([from, to], options);

			animation.onfinish = () => {
				setMountState(UNMOUNTED);
			};
		}
	}, [popper, mountState]);

	function renderPopper() {

		if (mountState == UNMOUNTED) {
			return;
		}

		return React.cloneElement(popperElement, { ref: setPopper, ...attributes.popper, style: { ...styles.popper } });
	}

	function renderTrigger() {
		function onClick(event) {
			switch (mountState) {
				case MOUNTED:
					debug(`Setting state to UNMOUNT`);
					setMountState(UNMOUNT);
					break;
				case UNMOUNTED: {
					debug(`Setting state to MOUNT`);
					setMountState(MOUNT);
					break;
				}
			}
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
