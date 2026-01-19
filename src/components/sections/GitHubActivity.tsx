'use client';

import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

interface GitHubActivityProps {
    username: string;
}

const GitHubActivity = ({ username }: GitHubActivityProps) => {
    // Customizing the colors to match the portfolio theme
    const theme = {
        light: ['#2d2d2e', '#826d2e', '#c2912e', '#e0a800', '#ffdb70'],
        dark: ['#2d2d2e', '#826d2e', '#c2912e', '#e0a800', '#ffdb70'],
    };

    return (
        <section className="github-activity" style={{ marginTop: '40px' }}>
            <div className="title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div className="icon-box">
                    {/* @ts-ignore */}
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
                    className="has-scrollbar"
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        color: 'var(--light-gray)',
                        fontSize: 'var(--fs-7)',
                        overflowX: 'auto',
                        paddingBottom: '15px'
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

                <div style={{
                    marginTop: '25px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px'
                }}>
                    {/* Stats Cards using GitHub Readme Stats (External Images) */}
                    <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=1e1e1f&title_color=ffdb70&icon_color=ffdb70&text_color=d1d1d1&hide_border=true`}
                            alt={`${username}'s GitHub Stats`}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=1e1e1f&title_color=ffdb70&text_color=d1d1d1&hide_border=true`}
                            alt={`${username}'s Top Languages`}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubActivity;
