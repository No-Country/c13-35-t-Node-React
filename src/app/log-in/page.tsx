import React from 'react';
import Image from 'next/image';
export default function Landing(): JSX.Element {
    return (
        <div>
            <Image src="/images/landing.png" alt="landing" width={500} height={500} />
        </div>
    )
}
