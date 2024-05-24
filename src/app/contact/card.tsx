import React from 'react'

interface CardProps {
    icon: React.ReactNode;
    name: string;
    contact: string;
    url: string;
}

const Card: React.FC<CardProps> = (props) => {
    const { icon, name, contact, url } = props;

    return (
        <a href={url} target='_blank'>
            <div className='rounded-xl shadow-lg overflow-hidden'>
                <div className='flex flex-row justify-start py-5 gap-2 hover:bg-soft-gray'>
                    <div className='flex w-20 justify-center my-auto ml-2'>
                        <div className='text-3xl'>{icon}</div>
                    </div>
                    
                    <div className='flex flex-col p-2'>
                        <div>{name}</div>
                        <div>{contact}</div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Card;