import { MdOutlineWbSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";

export default function ThemeToggle() {
    return (
        <div className="flex items-center gap-2 rounded-lg btn btn-outline bg-base-200 px-3 py-2 shadow-sm h-12">
            <label className="swap swap-rotate cursor-pointer">
                <input
                    type="checkbox"
                    onChange={(e) =>
                        document.documentElement.setAttribute(
                            'data-theme',
                            e.target.checked ? 'dark' : 'light'
                        )
                    }
                />
                <span className="swap-off flex items-center gap-2 text-sm">
                    <MdOutlineWbSunny size={30} color="orange"/><span>Light</span>
                </span>
                <span className="swap-on flex items-center gap-2 text-sm">
                    <span>Dark</span> <GoMoon size={30}/>
                </span>
            </label>
        </div>
    )
}