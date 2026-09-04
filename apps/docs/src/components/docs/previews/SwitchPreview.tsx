"use client";
import { useState } from "react";
import { Switch, Badge } from "@velocityuikit/velocityui";
import { Icon } from "@/components/Icon";

const preferences = [
  {
    key: "updates",
    title: "Product updates",
    detail: "The occasional note about what is new.",
    icon: "bolt",
  },
  {
    key: "comments",
    title: "Comments & mentions",
    detail: "Stay close to the conversations that matter.",
    icon: "chat",
  },
  {
    key: "digest",
    title: "A weekly little recap",
    detail: "Your workspace highlights, all in one place.",
    icon: "book",
  },
] as const;
export function SwitchPreview() {
  const [enabled, setEnabled] = useState<string[]>(["updates", "comments"]);
  return (
    <div className="component-studies">
      <section className="study-panel">
        <div className="study-heading">
          <div>
            <span className="study-kicker">ON YOUR TERMS</span>
            <h3>A little less noise.</h3>
          </div>
          <Badge appearance="soft" variant="success" dot>
            Preferences
          </Badge>
        </div>
        <p className="study-description">
          Choose what reaches you. Leave the rest behind.
        </p>
        <div className="study-settings">
          {preferences.map((item) => (
            <div key={item.key} className="study-setting">
              <span className="study-symbol">
                <Icon name={item.icon} size={18} />
              </span>
              <div>
                <label htmlFor={`preference-${item.key}`}>{item.title}</label>
                <p>{item.detail}</p>
              </div>
              <Switch
                id={`preference-${item.key}`}
                aria-label={item.title}
                checked={enabled.includes(item.key)}
                onChange={(event) =>
                  setEnabled((current) =>
                    event.target.checked
                      ? [...current, item.key]
                      : current.filter((key) => key !== item.key),
                  )
                }
              />
            </div>
          ))}
        </div>
        <div className="study-footer">
          <span>
            <Icon name="shield" size={14} /> You are always in control.
          </span>
          <span role="status">{enabled.length} of 3 enabled</span>
        </div>
      </section>
      <section className="study-panel">
        <h3>The right fit.</h3>
        <div className="study-row study-spaced">
          <Switch size="sm" label="Small" defaultChecked />
          <Switch size="md" label="Medium" defaultChecked />
          <Switch size="lg" label="Large" defaultChecked />
        </div>
      </section>
    </div>
  );
}
