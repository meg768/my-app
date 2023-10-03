import React from 'react';

import './index.scss';

import Popup from '../../../../components/popup';
import Fade from '../../../../components/fade';
import classNames from 'classnames';

export default function (props) {
	var { template: Template, ...props } = props;

	return (
		<Template title='Knappar'>
			<button type='button' class='btn btn-primary m-1'>
				Primary
			</button>
			<button type='button' class='btn btn-secondary m-1'>
				Secondary
			</button>
			<button type='button' class='btn btn-success m-1'>
				Success
			</button>
			<button type='button' class='btn btn-info m-1'>
				Info
			</button>
			<button type='button' class='btn btn-warning m-1'>
				Warning
			</button>
			<button type='button' class='btn btn-danger m-1'>
				Danger
			</button>
			<button type='button' class='btn btn-light m-1'>
				Light
			</button>
			<button type='button' class='btn btn-dark m-1'>
				Dark
			</button>
			<button type='button' class='btn btn-link m-1'>
				Link
			</button>
            <br/>
            <br/>
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
