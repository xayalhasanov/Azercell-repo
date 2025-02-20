import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { MdOutlineRefresh } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './style.css';

const SearchForm = ({
    prefix,
    digits,
    inputRefs,
    handlePrefixChange,
    handleDigitChange,
    handleSearch,
    clearFilters,
    isSearchPage,
    setSearchResults,
    setNumbers,
    setDigits,
    setPrefix
}) => {
    const navigate = useNavigate();

    const handleKeyDown = (index, e) => {
        if (e.key === 'Enter') {
            if (index < 6) {
                inputRefs.current[index + 1].focus();
            } else {
                handleSearch();
            }
        }

        if (e.key === 'Backspace') {
            e.preventDefault();
            const newDigits = [...digits];

            if (digits[index] === '') {
                if (index > 0) {
                    inputRefs.current[index - 1].focus();
                }
            } else {
                newDigits[index] = '';
                handleDigitChange(index, '');

                if (index > 0) {
                    inputRefs.current[index - 1].focus();
                }
            }
        }
    };

    const handleClearFilters = async () => {
        clearFilters();
        setDigits(Array(7).fill(''));
        setPrefix('');

        navigate('/');
    };

    return (
        <div className={isSearchPage ? 'search-page-form' : 'search-section-horizontal'}>
            {isSearchPage ? (
                <>
                </>
            ) : (
                <div className="search-container">
                    <div className="search-content">
                        <div className="search-inputs">
                            <Form.Select
                                value={prefix}
                                onChange={handlePrefixChange}
                                className="prefix-select"
                                style={{ backgroundColor: '#bbbbbb' }}
                            >
                                <option value="">Hamısı</option>
                                <option value="50">050</option>
                                <option value="51">051</option>
                                <option value="10">010</option>
                            </Form.Select>

                            <div className="number-inputs">
                                {digits.map((digit, index) => (
                                    <Form.Control
                                        key={index}
                                        placeholder='X'
                                        type="text"
                                        value={digit}
                                        onChange={(e) => handleDigitChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        className="number-input"
                                        maxLength={1}
                                        style={{ backgroundColor: '#bbbbbb' }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="search-buttons">
                            <Button variant="primary" onClick={handleSearch}>
                                <FaMagnifyingGlass className="me-1" />
                                Axtar
                            </Button>
                            <Button variant="secondary" onClick={handleClearFilters}>
                                <MdOutlineRefresh className="me-1" />
                                Sıfırla
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchForm; 