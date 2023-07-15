import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      Button Active theme = {theme}
      <br></br>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        change
      </button>
    </div>
  );
}

export default Button;
