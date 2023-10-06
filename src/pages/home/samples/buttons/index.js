import React from 'react';
import './index.scss';
import Fade from '../../../../components/fade';

import classNames from 'classnames';



function Button(args) {
	let { children, color = 'primary', outline, className, ...props } = args;

    className = classNames(className, 'btn m-1');

    if (color) {
        if (outline) {
            className = classNames(className, color ? `btn-outline-${color}` : null);

        }
        else {
            className = classNames(className, color ? `btn-${color}` : null);

        }
    }


	return (
		<button type='button' className={className}>
			{children}
		</button>
	);
}

export default function (props) {
	var { template: Template, ...props } = props;
	const [showAlert, setShowAlert] = React.useState(true);

	function closeAlert() {
		setShowAlert(false);
	}

	return (
		<Template title='Buttons'>
			<h5 className='m-2'>Normal</h5>

			<Button>
				Primary
			</Button>
			<Button color='secondary'>
				Secondary
			</Button>
			<Button color='success'>
				Success
			</Button>
			<Button color='info'>
				Info
			</Button>
			<Button color='warning'>
				Warning
			</Button>
			<Button color='danger'>
				Danger
			</Button>
			<Button color='light'>
				Light
			</Button>
			<Button color='dark'>
				Dark
			</Button>
			<h5 className='m-2'>Outlined</h5>

			<Button outline>
				Primary
			</Button>
			<Button outline color='secondary'>
				Secondary
			</Button>
			<Button outline color='success'>
				Success
			</Button>
			<Button outline color='info'>
				Info
			</Button>
			<Button outline color='warning'>
				Warning
			</Button>
			<Button outline color='danger'>
				Danger
			</Button>
			<Button outline color='light'>
				Light
			</Button>
			<Button outline color='dark'>
				Dark
			</Button>
			<h5 className='m-2'>Other sizes</h5>

			<button type='button' class='btn btn-primary btn-lg m-1'>
				Large button
			</button>
			<button type='button' class='btn btn-primary m-1'>
				Default button
			</button>
			<button type='button' class='btn btn-primary btn-sm m-1'>
				Small button
			</button>
		</Template>
	);
}
