import * as React from 'react'
import Header from './Header'
import Footer from './Footer'

const App: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default App
