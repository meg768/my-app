import './index.scss';

import React from 'react';
import { Transition } from 'react-transition-group';

function debug() {
	console.log.apply(null, arguments);
}

function CollapseUsingTransition({ children, show, unmount = true, duration = 500 }) {

	const ref = React.useRef(null);
	const [contentHeight, setContentHeight] = React.useState(null);

	React.useEffect(() => {
		if (ref.current && contentHeight == null) {
            let height = ref.current.clientHeight;
            if (height > 0) {
                debug(`Content height:${height}`);
                setContentHeight(height);
    
            }
		}
	});

	return (
		<Transition in={show} timeout={duration} unmountOnExit={unmount}>
			{(state) => {
                let factorA = 1;
                let factorB = 1;

                let style = {};
				style.overflow = 'hidden';

				switch (state) {
					case 'entered':
					case 'entering': {
						style.transition = `opacity ${duration * factorA}ms ease-in-out, height ${duration * factorB}ms ease-in-out`;
						style.opacity = 1;
						style.height = contentHeight;
						break;
					}

                    case 'exiting':
					case 'exited': {
						style.transition = `opacity ${duration * factorA}ms ease-in-out, height ${duration *factorB}ms ease-in-out`;
						style.opacity = 0;
						style.height = 0;
						break;
					}
				}

				return (
					<div ref={ref} style={style}>
						{children}
					</div>
				);
			}}
		</Transition>
	);
}

function CollapseUsingStyles(args) {
	let { tag: Tag = 'div', children, show, duration = 500, style = {}, ...props } = args;

	const ref = React.useRef(null);
	const [contentHeight, setContentHeight] = React.useState(null);

	React.useEffect(() => {
		if (ref.current && contentHeight == null) {
			let height = ref.current.clientHeight;
			debug(`Content height:${height}`);
			setContentHeight(height);
		}
	}, [children]);

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

//export default CollapseUsingStyles;
export default CollapseUsingTransition;