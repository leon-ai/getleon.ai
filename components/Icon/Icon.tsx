import React, { SVGProps } from 'react'

interface IIconProps extends SVGProps<any> {
  name: string
}

const Icon: React.FC<IIconProps> = (props) => {
  return <i data-feather={props.name} {...props} className="icon" />
}

export default Icon
