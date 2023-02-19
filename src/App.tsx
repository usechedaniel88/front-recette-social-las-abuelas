import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesPage, HomeSocialPage, Layout, LoginPage, MyRecipesPage, ProfilePage, RecipeDetailPage, RecipesPage, RegisterPage, ShoppingListPage, StartPage, StatisticPage, RecipeFormPage } from "./pages/";
import { GlobalStyles } from "./Global.style";



function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
    <Routes>
        <Route path="/" element={<StartPage />} />
        <Route element={<Layout/>}>
        <Route path="/home-social" element={<HomeSocialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/statistic" element={<StatisticPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-recipes" element={<MyRecipesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="/recipe-form" element={<RecipeFormPage />} />
        <Route path="/recipe-detail" element={<RecipeDetailPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;