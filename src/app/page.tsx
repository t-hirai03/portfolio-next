import { Browser } from '@/components/Chart/browser';
import { View } from '@/components/Chart/view';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.cards}>
        <View />
        <Browser />
      </div>
    </div>
  );
}
