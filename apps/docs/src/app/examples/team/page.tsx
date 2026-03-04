'use client'

import { Alert, Avatar, Badge, Button, Card, Dialog, Divider, Input, Select, Tabs, Title } from 'velocityui'
import { useState } from 'react'

type Role = 'Owner' | 'Admin' | 'Editor' | 'Viewer'

interface Member {
  id: number
  name: string
  email: string
  role: Role
  status: 'online' | 'away' | 'offline'
  joined: string
}

const initialMembers: Member[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Owner', status: 'online', joined: 'Jan 2025' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Admin', status: 'online', joined: 'Feb 2025' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Editor', status: 'away', joined: 'Mar 2025' },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'Editor', status: 'offline', joined: 'Jun 2025' },
  { id: 5, name: 'Eva Martinez', email: 'eva@example.com', role: 'Viewer', status: 'online', joined: 'Sep 2025' },
]

const activity = [
  { name: 'Alice Johnson', action: 'updated billing settings', time: '5 min ago' },
  { name: 'Bob Smith', action: 'invited 2 new members', time: '1 hr ago' },
  { name: 'Carol White', action: 'published a new page', time: '3 hrs ago' },
  { name: 'David Brown', action: 'commented on Issue #48', time: 'Yesterday' },
  { name: 'Eva Martinez', action: 'joined the team', time: '2 days ago' },
]

const roleBadgeVariant: Record<Role, 'primary' | 'info' | 'default' | 'warning'> = {
  Owner: 'primary',
  Admin: 'info',
  Editor: 'default',
  Viewer: 'warning',
}

const statusColor: Record<Member['status'], string> = {
  online: 'text-green-500',
  away: 'text-yellow-500',
  offline: 'text-vui-text-subtle',
}

export default function TeamExamplePage() {
  const [members, setMembers] = useState<Member[]>(initialMembers)
  const [inviteOpen, setInviteOpen] = useState(false)
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviteRole, setInviteRole] = useState<Role>('Editor')
  const [inviting, setInviting] = useState(false)
  const [inviteSuccess, setInviteSuccess] = useState(false)
  const [removeId, setRemoveId] = useState<number | null>(null)
  const [removing, setRemoving] = useState(false)

  const handleInvite = () => {
    if (!inviteEmail) return
    setInviting(true)
    setTimeout(() => {
      setInviting(false)
      setInviteSuccess(true)
      setInviteEmail('')
      setTimeout(() => {
        setInviteSuccess(false)
        setInviteOpen(false)
      }, 1500)
    }, 1200)
  }

  const handleRemove = () => {
    if (!removeId) return
    setRemoving(true)
    setTimeout(() => {
      setMembers((prev) => prev.filter((m) => m.id !== removeId))
      setRemoving(false)
      setRemoveId(null)
    }, 900)
  }

  const membersContent = (
    <Card variant="bordered">
      <Card.Body>
        <div className="flex flex-col divide-y divide-vui-border">
          {members.map((member) => (
            <div key={member.id} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
              <Avatar name={member.name} size="md" status={member.status} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-vui-text">{member.name}</p>
                <p className="text-xs text-vui-text-muted truncate">{member.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`hidden text-xs sm:block ${statusColor[member.status]}`}>
                  {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                </span>
                <Badge variant={roleBadgeVariant[member.role]} size="sm">
                  {member.role}
                </Badge>
                {member.role !== 'Owner' && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setRemoveId(member.id)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  )

  const activityContent = (
    <Card variant="bordered">
      <Card.Body>
        <div className="flex flex-col gap-4">
          {activity.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <Avatar name={item.name} size="sm" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-vui-text">
                  <span className="font-medium">{item.name}</span>
                  {' '}{item.action}
                </p>
                <p className="text-xs text-vui-text-muted">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  )

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-start justify-between">
        <div>
          <Title as="h1" size="xl">Team</Title>
          <p className="mt-2 text-vui-text-muted">
            A team management page built with Avatar, Badge, Dialog, Select, Tabs, Divider, and Button.
          </p>
        </div>
        <Button onClick={() => setInviteOpen(true)}>Invite member</Button>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-3">
        <Card variant="shadow" size="sm">
          <Card.Body>
            <p className="text-xs font-medium text-vui-text-muted">Total members</p>
            <p className="mt-1 text-2xl font-bold text-vui-text">{members.length}</p>
          </Card.Body>
        </Card>
        <Card variant="shadow" size="sm">
          <Card.Body>
            <p className="text-xs font-medium text-vui-text-muted">Online now</p>
            <p className="mt-1 text-2xl font-bold text-green-600">
              {members.filter((m) => m.status === 'online').length}
            </p>
          </Card.Body>
        </Card>
        <Card variant="shadow" size="sm">
          <Card.Body>
            <p className="text-xs font-medium text-vui-text-muted">Admins</p>
            <p className="mt-1 text-2xl font-bold text-vui-text">
              {members.filter((m) => m.role === 'Admin' || m.role === 'Owner').length}
            </p>
          </Card.Body>
        </Card>
      </div>

      <Tabs
        defaultValue="members"
        items={[
          { value: 'members', label: `Members (${members.length})`, children: membersContent },
          { value: 'activity', label: 'Activity', children: activityContent },
        ]}
      />

      <Dialog
        open={inviteOpen}
        onClose={() => { setInviteOpen(false); setInviteSuccess(false) }}
        title="Invite team member"
        description="Send an invitation to add someone to your team."
        size="sm"
      >
        <Dialog.Body>
          {inviteSuccess ? (
            <Alert variant="success">Invitation sent to {inviteEmail || 'the address'}!</Alert>
          ) : (
            <div className="flex flex-col gap-4">
              <Input
                label="Email address"
                type="email"
                placeholder="colleague@example.com"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                fullWidth
              />
              <Select
                label="Role"
                fullWidth
                value={inviteRole}
                onChange={(e) => setInviteRole(e.target.value as Role)}
              >
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </Select>
              <Divider />
              <p className="text-xs text-vui-text-muted">
                <strong>Admin</strong> — full access except billing.{' '}
                <strong>Editor</strong> — can create and edit content.{' '}
                <strong>Viewer</strong> — read-only access.
              </p>
            </div>
          )}
        </Dialog.Body>
        {!inviteSuccess && (
          <Dialog.Footer>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setInviteOpen(false)}>Cancel</Button>
              <Button loading={inviting} onClick={handleInvite} disabled={!inviteEmail}>
                {inviting ? 'Sending...' : 'Send invite'}
              </Button>
            </div>
          </Dialog.Footer>
        )}
      </Dialog>

      <Dialog
        open={removeId !== null}
        onClose={() => setRemoveId(null)}
        title="Remove member"
        description={`Are you sure you want to remove ${members.find((m) => m.id === removeId)?.name ?? 'this member'} from the team? They will lose access immediately.`}
        size="sm"
      >
        <Dialog.Footer>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setRemoveId(null)}>Cancel</Button>
            <Button variant="danger" loading={removing} onClick={handleRemove}>
              {removing ? 'Removing...' : 'Remove'}
            </Button>
          </div>
        </Dialog.Footer>
      </Dialog>
    </div>
  )
}
