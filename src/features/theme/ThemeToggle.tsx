import { useAppDispatch } from "../../app/hooks";
import { toggleTheme } from "./themeSlice";

export default function ThemeToggle(){
    const dispatch = useAppDispatch();

    return(
        <button onClick={() => dispatch(toggleTheme())}>
            Toggle Theme
        </button>
    );
}