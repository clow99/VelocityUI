"use client";
import { useState } from "react";
import { RadioGroup, Badge } from "@velocityuikit/velocityui";
import { Icon } from "@/components/Icon";

export function RadioGroupPreview() {
  const [plan, setPlan] = useState("team");
  return (
    <div className="component-studies">
      <section className="study-panel">
        <div className="study-heading">
          <div>
            <span className="study-kicker">ROOM TO GROW</span>
            <h3>Find your starting point.</h3>
          </div>
          <span className="study-symbol">
            <Icon name="bolt" />
          </span>
        </div>
        <p className="study-description">
          A choice should feel clear before you make it.
        </p>
        <RadioGroup
          name="plan-preview"
          label="Choose your workspace"
          variant="cards"
          value={plan}
          onChange={setPlan}
          options={[
            {
              value: "personal",
              label: "Personal",
              description: "A home for your side projects.",
              icon: <Icon name="code" />,
              meta: (
                <>
                  Free <span className="study-muted">/ forever</span>
                </>
              ),
            },
            {
              value: "team",
              label: "Team",
              description: "Build together, from first draft to launch.",
              icon: <Icon name="layers" />,
              meta: (
                <>
                  $12 <span className="study-muted">/ person, monthly</span>
                </>
              ),
            },
            {
              value: "studio",
              label: "Studio",
              description: "More space for your growing practice.",
              icon: <Icon name="grid" />,
              meta: (
                <>
                  $29 <span className="study-muted">/ person, monthly</span>
                </>
              ),
            },
          ]}
        />
        <div className="study-footer">
          <span role="status">
            {plan === "personal"
              ? "Your own space to experiment."
              : plan === "team"
                ? "A shared workspace for good ideas."
                : "Your whole practice, connected."}
          </span>
          <Badge appearance="soft" variant="primary">
            {plan}
          </Badge>
        </div>
      </section>
      <section className="study-panel">
        <RadioGroup
          name="delivery-preview"
          label="Delivery preference"
          orientation="horizontal"
          defaultValue="weekly"
          options={[
            { value: "daily", label: "Daily digest" },
            { value: "weekly", label: "Weekly summary" },
            { value: "never", label: "No email" },
          ]}
        />
      </section>
    </div>
  );
}
