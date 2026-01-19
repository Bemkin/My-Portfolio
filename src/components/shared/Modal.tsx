'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-container active" data-modal-container>
                    <motion.div
                        className="overlay active"
                        data-overlay
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    ></motion.div>

                    <motion.section
                        className="testimonials-modal"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                    >
                        <button className="modal-close-btn" data-modal-close-btn onClick={onClose}>
                            {/* @ts-ignore */}
                            <ion-icon name="close"></ion-icon>
                        </button>
                        {children}
                    </motion.section>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
