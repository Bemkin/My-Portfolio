'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { lifePhotos, spotifyPlaylists } from '@/lib/constants';

interface LifeProps {
    active: boolean;
    onPhotoClick: (photo: any) => void;
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
} as any;

const audioContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5
        }
    }
};

const Life = ({ active, onPhotoClick }: LifeProps) => {
    return (
        <article className={`life ${active ? 'active' : ''}`} data-page="life">
            <header>
                <h2 className="h2 article-title">Life Beyond Code</h2>
                <p style={{ color: 'var(--light-gray-70)', marginBottom: '30px', fontSize: 'var(--fs-6)' }}>
                    When I'm not architecting systems, I'm curating soundscapes. A professional DJ journey blending precision with creative energy.
                </p>
            </header>

            <motion.section
                className="gallery"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '20px',
                    paddingBottom: '40px'
                }}>
                    {lifePhotos.map((photo) => (
                        <motion.div
                            key={photo.id}
                            className="gallery-item"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            onClick={() => onPhotoClick(photo)}
                            style={{
                                cursor: 'pointer',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid var(--jet)',
                                background: 'var(--eerie-black-2)',
                                transition: '0.3s'
                            }}
                        >
                            <figure style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10' }}>
                                <Image
                                    src={photo.image}
                                    alt={photo.title}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        transition: '0.5s transform'
                                    }}
                                    className="hover-zoom"
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '20px',
                                    opacity: 0,
                                    transition: '0.3s opacity'
                                }} className="gallery-overlay">
                                    <span style={{
                                        fontSize: 'var(--fs-8)',
                                        color: 'var(--orange-yellow-crayola)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>{photo.category}</span>
                                    <h3 className="h3 gallery-title" style={{ color: 'var(--white-2)', marginTop: '5px' }}>{photo.title}</h3>
                                </div>
                            </figure>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                className="audio-experience"
                variants={audioContainerVariants}
                initial="hidden"
                animate="show"
                style={{ marginTop: '20px' }}
            >
                <h3 className="h3" style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* @ts-ignore */}
                    <ion-icon name="musical-notes-outline" style={{ color: 'var(--orange-yellow-crayola)' }}></ion-icon>
                    Curated Soundscapes
                </h3>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '20px'
                }}>
                    {spotifyPlaylists.map((playlist: any) => (
                        <motion.div
                            key={playlist.id}
                            variants={itemVariants}
                            style={{
                                borderRadius: '12px',
                                overflow: 'hidden',
                                background: 'var(--eerie-black-2)',
                                border: '1px solid var(--jet)',
                                boxShadow: 'var(--shadow-2)'
                            }}
                        >
                            <iframe
                                style={{ borderRadius: '12px' }}
                                src={playlist.embedUrl}
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allowFullScreen={false}
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <style jsx>{`
                .gallery-item:hover .gallery-overlay {
                    opacity: 1 !important;
                }
                .gallery-item:hover .hover-zoom {
                    transform: scale(1.1);
                }
            `}</style>
        </article>
    );
};

export default Life;
