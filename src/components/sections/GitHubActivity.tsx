'use client';

import { GitHubCalendar } from 'react-github-calendar';
import { useEffect, useRef } from 'react';

interface GitHubActivityProps {
    username: string;
}

const GitHubActivity = ({ username }: GitHubActivityProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Customizing the colors to match the portfolio theme
    const theme = {
        light: ['#2d2d2e', '#826d2e', '#c2912e', '#e0a800', '#ffdb70'],
        dark: ['#2d2d2e', '#826d2e', '#c2912e', '#e0a800', '#ffdb70'],
    };

    // Auto-scroll to the right (most recent activity) when component loads
    useEffect(() => {
        if (scrollContainerRef.current) {
            // Small delay to ensure the calendar has rendered
            setTimeout(() => {
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
                }
            }, 100);
        }
    }, []);

    return (
        <section className="github-activity" style={{ marginTop: '40px' }}>
            <div className="title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div className="icon-box">
                    {/* @ts-expect-error: ion-icon custom element */}
                    <ion-icon name="logo-github"></ion-icon>
                </div>
                <h3 className="h3">GitHub Activity</h3>
            </div>

            <div className="content-card" style={{
                padding: '25px',
                overflow: 'hidden',
                cursor: 'default'
            }}>
                <div
                    ref={scrollContainerRef}
                    className="has-scrollbar"
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        color: 'var(--light-gray)',
                        fontSize: 'var(--fs-7)',
                        overflowX: 'auto',
                        paddingBottom: '5px'
                    }}
                >
                    <div style={{ minWidth: 'max-content', margin: '0 auto' }}>
                        <GitHubCalendar
                            username={username}
                            blockSize={12}
                            blockMargin={4}
                            fontSize={14}
                            theme={theme}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubActivity;
