import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="modal-content"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                layoutId={`card-${product.id}`}
            >
                <button className="modal-close" onClick={onClose}>
                    <FaTimes />
                </button>

                <div className="modal-body">
                    <div className="modal-image-col">
                        <motion.img
                            src={product.image}
                            alt={product.name}
                            layoutId={`image-${product.id}`}
                        />
                    </div>
                    <div className="modal-text-col">
                        <span className="modal-category">{product.category}</span>
                        <h3>{product.name}</h3>
                        <p className="modal-desc">
                            {product.description}
                        </p>

                        <div className="modal-details">
                            <div className="detail-item">
                                <span className="label">Ingredients</span>
                                <span className="value">{product.ingredients}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">Allergens</span>
                                <span className="value">{product.allergens}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProductModal;
