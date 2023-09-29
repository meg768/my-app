import React from 'react';
import Page from '../../components/page';

export default function (props) {
	return (
		<Page title='Om oss' className='p-5'>
				<a className='btn btn-primary' href='#/home'>
					Vår hemsida
				</a>
                <hr/>
		</Page>
	);
}
