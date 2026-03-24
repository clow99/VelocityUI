'use client'

import { ChatAttachment } from '@velocityuikit/velocityui'

export function ChatAttachmentPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">File</p>
        <ChatAttachment variant="file" fileName="quarterly-report.pdf" fileSize="2.4 MB" onDownload={() => {}} />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Image</p>
        <ChatAttachment variant="image" src="https://placehold.co/300x200/6366f1/ffffff?text=Preview" fileName="screenshot.png" />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Video</p>
        <ChatAttachment variant="video" fileName="demo-recording.mp4" fileSize="18.7 MB" onDownload={() => {}} />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Audio</p>
        <ChatAttachment variant="audio" fileName="voice-note.m4a" fileSize="1.2 MB" onDownload={() => {}} />
      </div>
    </div>
  )
}
