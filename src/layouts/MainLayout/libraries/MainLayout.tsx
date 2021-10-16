import NavbarComponent from '@components/Navbar'
import { IMainProps } from './main.types'

const MainLayout = ({ children }: IMainProps) => {
  return (
    <>
      <NavbarComponent />
      <div className="max-w-full my-2 mx-auto px-2 sm:px-6 lg:px-16">
        {children}
      </div>
    </>
  )
}

export default MainLayout
