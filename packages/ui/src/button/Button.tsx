import * as React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 32,
    border: '1px solid #000',
    borderRadius: 16,
    outline: 0,
  },
})

const Button: React.FC = ({
  children,
}) => {
  const classes = useStyles()

  return (
    <button type='button' className={classes.button}>
      {children}
    </button>
  )
}

export default Button
