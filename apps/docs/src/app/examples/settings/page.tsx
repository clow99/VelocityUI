'use client'

import { Alert, Button, Card, Dialog, Divider, Input, RadioGroup, Select, Switch, Tabs, Title } from '@clow99/velocityui'
import { useState } from 'react'

function AccountTab({ onSave, loading }: { onSave: () => void; loading: boolean }) {
  const [language, setLanguage] = useState('en')

  return (
    <Card variant="bordered">
      <Card.Header>
        <h2 className="text-sm font-semibold text-vui-text">Profile Information</h2>
        <p className="mt-0.5 text-xs text-vui-text-muted">
          Update your name, email, and preferences.
        </p>
      </Card.Header>
      <Card.Body>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-vui-primary text-xl font-bold text-white">
              AJ
            </div>
            <div className="flex flex-col gap-1">
              <Button size="sm" variant="outline">
                Change avatar
              </Button>
              <p className="text-xs text-vui-text-muted">JPG, PNG or GIF. Max 2MB.</p>
            </div>
          </div>
          <Divider />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="First name" defaultValue="Alice" fullWidth />
            <Input label="Last name" defaultValue="Johnson" fullWidth />
          </div>
          <Input label="Email" type="email" defaultValue="alice@example.com" fullWidth />
          <Input label="Username" defaultValue="@alicejohnson" fullWidth hint="Used in your public profile URL" />
          <Select label="Timezone" fullWidth>
            <option>UTC−05:00 Eastern Time</option>
            <option>UTC−06:00 Central Time</option>
            <option>UTC−07:00 Mountain Time</option>
            <option>UTC−08:00 Pacific Time</option>
          </Select>
          <RadioGroup
            name="language"
            label="Language"
            orientation="horizontal"
            value={language}
            onChange={setLanguage}
            options={[
              { value: 'en', label: 'English' },
              { value: 'es', label: 'Español' },
              { value: 'fr', label: 'Français' },
              { value: 'de', label: 'Deutsch' },
            ]}
          />
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button onClick={onSave} loading={loading}>
            {loading ? 'Saving...' : 'Save changes'}
          </Button>
        </div>
      </Card.Footer>
    </Card>
  )
}

function NotificationsTab({ onSave, loading }: { onSave: () => void; loading: boolean }) {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
    weekly: false,
  })

  return (
    <Card variant="bordered">
      <Card.Header>
        <h2 className="text-sm font-semibold text-vui-text">Notification Preferences</h2>
        <p className="mt-0.5 text-xs text-vui-text-muted">
          Choose how and when you&apos;d like to be notified.
        </p>
      </Card.Header>
      <Card.Body>
        <div className="flex flex-col divide-y divide-vui-border">
          {[
            { key: 'email' as const, label: 'Email notifications', description: 'Receive updates and alerts via email' },
            { key: 'push' as const, label: 'Push notifications', description: 'Browser and mobile push alerts' },
            { key: 'marketing' as const, label: 'Marketing emails', description: 'Product news, tips, and promotions' },
            { key: 'weekly' as const, label: 'Weekly digest', description: 'A summary of activity every Monday' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm font-medium text-vui-text">{item.label}</p>
                <p className="text-xs text-vui-text-muted">{item.description}</p>
              </div>
              <Switch
                checked={notifications[item.key]}
                onChange={(e) =>
                  setNotifications((prev) => ({ ...prev, [item.key]: e.target.checked }))
                }
              />
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="flex justify-end">
          <Button onClick={onSave} loading={loading}>
            {loading ? 'Saving...' : 'Save preferences'}
          </Button>
        </div>
      </Card.Footer>
    </Card>
  )
}

const securityContent = (
  <div className="flex flex-col gap-4">
    <Card variant="bordered">
      <Card.Header>
        <h2 className="text-sm font-semibold text-vui-text">Change Password</h2>
      </Card.Header>
      <Card.Body>
        <div className="flex flex-col gap-4">
          <Input label="Current password" type="password" placeholder="••••••••" fullWidth />
          <Input label="New password" type="password" placeholder="••••••••" fullWidth hint="At least 8 characters" />
          <Input label="Confirm new password" type="password" placeholder="••••••••" fullWidth />
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="flex justify-end">
          <Button>Update password</Button>
        </div>
      </Card.Footer>
    </Card>
    <Card variant="bordered">
      <Card.Header>
        <h2 className="text-sm font-semibold text-vui-text">Two-Factor Authentication</h2>
        <p className="mt-0.5 text-xs text-vui-text-muted">
          Add an extra layer of security to your account.
        </p>
      </Card.Header>
      <Card.Body>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-vui-text">Authenticator app</p>
            <p className="text-xs text-vui-text-muted">Use an app like 1Password or Authy</p>
          </div>
          <Button variant="outline" size="sm">Enable</Button>
        </div>
      </Card.Body>
    </Card>
  </div>
)

function DangerTab() {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const handleDelete = () => {
    setDeleting(true)
    setTimeout(() => {
      setDeleting(false)
      setConfirmOpen(false)
    }, 1500)
  }

  return (
    <Card variant="bordered">
      <Card.Header>
        <h2 className="text-sm font-semibold text-red-600">Danger Zone</h2>
        <p className="mt-0.5 text-xs text-vui-text-muted">
          These actions are irreversible. Please proceed with caution.
        </p>
      </Card.Header>
      <Card.Body>
        <div className="flex flex-col gap-4">
          <Alert variant="warning">
            Deleting your account will permanently remove all your data, including projects,
            settings, and history.
          </Alert>
          <div className="flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3 dark:border-red-900 dark:bg-red-950">
            <div>
              <p className="text-sm font-medium text-vui-text">Delete account</p>
              <p className="text-xs text-vui-text-muted">Permanently delete your account and all data.</p>
            </div>
            <Button variant="danger" size="sm" onClick={() => setConfirmOpen(true)}>
              Delete account
            </Button>
          </div>
        </div>
      </Card.Body>

      <Dialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Delete account"
        description="This will permanently delete your account and remove all associated data. This action cannot be undone."
        size="sm"
      >
        <Dialog.Body>
          <Alert variant="danger">
            All your projects, settings, and history will be erased immediately.
          </Alert>
        </Dialog.Body>
        <Dialog.Footer>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" loading={deleting} onClick={handleDelete}>
              {deleting ? 'Deleting...' : 'Yes, delete my account'}
            </Button>
          </div>
        </Dialog.Footer>
      </Dialog>
    </Card>
  )
}

export default function SettingsExamplePage() {
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSave = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Title as="h1" size="xl">
          Settings Page
        </Title>
        <p className="mt-2 text-vui-text-muted">
          An account settings page built with Tabs, Card, Input, Switch, Select, RadioGroup, Dialog, and Alert.
        </p>
      </div>

      {saved && <Alert variant="success">Settings saved successfully.</Alert>}

      <Tabs
        defaultValue="account"
        items={[
          { value: 'account', label: 'Account', children: <AccountTab onSave={handleSave} loading={loading} /> },
          { value: 'notifications', label: 'Notifications', children: <NotificationsTab onSave={handleSave} loading={loading} /> },
          { value: 'security', label: 'Security', children: securityContent },
          { value: 'danger', label: 'Danger Zone', children: <DangerTab /> },
        ]}
      />
    </div>
  )
}

