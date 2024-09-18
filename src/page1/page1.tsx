import "./page1.css";
import { Container } from "react-bootstrap";
import Title from '../components/Title';
import astroList from "../data/astroList";
import { Forms } from "../components/InputResearch";
import { useState } from "react";
import { CheckBox } from "../components/checkBox";
import RadioGroup from "../components/radioGr";
import AstroList from "../containers/AstroList";

const Page1 = () => {
    const categories = astroList.reduce<string[]>((catList, astro) =>
        catList.includes(astro.categories) ? catList : catList.concat(astro.categories),
        []
        )
        
    const [search, setSearch] = useState<string>("");
    const [checked, setChecked] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const handleResearch = (input: string) => {
        setSearch(input);
    };

    const handleChecked = (checked: boolean) => {
        setChecked(checked);
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <Container className="pt-5">
            <Title title="Galerie des petits astronautes" undertitle="Leurs plus beaux clichés" />
            <div className="py-3">
                <Forms onSearchSubmitted={handleResearch} />
                <CheckBox onChecked={handleChecked} />
                <RadioGroup 
                    categories={categories} 
                    selectedCategory={selectedCategory} 
                    onCategoryChange={handleCategoryChange} 
                />
            </div>
            <AstroList search={search} checked={checked} category={selectedCategory} itemsPerPage={6}/>
            
            <Retour />
        </Container>
    );
};

const Retour = () => (
    <div className="page1">
        <a href="/" className="text pt-3 text-decoration-none">
            👍 Retour à l'accueil 👍
        </a>
        <a href="/page2" className="text pt-3 text-decoration-none">
            👍 Go to page 2 👍
        </a>
    </div>
);



export default Page1;
