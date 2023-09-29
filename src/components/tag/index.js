
export default function(args) {
	let { tag = 'div', ...props } = args;
    let Component = tag;

    return (
		<Component {...props}/> 
	);
}

