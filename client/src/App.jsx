

import {NavBar,Footer,Services,Transactions,Welcome} from "./components/index"

const App=() => {
  

  return (
   <div className="min-h-screen">
          <div className="gradient-bg-welcome">
            <NavBar/>
            <Welcome/>
          </div>
          <Services/>
          <Transactions/>
          <Footer/>
   </div>
  )
}

export default App
