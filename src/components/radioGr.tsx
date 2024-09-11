import React from 'react';
import { Button, Form } from 'react-bootstrap';

interface RadioGroupProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ categories, selectedCategory, onCategoryChange }) => {
    function handleClick() {
        onCategoryChange("");
    }

    return (
        <div className="py-3">
            <Form>
                <Form.Group>
                    <Form.Label className="fw-bold text-secondary">Choisissez une catégorie</Form.Label>
                    <div className="d-inline-flex ms-3">
                        {categories.map((category, index) => (
                            <Form.Check
                                key={index}
                                type="radio"
                                id={`category-${index}`}
                                label={category}
                                value={category}
                                checked={selectedCategory === category}
                                onChange={(e) => onCategoryChange(e.currentTarget.value)}
                                className="mb-2 mx-2"
                            />
                        ))}
                    </div>
                    <Button variant='outline-dark' className='ms-2' onClick={handleClick}>
                        Reset
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default RadioGroup;
