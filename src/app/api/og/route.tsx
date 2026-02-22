import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        // ?title=<title>&type=<type>&category=<category>
        const title = searchParams.get('title') || 'Bemnet Kibret | Portfolio';
        const type = searchParams.get('type') || 'Developer';
        const category = searchParams.get('category') || '';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        backgroundColor: '#121212',
                        backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                        padding: '80px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            borderLeft: '4px solid #FF9A47',
                            paddingLeft: '40px',
                        }}
                    >
                        <p
                            style={{
                                fontSize: '24px',
                                color: '#FF9A47',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                margin: 0,
                            }}
                        >
                            {type} {category ? `// ${category}` : ''}
                        </p>
                        <h1
                            style={{
                                fontSize: '72px',
                                color: 'white',
                                fontWeight: 'bold',
                                margin: 0,
                                lineHeight: 1.1,
                                maxWidth: '900px',
                                wordBreak: 'break-word',
                            }}
                        >
                            {title}
                        </h1>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '80px',
                            left: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                        }}
                    >
                        <div
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'linear-gradient(to bottom right, #FFDB70, #FF9A47)',
                            }}
                        />
                        <p
                            style={{
                                fontSize: '28px',
                                color: '#D6D6D6',
                                fontWeight: '600',
                                margin: 0,
                            }}
                        >
                            bemnet.dev
                        </p>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.error(e.message);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
