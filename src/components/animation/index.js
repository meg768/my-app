import React from 'react';

export default function Animate(args) {
	let { show, tag: Tag = 'span', style = {}, type = 'fade', duration = 200, children, from = {}, to = {}, options = { fill: 'forwards' }, ...props } = args;

	const elementRef = React.useRef();
	const [visible, setVisible] = React.useState(show);

	if (duration) {
		options.duration = duration;
	}

	switch (type) {
		case 'fade': {
			from.opacity = 0;
			to.opacity = 1;
			break;
		}
	}

	React.useEffect(() => {
		const element = elementRef.current;

		if (show) {
			setVisible(true);

			if (!element) {
				return;
			}

			element.animate([from, to], options);
		} else {
			if (!element) {
				return;
			}

			const animation = element.animate([to, from], options);

			animation.onfinish = () => {
				setVisible(false);
			};
		}
	}, [show, visible]);

	if (!visible) {
		style.display = 'none';
	}
/*
	return (
		<Tag ref={elementRef} style={style} {...props}>
			{children}
		</Tag>
	);
*/
	return (
		visible && (
			<Tag ref={elementRef} style={style} {...props}>
				{children}
			</Tag>
		)
	);
}
