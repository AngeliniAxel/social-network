import React, { FC, PropsWithChildren } from 'react';

const UsersLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div>ENCABEZADO MAIN</div>
      <main>{children}</main>
      <div>PIE DE PAGINA MAIN</div>
    </div>
  );
};

export default UsersLayout;
