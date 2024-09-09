import "./page1.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Title from '../components/Title';
import astroList from "../data/astroList";
import { Forms } from "../components/InputResearch";
import { useState } from "react";
import { CheckBox } from "../components/checkBox";
import RadioGroup from "../components/radioGr";

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
        <Container>
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
            <AstroList search={search} checked={checked} category={selectedCategory}/>
            
            <Retour />
        </Container>
    );
};

const Retour = () => (
    <div className="page1">
        <a href="/" className="text pt-3 text-decoration-none">
            👍 Retour à l'accueil 👍
        </a>
    </div>
);

const AstroList = ({ search, checked, category }: { search: string; checked: boolean; category: string }) => {
    const filteredList = astroList.filter(item =>
        item.nom.toLowerCase().includes(search.toLowerCase()) &&
        (checked ? item.pluslikes : true) &&
        (category ? item.categories === category : true) 
    );

    const handleClick = (nom: string) => {
        alert(`Vous avez cliqué sur ${nom}`);
    };

    return (
        <Container>
            <h3 className="text-info pb-3">Les photos de nos astronautes</h3>
            <Row className="d-flex justify-content-center">
                {filteredList.length > 0 ? (
                    filteredList.map(item => (
                        <Col key={item.id} lg={4} md={6} xs={12} className="mb-4 d-flex justify-content-center">
                            <Card className="border-4 border-black p-3 pb-0" style={{ maxWidth: '200px' }}>
                                <Card.Img variant="top" src={item.visuel} onClick={() => handleClick(item.nom)} />
                                <Card.Body>
                                    <Card.Title>{item.nom}</Card.Title>
                                    <Card.Text>{item.categories}</Card.Text>
                                    <Card.Text className="fs-4">
                                        {item.pluslikes ? "❤️" : "💤"}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col className="text-center">
                        <p>No results found</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default Page1;
