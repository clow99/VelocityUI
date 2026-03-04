'use client'

import { Avatar } from 'velocityui'

export function AvatarPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Sizes</p>
        <div className="flex flex-wrap items-center gap-3">
          <Avatar name="Alice Brown" size="xs" />
          <Avatar name="Alice Brown" size="sm" />
          <Avatar name="Alice Brown" size="md" />
          <Avatar name="Alice Brown" size="lg" />
          <Avatar name="Alice Brown" size="xl" />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">With status</p>
        <div className="flex flex-wrap items-center gap-3">
          <Avatar name="Sam Lee" status="online" />
          <Avatar name="Jordan Kim" status="away" />
          <Avatar name="Alex Ng" status="offline" />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Shapes</p>
        <div className="flex flex-wrap items-center gap-3">
          <Avatar name="Taylor Swift" shape="circle" size="lg" />
          <Avatar name="Taylor Swift" shape="square" size="lg" />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Image with fallback</p>
        <div className="flex flex-wrap items-center gap-3">
          <Avatar
            src="https://i.pravatar.cc/150?img=12"
            alt="User avatar"
            name="User"
            size="lg"
          />
          <Avatar
            src="https://broken-url.example/404.jpg"
            name="Fallback User"
            size="lg"
          />
        </div>
      </div>
    </div>
  )
}
