import React from 'react';

export default function Fade(args) {
	const { show, tag: Tag = 'span', style = {}, unmount = true, duration = 200, children, ...props } = args;

	const elementRef = React.useRef();
	const [visible, setVisible] = React.useState(show);

	React.useEffect(() => {
		const from = { opacity: 0 };
		const to = { opacity: 1 };
		const options = { duration: duration, fill: 'forwards' };
		const element = elementRef.current;

		if (show) {
			setVisible(true);

			if (element) {
				element.animate([from, to], options);
			}
		} else {
			if (element) {
				const animation = element.animate([to, from], options);

				animation.onfinish = () => {
					setVisible(false);
				};
			}
		}
	}, [show]);

	if (unmount && !visible) {
		return;
	}

	if (!visible) {
		style.display = 'none';
	}

	return (
		<Tag ref={elementRef} {...props} style={style}>
			{children}
		</Tag>
	);
}
