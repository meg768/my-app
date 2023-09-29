import React from 'react';
import Page from '../../components/page';
import Button from '../../components/button';
import { Container } from 'react-bootstrap';

export default function (props) {
	return (
		<Page title='Om oss' className='p-5'>
				<Button className='btn-primary' href='#/home'>
					Vår hemsida
				</Button>
		</Page>
	);
}
