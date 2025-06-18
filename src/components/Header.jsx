import { IoFastFoodOutline } from "react-icons/io5";
import { RiDrinks2Line } from "react-icons/ri";
import { IoPizzaOutline } from "react-icons/io5";
import { LuSalad } from "react-icons/lu";
import { GiCoolSpices } from "react-icons/gi";
import { IoIceCreamOutline } from "react-icons/io5";

const navItems = [
    {
        name: "All",
        icon: <IoFastFoodOutline />
    },
    {
        name: "Drinks",
        icon: <RiDrinks2Line />
    },
    {
        name: "Pizza",
        icon: <IoPizzaOutline />
    },
    {
        name: "Salad",
        icon: <LuSalad />
    },
    {
        name: "Spicy",
        icon: <GiCoolSpices />
    },
    {
        name: "Sweets",
        icon: <IoIceCreamOutline />
    }
]

function Header() {
    return (
        <>
            <div>
                <div>
                    <nav>
                        <ul>
                            {navItems.map(({name, icon}, index) => (
                                <li key={index}>
                                    {icon}
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div>
                    <a href="#">View All</a>
                </div>
            </div> 
        </>
    )
}

export default Header;