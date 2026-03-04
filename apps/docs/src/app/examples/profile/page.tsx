'use client'

import { Badge, Button, Card, Divider, Tabs, Title, Tooltip } from 'velocityui'

const recentActivity = [
  { type: 'commit', text: 'Pushed 3 commits to velocityui/core', time: '2h ago' },
  { type: 'pr', text: 'Opened PR #142: Add Tooltip component', time: '5h ago' },
  { type: 'comment', text: 'Commented on issue #138', time: '1d ago' },
  { type: 'star', text: 'Starred react/react', time: '2d ago' },
]

const projects = [
  { name: 'velocityui', description: 'A fast, accessible React component library.', lang: 'TypeScript', stars: 248 },
  { name: 'personal-site', description: 'My personal portfolio and blog.', lang: 'TypeScript', stars: 12 },
  { name: 'obsidian-plugin', description: 'A productivity plugin for Obsidian.', lang: 'JavaScript', stars: 67 },
]

const langColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-500',
}

export default function ProfileExamplePage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Title as="h1" size="xl">
          Profile Page
        </Title>
        <p className="mt-2 text-vui-text-muted">
          A user profile page built with Card, Badge, Button, Tabs, Tooltip, and Divider.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Card variant="shadow">
            <Card.Body>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-vui-primary text-2xl font-bold text-white">
                  AJ
                </div>
                <h2 className="mt-3 text-base font-bold text-vui-text">Alice Johnson</h2>
                <p className="text-sm text-vui-text-muted">@alicejohnson</p>
                <p className="mt-2 text-sm text-vui-text-muted">
                  Frontend engineer building fast, accessible UIs. Open source contributor.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-1">
                  <Badge variant="primary" size="sm">React</Badge>
                  <Badge variant="default" size="sm">TypeScript</Badge>
                  <Badge variant="default" size="sm">CSS</Badge>
                </div>
                <div className="mt-4 w-full">
                  <Button fullWidth variant="outline" size="sm">Edit profile</Button>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card variant="bordered" size="sm">
            <Card.Body>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-vui-text-subtle">Info</h3>
              <div className="flex flex-col gap-2 text-sm text-vui-text-muted">
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  alice@example.com
                </div>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Joined March 2021
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card variant="bordered" size="sm">
            <Card.Body>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-vui-text-subtle">Stats</h3>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { label: 'Repos', value: '32', tip: 'Public repositories' },
                  { label: 'Stars', value: '327', tip: 'Stars received across all repos' },
                  { label: 'Followers', value: '148', tip: 'People following this profile' },
                ].map((s) => (
                  <Tooltip key={s.label} content={s.tip} placement="bottom">
                    <div className="cursor-default">
                      <p className="text-base font-bold text-vui-text">{s.value}</p>
                      <p className="text-xs text-vui-text-muted">{s.label}</p>
                    </div>
                  </Tooltip>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-2">
          <Tabs
            defaultValue="repos"
            items={[
              {
                value: 'repos',
                label: 'Repositories',
                children: (
                  <Card variant="bordered">
                    <Card.Body>
                      <div className="flex flex-col gap-3">
                        {projects.map((project, i) => (
                          <div key={project.name}>
                            {i > 0 && <Divider className="mb-3" />}
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <a href="#" className="text-sm font-semibold text-vui-primary hover:underline">
                                    {project.name}
                                  </a>
                                  <Badge variant="default" size="sm">Public</Badge>
                                </div>
                                <p className="mt-1 text-xs text-vui-text-muted">{project.description}</p>
                                <div className="mt-2 flex items-center gap-3 text-xs text-vui-text-muted">
                                  <span className="flex items-center gap-1">
                                    <span className={`h-2.5 w-2.5 rounded-full ${langColors[project.lang] ?? 'bg-gray-400'}`} />
                                    {project.lang}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    {project.stars}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                ),
              },
              {
                value: 'activity',
                label: 'Activity',
                children: (
                  <Card variant="bordered">
                    <Card.Body>
                      <div className="flex flex-col gap-3">
                        {recentActivity.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-vui-surface-muted text-vui-text-muted">
                              {item.type === 'commit' && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="4" />
                                  <line x1="1.05" y1="12" x2="7" y2="12" />
                                  <line x1="17.01" y1="12" x2="22.96" y2="12" />
                                </svg>
                              )}
                              {item.type === 'pr' && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="18" cy="18" r="3" />
                                  <circle cx="6" cy="6" r="3" />
                                  <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                                  <line x1="6" y1="9" x2="6" y2="21" />
                                </svg>
                              )}
                              {item.type === 'comment' && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                              )}
                              {item.type === 'star' && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-vui-text">{item.text}</p>
                              <p className="text-xs text-vui-text-muted">{item.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
