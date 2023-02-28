import { BrowserRouter, Routes, Route, useNavigate, Navigation } from "react-router-dom";
import { FavoritesPage, HomeSocialPage, Layout, LoginPage, MyRecipesPage, ProfilePage, RecipeDetailPage, RecipesPage, RegisterPage, ShoppingListPage, StartPage, StatisticPage, RecipeFormPage } from "./pages";
import { GlobalStyles } from "./Global.style";
import { NoMatch } from "./pages/NoMatch";
import { FormEventHandler, useState } from "react";
import { authService } from "./auth/services/auth.service";
import { NavTop } from "./components";



function App() {
// hook de navegacion
  const navigate = useNavigate()
// estado para almacenar el token
  const [loggedInUser, setLoggedInUser]=useState<any>(null);
// metodo para manejar el evento handleonsubmit del login
  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    
    try{
      const result = await authService.login({
        email:'mi@mail.com', 
        password: '1234'
      })
      console.log(result.data.access_token);

      const {access_token} = result.data;
// almacenamos token en localstorage
      localStorage.setItem('token', access_token)
      //mirar auth.service.ts del backend para ver el nombre exacto del access_token
// refrescamos estado
      setLoggedInUser(localStorage.getItem('token'))
// si el login es ok navegamos a la ruta protegida
      navigate('/profile', {replace:true})

    } catch (error) {
      console.log(error)
    }}
  return (
    <>
      
      <GlobalStyles />
      <Routes>
          <Route path="/" element={<StartPage />} />
          <Route element={<Layout loggedInUser={loggedInUser} />}>
          <Route path="/home-social" element={<HomeSocialPage />} />
          <Route path="/login" element={<LoginPage handleSubmit ={handleSubmit}/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/statistic" element={<StatisticPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/my-recipes" element={<MyRecipesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
          <Route path="/recipe-form" element={<RecipeFormPage />} />
          <Route path="/recipe-detail/:id" element={<RecipeDetailPage />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
      
   </>
  );
  }

export default App;