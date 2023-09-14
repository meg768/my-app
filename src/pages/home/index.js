import React from 'react';

import './index.scss';

import Page from '../../components/page';
import Popper from '../../components/popper';
import Button from '../../components/button';
import Dropdown from '../../components/dropdown';

const  Foo = () => {
	const [text, setText] = React.useState('');
	const [options, setOptions] = React.useState({});
	const [color, setColor] = React.useState('red');


	const onPasswordChanged = () => {
		setText(`Ditt lösenord är nu ändrat`);
	};

	const onUsernameChanged = () => {
		setText(`Ditt användarnamn är nu ändrat`);
	};

	const onOption = (name, event) => {

        let foo = {...options};

        foo[name] = !foo[name]
        setOptions(foo);

        event.stopPropagation();
	};



    const onColor = (name, description, event) => {
		setColor(name);
        setText(`Du valt ${description}.`);
		event.stopPropagation();
	};


	return (
		<Page title='Vår hemsida' className='p-5'>
			<div className='btn-groupx'>

				<Button href='#/about' className='btn-primary m-1'>
					Om oss
				</Button>

				<Popper>
					<Button className='btn-primary m-1'>
						Inställningar <span style={{ fontSize: '75%' }}>▼</span>
					</Button>

					<Dropdown className='m-1'>
						<Dropdown.Header>Ditt konto</Dropdown.Header>

						<Dropdown.Item onClick={onUsernameChanged}>Ändra användarnamn...</Dropdown.Item>
						<Dropdown.Item onClick={onPasswordChanged}>Byt lösenord...</Dropdown.Item>

						<Dropdown.Devider></Dropdown.Devider>

						<Dropdown.Switch checked={options['A'] == true} onClick={onOption.bind(this, 'A')}>
							Sprid virus
						</Dropdown.Switch>

						<Dropdown.Switch checked={options['B'] == true} onClick={onOption.bind(this, 'B')}>
							Använd skyddsmask
						</Dropdown.Switch>

						<Dropdown.Switch checked={options['C'] == true} onClick={onOption.bind(this, 'C')}>
							Slicka ledstångar
						</Dropdown.Switch>

						<Dropdown.Devider />
						<Dropdown.Header>Favoritfärg</Dropdown.Header>

						<Dropdown.Radio checked={color == 'red'} onClick={onColor.bind(this, 'red', 'röd')}>
							Röd
						</Dropdown.Radio>

						<Dropdown.Radio checked={color == 'blue'} onClick={onColor.bind(this, 'blue', 'blå')}>
							Blå
						</Dropdown.Radio>

						<Dropdown.Radio checked={color == 'green'} onClick={onColor.bind(this, 'green', 'grön')}>
							Grön
						</Dropdown.Radio>


					</Dropdown>
				</Popper>
			</div>
			<div className='p-1'>{text}</div>
		</Page>
	);
};

export default Foo;
