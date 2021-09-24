import React from 'react';

const Title = ({title=''}) => {
    return (
        <title>Y-Champion{title&&` | ${title}`}</title>
    );
};

export default Title;