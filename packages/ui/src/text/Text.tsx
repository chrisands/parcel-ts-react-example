import * as React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  text: {},
})

const Text: React.FC = ({
  children,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.text}>
      {children}
    </div>
  )
}

export default Text
