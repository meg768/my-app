import React from 'react';

export default function Fade(args) {
	const { show, tag: Tag = 'span', style = {}, unmount = true, duration = 100, children, ...props } = args;

	const elementRef = React.useRef();
	const [visible, setVisible] = React.useState(show);

	React.useEffect(() => {
		const from = { ...style, opacity: 0 };
		const to = { ...style, opacity: 1 };
		const options = { duration: duration, fill: 'forwards' };
		const element = elementRef.current;

		if (show) {
			setVisible(true);

			if (element) {
  //              element.style.display = 'block';
				element.animate([from, to], options);
			}
		} else {
			if (element) {
				const animation = element.animate([to, from], options);

				animation.onfinish = () => {
//                    element.style.display = 'none';
					setVisible(false);
				};
			}
		}
	});


	if (unmount && !visible) {
		return;
	}

	if (!visible) {
		style.display = 'none';
	}
    else {
//        style.display = 'block';
    }

	return (
		<Tag ref={elementRef} {...props} style={style}>
			{children}
		</Tag>
	);
}