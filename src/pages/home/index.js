import React from 'react';

import './index.scss';

import Page from '../../components/page';
import ModalSample from './samples/modal';
import PopupSample from './samples/popup';

function Sample(props) {
	var { title, children, ...props } = props;

	return (
		<div className='alert alert-light shadow-sm'>
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

                <PopupSample template={Sample}/>
                <ModalSample template={Sample}/>
			</div>
		</Page>
	);
};
