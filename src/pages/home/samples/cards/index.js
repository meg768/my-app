import React from 'react';

import './index.scss';

import Popup from '../../../../components/popup';
import Fade from '../../../../components/fade';
import classNames from 'classnames';

function Card(args) {
	let { className, title } = args;

	className = classNames(className, 'card');

	return (
		<div className={className}>
			<div className='card-header'>{title}</div>
			<div className='card-body'>
				<h5 className='card-title'>Card title</h5>
				<p className='card-text'>Porta rutrum, aenean Hendrerit varius. Cursus dolor sed leo rutrum elementum viverra malesuada magna dictum hymenaeos arcu class parturient mauris.</p>
			</div>
		</div>
	);
}
export default function (props) {
	var { template: Template, ...props } = props;

	return (
		<Template title='Cards'>
			<div className='contsainer'>
				<div className='row'>
					<div className='col'>
						<Card title='Default' className='' />
					</div>
					<div className='col'>
						<Card title='Primary'className='text-white bg-primary' />
					</div>

					<div className='col'>
						<Card title='Secondary' className='text-white bg-secondary' />
					</div>
				</div>

				<br />
				<div className='row'>
					<div className='col'>
						<Card title='Success' className='text-white bg-success' />
					</div>

					<div className='col'>
						<Card title='Warning' className='card bg-warning' />
					</div>
					<div className='col'>
						<Card title='Danger' className='text-white bg-danger' />
					</div>
				</div>
			</div>
		</Template>
	);
}
