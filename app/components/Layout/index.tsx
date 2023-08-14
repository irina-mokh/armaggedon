import { Header } from '../Header'
import { Footer } from '../Footer'
import styles from './styles.module.scss'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
