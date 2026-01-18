'use client';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className={`modal-container ${isOpen ? 'active' : ''}`} data-modal-container>
            <div className={`overlay ${isOpen ? 'active' : ''}`} data-overlay onClick={onClose}></div>
            <section className="testimonials-modal">
                <button className="modal-close-btn" data-modal-close-btn onClick={onClose}>
                    {/* @ts-ignore */}
                    <ion-icon name="close"></ion-icon>
                </button>
                {children}
            </section>
        </div>
    );
};

export default Modal;
