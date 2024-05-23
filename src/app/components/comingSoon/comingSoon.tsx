import React from 'react'

interface ComingSoonProps {
    params: {
        pageName: string;
    };
}

const ComingSoon = (props: ComingSoonProps) => {
    const { pageName } = props.params;
    return (
        <div className='p-5'>
            <div className='text-center text-5xl p-10'>Coming Soon</div>
            <div className='text-center text-2xl'>{pageName} page is getting done</div>
        </div>
    )
}

export default ComingSoon