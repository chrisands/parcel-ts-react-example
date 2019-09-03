import * as React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    flexDirection: 'column',
  },
})

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      header
    </div>
  )
}

export default Header
