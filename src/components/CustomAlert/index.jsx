import { useEffect } from 'react';
import { FaExclamationCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import './style.css';

const CustomAlert = ({ message, type, onClose }) => {
    const getVariant = () => {
        switch (type) {
            case 'xəta':
                return 'danger';
            case 'xəbərdarlıq':
                return 'warning';
            case 'məlumat':
                return 'info';
            default:
                return type;
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const colors = {
        error: '#dc3545',
        warning: '#ffc107',
        info: '#0dcaf0'
    };

    const icons = {
        error: <FaExclamationCircle />,
        warning: <FaExclamationTriangle />,
        info: <FaInfoCircle />
    };

    return (
        <div className="custom-alert">
            <div className="alert-content" style={{ borderLeftColor: colors[getVariant()] }}>
                <span style={{ color: colors[getVariant()], fontSize: '20px' }}>
                    {icons[getVariant()]}
                </span>
                <p>{message}</p>
                <button className="close-btn" onClick={onClose}>&times;</button>
            </div>
        </div>
    );
};

export default CustomAlert; 