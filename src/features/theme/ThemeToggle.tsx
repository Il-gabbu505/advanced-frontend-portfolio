import { useDispatch } from "react-redux";
import { toggleTheme } from "./themeSlice";

export default function ThemeToggle(){
    const dispatch = useDispatch();

    return(
        <button onClick={() => dispatch(toggleTheme())}>
            Toggle Theme
        </button>
    );
}