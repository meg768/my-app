import React from 'react';

export default function Fade(args) {
	const { show = false, fadeIn = true, unmount = true, fadeOut = true, tag: Tag = 'div', duration = 100, children, ...props } = args;

	const [element, setElement] = React.useState(null);
	const [visible, setVisible] = React.useState(show);

	React.useEffect(() => {
		const from = { opacity: 0 };
		const to = { opacity: 1 };
		const options = { duration: duration, fill: 'forwards' };

		if (show) {
			setVisible(true);

			if (element) {
				if (fadeIn) {
					element.animate([from, to], options);
				} else {
					element.opacity = to.opacity;
				}
			}
		} else {
			if (element) {
				const animation = element.animate([to, from], options);

				animation.onfinish = () => {
					setVisible(false);
				};
			}
		}
	});

	if (!visible) {
		return;
	}

	return (
		<Tag ref={setElement} {...props}>
			{children}
		</Tag>
	);
}
