import React from 'react';
import Page from '../../components/page';
import Button from '../../components/button';

export default function(props) {
	return (
		<Page title='Om oss' className='p-5'>
			<Button className="btn-primary m-1" href='#/home'>Vår hemsida</Button>
		</Page>
	);
}
