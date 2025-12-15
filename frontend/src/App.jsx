import { Route, Routes, Navigate } from "react-router-dom"
import { HomePage } from "./components/pages/homePage"
import { LetterPage } from "./components/pages/letterPage"
// Eliminamos imports viejos innecesarios
// import { LetterPageCookie } from "./components/pages/letterPageCookie"
// import { LetterPageCake } from "./components/pages/letterPageCake"
import { AbouUsPage } from "./components/pages/aboutUsPage"
import { BookingPage } from "./components/pages/bookingPage"
import { ContactPage } from "./components/pages/contactPage"
import { Navbar } from "./components/organisms/navbar"
import { useState } from "react"
import { ModalLogin } from "./components/organisms/modals/modalLogin"
import { CartShop } from "./components/organisms/modals/modalCartShop"
import { ModalRegister } from "./components/organisms/modals/modalRegister"

// Tendencies sections
import { TendenciesCoffee } from "./components/organisms/home/tendenciesCoffee"
import { TendenciesCokies } from "./components/organisms/home/tendenciesCokies"
import { TendenciesCakes } from "./components/organisms/home/tendenciesCakes"
import { Footer } from "./components/organisms/footer"
import { WhatsAppButton } from "./components/atoms/WhatsAppButton"

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [cartShopOpen, setCartShopOpen] = useState(false)
  const [registerIsOpen, setRegisterIsOpen] = useState(false)

  const pages = [
    {
      path: '/',
      element: <HomePage/>,
      children: [
        { index: true, element: <TendenciesCoffee /> }, 
        { path: 'coffee', element: <TendenciesCoffee /> },
        { path: 'cookies', element: <TendenciesCokies /> },
        { path: 'cakes', element: <TendenciesCakes /> },
      ]
    },
    {
      path: '/letter',
      element: <LetterPage/> // Única página para toda la carta
    },
    // Redirecciones para compatibilidad
    {
      path: '/LetterPageCookie',
      element: <Navigate to="/letter" replace />
    },
    {
      path: '/LetterPageCake',
      element: <Navigate to="/letter" replace />
    },
    {
      path: '/aboutus',
      element: <AbouUsPage/>
    },
    {
      path: '/bookings',
      element: <BookingPage/>
    },
    {
      path: '/contact',
      element: <ContactPage/>
    },
  ]

  return (
    <>
      <Navbar 
        setModalIsOpen={setModalIsOpen}
        setRegisterIsOpen={setRegisterIsOpen}
        setCartShopOpen={setCartShopOpen} />
      
      {/* Modales (Sin cambios, respetando código de compañeros) */}
      {modalIsOpen && <ModalLogin setModalIsOpen={setModalIsOpen} setRegisterIsOpen={setRegisterIsOpen} />}
      {cartShopOpen && <CartShop setCartShopOpen={setCartShopOpen} />}
      {registerIsOpen && <ModalRegister setRegisterIsOpen={setRegisterIsOpen} />}

      <Routes>
        {pages.map((page, i) => (
          <Route
            key={i}
            path={page.path}
            element={page.element}
          >
            {page.children?.map((child, j) => (
              <Route
                key={j}
                path={child.path}
                index={child.index} 
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
      
      <Footer/>
      <WhatsAppButton />
    </>
  )
}

export default App