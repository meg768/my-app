import React from 'react';
import './index.scss';
//import Fade from '../../../../components/fade';

import classNames from 'classnames';

import { Transition } from 'react-transition-group';

function debug() {
	console.log.apply(null, arguments);
}

function FadeAnimation(args) {
	let { show = false, unmount = true, tag: Tag = 'div', duration = 100, children, style = {}, ...props } = args;

	const ref = React.useRef(null);
	const [visible, setVisible] = React.useState(show);
	const [mounted, setMounted] = React.useState(false);
	const [contentHeight, setContentHeight] = React.useState(null);

	React.useEffect(() => {
		let from = { opacity: 0 };
		let to = { opacity: 1 };
		let options = { duration: duration, fill: 'forwards' };

		if (ref.current && contentHeight == null) {
			debug(`HEIGHT: ${ref.current.clientHeight}`);
			setContentHeight(ref.current.clientHeight);
		}

		if (show) {
			if (ref.current && mounted) {
				ref.current.animate([from, to], options);
			}
			setVisible(true);
			setMounted(true);
		} else {
			if (ref.current && mounted) {
				const animation = ref.current.animate([to, from], options);

				animation.onfinish = () => {
					setVisible(false);
					setMounted(false);
				};
			}
		}
	}, [children, visible]);

	if (!visible) {
		if (unmount) {
			return null;
		}

		style.display = 'none';
	}

	return (
		<Tag ref={ref} style={style} {...props}>
			{children}
		</Tag>
	);
}

function FadeTransition({ children, show, unmount = true, duration = 1000 }) {
	const node = React.useRef(null);
	const [contentHeight, setContentHeight] = React.useState(null);

	React.useEffect(() => {
		if (node.current) {
			debug(`HEIGHT: ${node.current.clientHeight}`);
			setContentHeight(node.current.clientHeight);
		}
	}, [children]);

	function transition(state) {
		debug(`STATE: ${state}`);
		let defaultStyle = {
			transition: `opacity ${duration}ms ease-in-out`,
		};

		const transitionStyles = {
			entering: { opacity: 1 },
			entered: { opacity: 1 },
			exiting: { opacity: 0 },
			exited: { opacity: 0 },
		};

		if (contentHeight != null) {
		}

		return (
			<div ref={node} style={{ ...defaultStyle, ...transitionStyles[state] }}>
				{children}
			</div>
		);
	}

	return (
		<Transition in={show} timeout={duration} unmountOnExit={unmount}>
			{transition}
		</Transition>
	);
}

function CollapseTransition({ children, show, unmount = true, duration = 1000 }) {
	const ref = React.useRef(null);
	const [visible, setVisible] = React.useState(show);
	const [mounted, setMounted] = React.useState(false);
	const [contentHeight, setContentHeight] = React.useState(null);

	React.useEffect(() => {
		if (ref.current) {
			debug(`HEIGHT: ${ref.current.clientHeight}`);
			setContentHeight(ref.current.clientHeight);
		}
	}, [children]);

	function transition(state) {
		debug(`STATE: ${state}`);
		let defaultStyle = {
			transition: `opacity ${duration}ms ease-in-out, height ${duration}ms ease-in-out`,
			overflow: 'hidden',
		};

		const transitionStyles = {
			entering: { opacity: 1, height: contentHeight },
			entered: { opacity: 1, height: contentHeight },
			exiting: { opacity: 0, height: 0 },
			exited: { opacity: 0, height: 0 },
		};

		return (
			<div ref={ref} style={{ ...defaultStyle, ...transitionStyles[state] }}>
				{children}
			</div>
		);
	}

	return (
		<Transition in={show} timeout={duration} unmountOnExit={unmount}>
			{transition}
		</Transition>
	);
}

function Fade(args) {
	let { tag: Tag = 'div', children, show, duration = 100, style = {}, ...props } = args;

	const ref = React.useRef(null);
	const [contentHeight, setContentHeight] = React.useState(null);

	React.useEffect(() => {
		if (ref.current) {
			setContentHeight(ref.current.clientHeight);
		}
	}, [children]);

	let additionalStyle = {
		transition: `opacity ${duration}ms ease-in-out`,
		opacity: show ? 1 : 0,
	};

	return (
		<Tag style={{ ...style, ...additionalStyle }} {...props}>
			<div ref={ref}>{children}</div>
		</Tag>
	);
}

function Collapse(args) {
	let { tag: Tag = 'div', children, show, duration = 'auto', style = {}, ...props } = args;

	const ref = React.useRef(null);
	const [contentHeight, setContentHeight] = React.useState(null);

	React.useEffect(() => {
		if (ref.current) {
			setContentHeight(ref.current.clientHeight);
		}
	}, [children]);

	if (duration === 'auto') {
		duration = 200;
	}

	let factor = 2;
	
    if (!show) {
		factor = 1 / factor;
	}
	let additionalStyle = {
		transition: `height ${duration}ms ease-in-out, opacity ${duration + duration * factor}ms ease-in-out`,
		overflow: 'hidden',
		opacity: show ? 1 : 0,
		height: show ? contentHeight : 0,
	};

	if (!show) {
		additionalStyle.transition = `height ${duration + duration * factor}ms ease-in-out, opacity ${duration}ms ease-in-out`;
	}
	return (
		<Tag style={{ ...style, ...additionalStyle }} {...props}>
			<div ref={ref}>{children}</div>
		</Tag>
	);
}

export default function (props) {
	var { template: Template, ...props } = props;
	const [visible, setVisible] = React.useState(true);

	function onClick(event) {
		setVisible(!visible);
	}

	function onDismiss(event) {
		setVisible(!visible);
	}

	let MyTransition = Collapse;

	return (
		<Template title='Collapse/Expand'>
			<MyTransition show={visible}>
				<div className='alert alert-dismissible alert-info'>
					<h5 className='alert-heading'>Gravida donec phasellus </h5>
					<span>Ligula tincidunt sodales vel nibh. Magnis luctus suscipit conubia, pellentesque.</span>
					<button type='button' onClick={onDismiss} class='btn-close'></button>
				</div>
			</MyTransition>

			<div className='mt-2'>
				<button className='mts-2 btn btn-primary' onClick={onClick}>
					{visible ? 'Collapse' : 'Expand'}
				</button>
			</div>
		</Template>
	);
}
