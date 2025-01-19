import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

const UsersLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <header className='flex justify-between mb-4 px-8 py-4 bg-gray-100'>
        <div>LOGO</div>
        <div className='flex'>
          <div>
            <Link href='/users'>Users</Link>
          </div>
          <div className='ml-4'>
            <Link href='/messages'>Messages</Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <div>PIE DE PAGINA MAIN</div>
    </div>
  );
};

export default UsersLayout;
