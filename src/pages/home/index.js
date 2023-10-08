import React from 'react';
import classNames from 'classnames';

import './index.scss';

import Page from '../../components/page';
import ModalSample from './samples/modal';
import PopupSample from './samples/popup';
import ButtonsSample from './samples/buttons';
import CardsSample from './samples/cards';
import AlertsSample from './samples/alerts';
import CollapseSample from './samples/collapse';

function Template(props) {
	var { title, className, children, className, ...props } = props;

    className = classNames('', className);

	return (
		<div className={className}>
            <br/>
            <br/>
			<h3 className=''>{title}</h3>
			<hr />
			{children}
		</div>
	);
}


export default function() {
    

	return (
		<Page title='Vår hemsida'>
			<div>
				<a href='#/about' className='btn btn-primary m-1'>
					Om oss
				</a>
				<a href='http://98.128.130.56/myapp/' className='btn btn-primary m-1'>
					Tidigare versioner
				</a>
                <hr/>

                <PopupSample template={Template}/>
                <CollapseSample template={Template}/>
                <ModalSample template={Template}/>
                <ButtonsSample template={Template}/>
                <CardsSample template={Template}/>
                <AlertsSample template={Template}/>
			</div>
		</Page>
	);
};
