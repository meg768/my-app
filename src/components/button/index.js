import classNames from 'classnames';
import React from 'react';

export default function (args) {
	let { href, children, className, ...props } = args;

    className = classNames('btn', className);

    if (href) {
        return (
            <a href={href} className={className} {...props}> 
                {children}
            </a>
        );
    }

    return (
		<div className={className} {...props}> 
			{children}
		</div>
	);
}
