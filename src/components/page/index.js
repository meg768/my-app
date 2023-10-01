import React from 'react';
import classNames from 'classnames';

export default function (props) {

    let {children, title = 'No title', className} = props;

    className = classNames(className, 'p-5');

    return <div className={className}><h1>{title}</h1>{children}</div>;
}
