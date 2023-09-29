import React from 'react';
import './index.scss';

import Fade from '../../../../components/fade';
import classNames from 'classnames';

export default function (props) {
	var { template: Template, ...props } = props;

	const [visible, setVisible] = React.useState(false);

	function onClick(event) {
		setVisible(!visible);
	}

	function onClose(event) {
		setVisible(false);
	}

	return (
		<Template title='Modalt'>
			<button onClick={onClick} className='btn btn-primary m-1'>
				Visa
			</button>
			<Fade duration={100} show={visible} className='modal d-block' tabindex='-1'>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content  shadow-sm'>
						<div className='modal-header'>
							<h5 className='modal-title'>Modal title</h5>
							<button type='button' onClick={onClose} class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<p>Modal body text goes here.</p>
						</div>
						<div className='modal-footer'>
							<button type='button' onClick={onClose} className='btn btn-secondary' data-bs-dismiss='modal'>
								Close
							</button>
							<button type='button' onClick={onClose} className='btn btn-primary'>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</Fade>
		</Template>
	);
}

