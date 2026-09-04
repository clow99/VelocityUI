"use client";
import { useState } from "react";
import { Checkbox, Badge, Progress } from "@velocityuikit/velocityui";
import { Icon } from "@/components/Icon";

const steps = [
  {
    key: "foundation",
    label: "Set the foundation",
    description: "Colors, type, and spacing feel like your product.",
  },
  {
    key: "components",
    label: "Make the components yours",
    description: "The small details work beautifully together.",
  },
  {
    key: "keyboard",
    label: "Leave no one behind",
    description: "Every interaction works with a keyboard.",
  },
  {
    key: "launch",
    label: "Share it with the world",
    description: "Your next great idea is ready to meet people.",
  },
];
export function CheckboxPreview() {
  const [checked, setChecked] = useState(["foundation", "components"]);
  return (
    <div className="component-studies">
      <section className="study-panel">
        <div className="study-heading">
          <div>
            <span className="study-kicker">ONE GOOD STEP AT A TIME</span>
            <h3>A launch worth checking off.</h3>
          </div>
          <span className="study-symbol">
            <Icon name="check" />
          </span>
        </div>
        <div className="study-progress">
          <span role="status">{checked.length} of 4 complete</span>
          <Badge
            appearance="soft"
            variant={checked.length === 4 ? "success" : "primary"}
          >
            {Math.round((checked.length / 4) * 100)}%
          </Badge>
        </div>
        <Progress value={(checked.length / 4) * 100} />
        <div className="study-form study-spaced">
          {steps.map((step) => (
            <Checkbox
              key={step.key}
              variant="card"
              label={step.label}
              description={step.description}
              checked={checked.includes(step.key)}
              onChange={(event) =>
                setChecked((current) =>
                  event.target.checked
                    ? [...current, step.key]
                    : current.filter((item) => item !== step.key),
                )
              }
            />
          ))}
        </div>
      </section>
      <section className="study-panel">
        <h3>A lighter touch.</h3>
        <div className="study-form study-spaced">
          <Checkbox
            label="Keep me in the loop"
            description="Occasional updates from your team."
            defaultChecked
          />
          <div className="study-row">
            <Checkbox size="sm" label="Small" defaultChecked />
            <Checkbox size="md" label="Medium" defaultChecked />
            <Checkbox size="lg" label="Large" defaultChecked />
          </div>
        </div>
      </section>
    </div>
  );
}
