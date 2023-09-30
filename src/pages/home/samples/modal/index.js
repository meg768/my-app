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

		<Template title='Exempel på modalt'>
			<button onClick={onClick} className='btn btn-primary'>
				Visa modalt
			</button>
			<Fade duration={150} show={visible} className='backdrop modal d-block' tabindex='-1'>
				<div  className='modal-dialog modal-dialog-centeredx' >
					<div className='modal-content shadow-sm'>
						<div className='modal-header' >
							<p className='modal-title' style={{fontSize:'150%'}} >Titel</p>
							<button type='button' onClick={onClose} className='btn-close' style={{fontSize:'60%'}}></button>
						</div>
						<div className='modal-body'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet arcu auctor feugiat congue. Duis in laoreet ex. Vivamus suscipit in nisl sit amet mollis. Phasellus lacinia viverra tempor. </p>
						</div>
						<div className='modal-footer'>
							<button type='button' onClick={onClose} className='btn btn-primary'>
								Stäng
							</button>
						</div>
					</div>
				</div>
			</Fade>
		</Template>
	);
}
