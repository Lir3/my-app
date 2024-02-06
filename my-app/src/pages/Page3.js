import { Accordion } from "@material-tailwind/react";
import CssModules from "../components/CssModules";
import TailwindCss from "../components/TailwindCss";
import Rensyu1Badge from '../components/Rensyu1Badge';
import Rensyu2Card from '../components/Rensyu2Card';

const Page3 = () => {
    return (
        <>
            <p>Page3</p>
            <CssModules></CssModules>
            <TailwindCss></TailwindCss>
            <Rensyu1Badge count={100}></Rensyu1Badge>
            
        </>
    );
};
export default Page3;
