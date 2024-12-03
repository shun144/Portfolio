import { memo } from 'react'
import { IconType } from './icons';

type Props = {
  Icon: IconType
  className?: string
}

const Card = ({ Icon, className }: Props) => {
  return (
    <div className={`text-[150px] text-white absolute ${className}`}>
      <Icon />
    </div>

  )
}

export default memo(Card)