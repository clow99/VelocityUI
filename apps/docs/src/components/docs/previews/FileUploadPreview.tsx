'use client'

import { FileUpload } from '@clow99/velocityui'

export function FileUploadPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Basic</p>
        <FileUpload
          label="Attachment"
          hint="PNG, JPG, PDF up to 10 MB"
          onChange={(files) => console.log(files)}
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Multiple files</p>
        <FileUpload
          multiple
          accept="image/*"
          maxSize={5 * 1024 * 1024}
          label="Gallery images"
          hint="PNG or JPG, up to 5 MB each"
          onChange={(files) => console.log(files)}
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Disabled</p>
        <FileUpload
          disabled
          label="Upload (disabled)"
          hint="Not available right now"
        />
      </div>
    </div>
  )
}

