import React from 'react';

import { Button } from '@/components/ui/button';

import styles from './index.module.scss';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Next.js TypeScript</h1>
      <div className={styles.content}>
        <Button>ログイン</Button>
      </div>
    </header>
  );
};

export default Header;
