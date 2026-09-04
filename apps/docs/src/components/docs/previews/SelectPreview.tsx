"use client";
import { useState } from "react";
import { Select, Avatar, Badge, Button } from "@velocityuikit/velocityui";
import { Icon } from "@/components/Icon";

const owners = [
  {
    value: "maya",
    label: "Maya Chen",
    description: "Product designer",
    icon: <Avatar name="Maya Chen" tone="violet" size="xs" />,
  },
  {
    value: "alex",
    label: "Alex Morgan",
    description: "Frontend engineer",
    icon: <Avatar name="Alex Morgan" tone="blue" size="xs" />,
  },
  {
    value: "sam",
    label: "Sam Rivera",
    description: "Design engineer",
    icon: <Avatar name="Sam Rivera" tone="emerald" size="xs" />,
  },
];
export function SelectPreview() {
  const [owner, setOwner] = useState("maya");
  const [priority, setPriority] = useState("normal");
  const [saved, setSaved] = useState(false);
  return (
    <div className="component-studies">
      <section className="study-panel">
        <div className="study-heading">
          <div>
            <span className="study-kicker">MAKE THE CONNECTION</span>
            <h3>The right person. The right context.</h3>
          </div>
          <span className="study-symbol">
            <Icon name="layers" />
          </span>
        </div>
        <p className="study-description">
          Bring identities and useful detail into everyday choices.
        </p>
        <div className="study-form study-spaced">
          <Select
            label="Project owner"
            options={owners}
            value={owner}
            onChange={(event) => {
              setOwner(event.target.value);
              setSaved(false);
            }}
            hint="Open the menu to see roles alongside each person."
          />
          <Select
            label="Priority"
            value={priority}
            onChange={(event) => {
              setPriority(event.target.value);
              setSaved(false);
            }}
            options={[
              {
                value: "normal",
                label: "Normal",
                description: "Keep a steady pace.",
                icon: <Icon name="layers" size={16} />,
              },
              {
                value: "high",
                label: "High",
                description: "Bring this closer to the top.",
                icon: <Icon name="bolt" size={16} />,
              },
              {
                value: "urgent",
                label: "Urgent",
                description: "Needs attention today.",
                icon: <Icon name="shield" size={16} />,
              },
            ]}
          />
          <Select
            label="Workspace"
            defaultValue="design"
            options={[
              {
                value: "design",
                label: "Design studio",
                description: "Your current workspace",
                icon: <Icon name="palette" size={16} />,
              },
              {
                value: "engineering",
                label: "Engineering",
                description: "Build and ship together",
                icon: <Icon name="code" size={16} />,
              },
              {
                value: "archive",
                label: "Archive",
                description: "Read-only workspace",
                disabled: true,
              },
            ]}
          />
        </div>
        <div className="study-footer">
          <span role="status">
            {saved
              ? `Assigned to ${owners.find((person) => person.value === owner)?.label}.`
              : "Every choice includes a little more context."}
          </span>
          <Button
            size="sm"
            type="button"
            onClick={() => setSaved(true)}
            rightIcon={<Icon name={saved ? "check" : "arrow"} size={14} />}
          >
            {saved ? "Assigned" : "Assign project"}
          </Button>
        </div>
      </section>
      <section className="study-panel">
        <div className="study-heading">
          <h3>Simple, when simple is right.</h3>
          <Badge appearance="soft">Native form values</Badge>
        </div>
        <Select
          label="Region"
          placeholder="Choose a region"
          options={[
            { value: "ca", label: "Canada" },
            { value: "us", label: "United States" },
            { value: "gb", label: "United Kingdom" },
          ]}
        />
      </section>
    </div>
  );
}
