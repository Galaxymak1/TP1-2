import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';

export function CheckBox({ onChecked }: { onChecked: (checked: boolean) => void }) {
    const [checked, setChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = e.currentTarget.checked;
        setChecked(newChecked);
        onChecked(newChecked);
    };

    return (
        <ToggleButton
            id="toggle-check"
            type="checkbox"
            variant="outline-dark"
            checked={checked}
            value="1"
            onChange={handleChange}
            className='mb-3'
        >
            Afficher les plus likés
        </ToggleButton>
    );
}
