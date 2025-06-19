import { IoFastFoodOutline } from "react-icons/io5";
import { RiDrinks2Line } from "react-icons/ri";
import { IoPizzaOutline } from "react-icons/io5";
import { LuSalad } from "react-icons/lu";
import { GiCoolSpices } from "react-icons/gi";
import { IoIceCreamOutline } from "react-icons/io5";

const navItems = [
    {
        name: "All",
        icon: <IoFastFoodOutline />,
        active: true
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
        <div className="header">
            <div className="nav-container">
                <nav>
                    <ul className="nav-items">
                        {navItems.map(({name, icon, active}, index) => (
                            <li key={index}>
                                {
                                active ? 
                                    <a href="#" className="active">
                                        {icon}
                                        {name}
                                    </a>
                                    :
                                    <a href="#">
                                        {icon}
                                        {name}
                                    </a>
                                }
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="nav-link">
                <a href="#">View All</a>
            </div>
        </div>
    )
}

export default Header;