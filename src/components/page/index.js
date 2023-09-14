import React from 'react';

export default function (props) {

    let {children, title = 'No title', className} = props;

    return <div className={className}><h1>{title}</h1>{children}</div>;
}
