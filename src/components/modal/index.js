import React from 'react';
import './index.scss';

import Fade from '../fade';
import classNames from 'classnames';

export default function Modal(props) {
	var { children, show = false, blur = false, backdrop = true, centered = false, ...props } = props;

	let modalStyle = {};

	modalStyle['display'] = 'block';

	if (backdrop) {
		modalStyle['background-color'] = 'rgba(0,0,0,0.10)';
	}

	if (blur) {
		blur = 'blur(1px)';
		modalStyle['backdrop-filter'] = blur;
		modalStyle['-webkit-backdrop-filter'] = blur;
	}

	let modalDialogClassName = classNames('modal-dialog', centered ? 'modal-dialog-centered' : null);

	props.className = classNames('modal-content', props.className);

	return (
		<Fade duration={200} show={show} style={modalStyle} className='modal' tabindex='-1'>
			<div className={modalDialogClassName}>
				<div {...props}>{children}</div>
			</div>
		</Fade>
	);
}
