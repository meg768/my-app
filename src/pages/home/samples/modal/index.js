import React from 'react';
import './index.scss';

import Fade from '../../../../components/fade';
import classNames from 'classnames';

function Modal(props) {

}

export default function (props) {
	var { template: Template, ...props } = props;

	const [visible, setVisible] = React.useState(false);

	function onClick(event) {
		setVisible(!visible);
	}

	function onClose(event) {
		setVisible(false);
	}

    let blur = 'blur(3px)';

    let modalStyle = {
        'backdrop-filter': blur,
        '-webkit-backdrop-filter': blur,
        backgroundColor: 'rgba(0,0,0,0.70)',
        display: 'block'            
    };

    let modalClass = 'modal';


	return (

		<Template title='Exempel på modalt' className='ModalSample'>
			<button onClick={onClick} className='btn btn-primary'>
				Visa modalt
			</button>
			<Fade duration={300} show={visible} style={modalStyle} className={modalClass} tabindex='-1'>
				<div  className='modal-dialog modal-dialog-centeredx' >
					<div className='modal-content shadow-sm'>
						<div className='modal-header' >
							<p className='modal-title' style={{fonstSize:'150%'}} >Pax Vobiscum</p>
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
