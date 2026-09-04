"use client";
import { useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Input,
  type AvatarTone,
  type AvatarStatus,
} from "@velocityuikit/velocityui";
import { Icon } from "@/components/Icon";

const people = [
  {
    name: "Maya Chen",
    role: "Product designer",
    tone: "violet",
    status: "online",
  },
  {
    name: "Alex Morgan",
    role: "Frontend engineer",
    tone: "blue",
    status: "busy",
  },
  {
    name: "Sam Rivera",
    role: "Design engineer",
    tone: "emerald",
    status: "away",
  },
] as const;
const palette = [
  ["blue", "#4273df"],
  ["violet", "#9160d7"],
  ["rose", "#d45b85"],
  ["amber", "#bf842e"],
  ["emerald", "#299a7f"],
  ["neutral", "#727680"],
] as const;

export function AvatarPreview() {
  const [selected, setSelected] = useState(["Maya Chen"]);
  const [name, setName] = useState("Jamie Parker");
  const [tone, setTone] = useState<AvatarTone>("violet");
  const [status, setStatus] = useState<AvatarStatus>("online");
  return (
    <div className="component-studies">
      <div className="study-grid">
        <section
          className="study-panel team-study"
          aria-label="Team members preview"
        >
          <div className="study-heading">
            <div>
              <span className="study-kicker">THE PEOPLE BEHIND IT</span>
              <h3>A little more human.</h3>
            </div>
            <span className="study-symbol">
              <Icon name="layers" />
            </span>
          </div>
          <p className="study-description">
            Give every collaborator a recognizable place in your product.
          </p>
          <div className="study-member-list">
            {people.map((person) => (
              <div className="study-member" key={person.name}>
                <Avatar
                  name={person.name}
                  tone={person.tone}
                  status={person.status}
                  size="lg"
                />
                <div>
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  iconOnly
                  aria-label={`Assign ${person.name}`}
                  aria-pressed={selected.includes(person.name)}
                  onClick={() =>
                    setSelected((current) =>
                      current.includes(person.name)
                        ? current.filter((item) => item !== person.name)
                        : [...current, person.name],
                    )
                  }
                >
                  <Icon
                    name={selected.includes(person.name) ? "check" : "plus"}
                    size={16}
                  />
                </Button>
              </div>
            ))}
          </div>
          <div className="study-footer">
            <Avatar.Group max={3} size="sm">
              {[
                ...people.map((person) => person.name),
                "Jordan Lee",
                "Taylor Kim",
                "Chris Park",
              ].map((member) => (
                <Avatar name={member} key={member} />
              ))}
            </Avatar.Group>
            <span role="status">
              {selected.length} assigned to this project
            </span>
          </div>
        </section>
        <section className="study-panel" aria-label="Avatar customization">
          <div className="avatar-identity">
            <Avatar
              name={name || "Guest"}
              tone={tone}
              status={status}
              size="xl"
              ring
            />
            <strong>{name || "Guest"}</strong>
            <Badge
              appearance="soft"
              variant={
                status === "online"
                  ? "success"
                  : status === "busy"
                    ? "danger"
                    : "default"
              }
              dot
            >
              {status === "online"
                ? "Available for a good idea"
                : status === "busy"
                  ? "Heads down, making things"
                  : status === "away"
                    ? "Back in a little while"
                    : "Offline for now"}
            </Badge>
          </div>
          <div className="study-form">
            <Input
              label="Display name"
              value={name}
              maxLength={40}
              onChange={(event) => setName(event.target.value)}
              size="sm"
            />
            <div
              className="study-palette"
              role="group"
              aria-label="Avatar color"
            >
              {palette.map(([value, color]) => (
                <button
                  key={value}
                  type="button"
                  style={{ background: color }}
                  aria-label={`${value} avatar color`}
                  aria-pressed={tone === value}
                  onClick={() => setTone(value)}
                >
                  {tone === value && <Icon name="check" size={14} />}
                </button>
              ))}
            </div>
            <label className="study-select-label">
              Presence
              <select
                aria-label="Presence"
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value as AvatarStatus)
                }
              >
                {["online", "away", "busy", "offline"].map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            </label>
          </div>
        </section>
      </div>
      <section
        className="study-panel study-scale"
        aria-label="Avatar sizes and shapes"
      >
        <div>
          <h3>One identity. Every scale.</h3>
          <p className="study-description">
            From a quiet mention to the face of a profile.
          </p>
        </div>
        <div className="study-size-row">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
            <div key={size}>
              <Avatar name="Maya Chen" size={size} tone="violet" />
              <span>{size}</span>
            </div>
          ))}
          <div>
            <Avatar
              name="Velocity Studio"
              shape="square"
              size="lg"
              tone="blue"
            />
            <span>square</span>
          </div>
        </div>
      </section>
    </div>
  );
}
