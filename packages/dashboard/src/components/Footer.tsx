import * as React from 'react'
import { createUseStyles } from 'react-jss'
import { Button } from '@sn/ui/src/button'
import { Text } from '@sn/ui/src/text'

const useStyles = createUseStyles({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTop: '1px solid #000',
  },
  order: {
    display: 'flex',
    margin: '16px 24px 12px',
  },
  phone: {},
  bottom: {
    display: 'flex',
    margin: '0 24px 16px',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  button: {
    width: 56,
  },
  title: {
    marginBottom: 8,
  },
})

const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <div className={classes.order}>
        <Text>
          example:
        </Text>
      </div>
      <div className={classes.bottom}>
        <div className={classes.phone}>
          <div className={classes.title}>
            <Text>
              example
            </Text>
          </div>
        </div>
        <div className={classes.button}>
          <Button>
            Go
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Footer
