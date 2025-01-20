import React, { FC, PropsWithChildren } from 'react';
import Menu from '../components/menu/Menu';

const LINKS = [
  { title: 'Home', href: '/' },
  { title: 'Explore', href: '/explore' },
  { title: 'Profile', href: '/my-profile' },
];

const UsersLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='w-full h-full grid grid-cols-12'>
      <div className='col-span-3'>
        <Menu links={LINKS} />
      </div>
      <main className='col-span-6'>{children}</main>
      <div className='col-span-3'>PIE DE PAGINA MAIN</div>
    </div>
  );
};

export default UsersLayout;
