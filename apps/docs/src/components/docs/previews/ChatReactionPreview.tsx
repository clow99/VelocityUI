'use client'

import { useState } from 'react'
import { ChatReaction } from '@velocityuikit/velocityui'

export function ChatReactionPreview() {
  const [liked, setLiked] = useState(true)
  const [likeCount, setLikeCount] = useState(3)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Static</p>
        <div className="flex flex-wrap gap-1">
          <ChatReaction emoji="👍" count={3} active />
          <ChatReaction emoji="❤️" count={1} />
          <ChatReaction emoji="😂" count={2} />
          <ChatReaction emoji="🎉" count={5} active />
          <ChatReaction emoji="🔥" count={1} />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Interactive</p>
        <div className="flex gap-1">
          <ChatReaction
            emoji="👍"
            count={likeCount}
            active={liked}
            onClick={() => {
              setLiked((v) => !v)
              setLikeCount((c) => (liked ? c - 1 : c + 1))
            }}
          />
          <ChatReaction emoji="😮" count={0} />
        </div>
      </div>
    </div>
  )
}
