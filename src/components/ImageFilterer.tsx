import { Container, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from "react";

interface ImageFiltererProps {
    names: string[];
    onImageFiltered: (sortedNames: string[]) => void;
}

const ImageFilterer: React.FC<ImageFiltererProps> = ({ names, onImageFiltered }) => {
    const [radioValue, setRadioValue] = useState('3');

    const handleSortAscending = () => {
        const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
        onImageFiltered(sortedNames);
    };

    const handleSortDescending = () => {
        const sortedNames = [...names].sort((a, b) => b.localeCompare(a));
        onImageFiltered(sortedNames);
    };

    const handleResetSort = () => {
        onImageFiltered([]); 
    };

    const radios = [
        { name: 'Sort Ascending', value: '1', function: handleSortAscending },
        { name: 'Sort Descending', value: '2', function: handleSortDescending },
        { name: 'No Sorting', value: '3', function: handleResetSort },
    ];

    return (
        <Container className="text-center my-3">
            <ButtonGroup >
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={radioValue === radio.value ? 'dark' : 'outline-dark'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                        onClick={radio.function}
                        className="mx-1"
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </Container>
    );
};

export default ImageFilterer;
