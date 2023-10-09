import React from 'react';
import './index.scss';
import Collapse from '../../../../components/collapse';

import Fade from '../../../../components/fade';
function debug() {
	console.log.apply(null, arguments);
}

export default function (props) {
	var { template: Template, children, ...props } = props;
	const [visible, setVisible] = React.useState(false);





    function toggle() {
        console.log('toggling');
		setVisible(!visible);
    }

	function renderButton() {
        
        if (visible) {
            return null;
        }
        
		return (
			<button className=' btn btn-primary' onClick={toggle}>
				{!visible ? 'Display alert' : 'Hide alert'}
			</button>
		);
	}

	return (
		<Template title='Collapse/Expand'>

			<Collapse show={visible} unmount={true}>
				<div className='alert alert-dismissible alert-warning'>
					<h5 className='alert-heading'>Gravida donec phasellus </h5>
					<span>Ligula tincidunt sodales vel nibh. Magnis luctus suscipit conubia, pellentesque.</span>
					<button type='button' onClick={toggle} class='btn-close'></button>
				</div>
			</Collapse>
			{renderButton()}
		</Template>
	);
}
