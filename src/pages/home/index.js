import React from 'react';
import classNames from 'classnames';

import './index.scss';

import Page from '../../components/page';
import ModalSample from './samples/modal';
import PopupSample from './samples/popup';

function Template(props) {
	var { title, className, children, className, ...props } = props;

    className = classNames('alert alert-light shadow-sm', className);

	return (
		<div className={className}>
			<h4 className='alert-heading'>{title}</h4>
			<hr />
			{children}
		</div>
	);
}


export default function() {
    

	return (
		<Page className='Home p-5' title='Vår hemsida'>
			<div>
				<a href='#/about' className='btn btn-primary'>
					Om oss
				</a>
                <hr/>

                <PopupSample template={Template}/>
                <ModalSample template={Template}/>
			</div>
		</Page>
	);
};
