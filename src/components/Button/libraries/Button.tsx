import classNames from 'classnames'
import { IButtonProps } from './button.types'

const ButtonComponent = ({ children, color, opacity = 100 }: IButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        'inline-flex items-center px-4 py-2 rounded-md shadow-sm text-base font-medium ',
        {
          'bg-primary-700 hover:bg-primary-900 text-white': color === 'primary',
          'bg-green-600 hover:bg-green-700 text-white ': color === 'success',
          'bg-red-600 hover:bg-red-700 text-white': color === 'danger',
          'bg-white hover:bg-gray-200 text-black': color === 'outline',
          'bg-gray-600 hover:bg-gray-700 text-white': color === 'medium',
        }
      )}
      style={{
        opacity: `${opacity}%`,
      }}
    >
      {children}
    </button>
  )
}

export default ButtonComponent
