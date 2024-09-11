import { Form } from "react-bootstrap";

export function Forms({ onSearchSubmitted }: { onSearchSubmitted: (input: string) => void }) {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchSubmitted(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
    };

    return (
        <div>
            <Form className="d-inline-flex align-items-center justify-content-center py-3" onSubmit={handleSubmit}>
                <p className="m-0 ">
                    Rechercher par nom :
                </p>
                <Form.Control
                    type="text"
                    placeholder="Nom"
                    onChange={handleInputChange}
                    className="mx-3"
                />
                {/* <Button className="customButton" type="submit">
                    Tester
                </Button> */}
            </Form>
        </div>
    );
}
