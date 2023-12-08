import Image from 'next/image'
import styles from './page.module.css'
import CamelCardView from '@/components/camelCardView/camelCardView';

export default function Home() {
  return (
    <main className={styles.main}>
      main
      <CamelCardView />
    </main>
  )
}
