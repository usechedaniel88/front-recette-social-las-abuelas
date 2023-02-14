import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SocialPage from "./pages/SocialPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StatisticPage from "./pages/StatisticPage";
import RecipesPage from "./pages/RecipesPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritesPage from "./pages/FavoritesPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import MyRecipesPage from "./pages/MyRecipesPage";
import RecipeFormPage from "./pages/RecipeFormPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";


function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/social" element={<SocialPage />} />
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
    </Routes>
  );
}

export default App;