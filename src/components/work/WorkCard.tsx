import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/types';
import { categoriesOf, categoryLabel } from '@/lib/site';

export function projectYear(p: Project) {
    return p.date ? new Date(p.date).getFullYear().toString() : '';
}

export function shortTitle(title: string) {
    // "Brain3 - Autonomous AI Purchasing Agent" -> "Brain3"
    const head = title.split(/\s[–—-]\s/)[0].trim();
    const acronym = head.match(/\(([^)]+)\)/);
    return acronym ? acronym[1] : head;
}

export function projectHref(p: Project) {
    return p.problem ? `/projects/${p.slug}` : p.link || p.github || '/work';
}

export default function WorkCard({
    project,
    priority = false,
    reveal = true,
    wide = false,
}: {
    project: Project;
    priority?: boolean;
    reveal?: boolean;
    wide?: boolean;
}) {
    const href = projectHref(project);
    const external = !project.problem;
    const roles = categoriesOf(project.category).slice(0, 2).map(categoryLabel).join(' & ');

    return (
        <Link
            href={href}
            className={`work-card${wide ? ' is-wide' : ''}`}
            data-reveal={reveal ? '' : undefined}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
            <div className="work-card-media">
                <Image
                    src={project.image}
                    alt=""
                    width={1200}
                    height={750}
                    sizes={wide ? '(max-width: 760px) 80vw, 70vw' : '(max-width: 760px) 80vw, 40vw'}
                    priority={priority}
                />
            </div>
            {wide && <p className="eyebrow work-card-kicker">Lead case study</p>}
            <h3 className="work-card-title">{shortTitle(project.title)}</h3>
            {wide && project.excerpt && <p className="work-card-excerpt muted">{project.excerpt}</p>}
            <div className="work-card-meta">
                <span>{roles}</span>
                <span>{projectYear(project)}</span>
            </div>
        </Link>
    );
}
