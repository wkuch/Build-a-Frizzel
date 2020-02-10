import React from 'react';
import { ReactComponent as Square } from '../../assets/images/Basic_square.svg'

export const FillingColor = (props) => (
  <Square style={{...props.style, fill: props.fill}} />
  )

