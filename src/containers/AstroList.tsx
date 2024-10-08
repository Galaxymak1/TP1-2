import { Card, Col, Container, Row, Pagination, Modal, Button } from "react-bootstrap";
import astroList from "../data/astroList";
import {  useEffect, useState } from "react";
import ImageFilterer from "../components/ImageFilterer";
import LazyImage from "../components/LazyImage";  

const AstroList = ({ search, checked, category, itemsPerPage }: { search: string; checked: boolean; category: string; itemsPerPage: number }) => {
    const [sortedNames, setSortedNames] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);  
    const [selectedItem, setSelectedItem] = useState<{ nom: string; description: string } | null>(null); 

    const filteredList = astroList.filter(item =>
        item.nom.toLowerCase().includes(search.toLowerCase()) &&
        (checked ? item.pluslikes : true) &&
        (category ? item.categories === category : true)
    );

    const sortedFilteredList = sortedNames.length > 0
        ? filteredList.sort((a, b) => sortedNames.indexOf(a.nom) - sortedNames.indexOf(b.nom))
        : filteredList;


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedFilteredList.slice(indexOfFirstItem, indexOfLastItem);

    const handleImageClick = (item: { nom: string; description: string }) => {
        setSelectedItem(item);  
        setShowModal(true);    
    };

    const handleCloseModal = () => setShowModal(false);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleLastPageChange = () => {
        setCurrentPage(totalPages);
    };

    const handleFirstPageChange = () => {
        setCurrentPage(1);
    };

    const totalPages = Math.ceil(sortedFilteredList.length / itemsPerPage);
    const paginationItems = [];
    paginationItems.push(<Pagination.First onClick={handleFirstPageChange} />);

    for (let number = 1; number <= totalPages; number++) {
        paginationItems.push(
            <Pagination.Item 
                key={number} 
                active={number === currentPage} 
                onClick={() => handlePageChange(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    paginationItems.push(<Pagination.Last onClick={handleLastPageChange} active={false} />);

    useEffect(() => {
        setCurrentPage(1);
    }, [search, checked, category, sortedNames]);

    return (
        <Container>
            <ImageFilterer 
                names={filteredList.map(item => item.nom)} 
                onImageFiltered={(sortedNames) => setSortedNames(sortedNames)} 
            />
            <h3 className="text-info pb-3">Les photos de nos astronautes</h3>
            <Row className="d-flex justify-content-center">
                {currentItems.length > 0 ? (
                    currentItems.map(item => (
                        <Col key={item.id} lg={4} md={6} xs={12} className="mb-4 d-flex justify-content-center">
                            <Card className="border-4 border-black p-3 pb-0" style={{ maxWidth: '200px' }}>
                                <div 
                                    style={{ cursor: 'pointer' }}  
                                    onClick={() => handleImageClick(item)}
                                >
                                    <LazyImage src={item.visuel} alt={item.nom} />
                                </div>
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
            
            <Row className="justify-content-center mt-3">
                <Pagination className="justify-content-center">{paginationItems}</Pagination>
            </Row>


            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedItem?.nom}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedItem?.description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AstroList;
