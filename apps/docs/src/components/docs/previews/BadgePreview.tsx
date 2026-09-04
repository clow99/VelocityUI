"use client";
import { useState } from "react";
import { Badge, Button } from "@velocityuikit/velocityui";
import { Icon } from "@/components/Icon";

export function BadgePreview() {
  const [appearance, setAppearance] = useState<"soft" | "outline" | "solid">(
    "soft",
  );
  const [ready, setReady] = useState(false);
  return (
    <div className="component-studies">
      <section className="study-panel">
        <div className="study-heading">
          <div>
            <span className="study-kicker">A SIGNAL, AT A GLANCE</span>
            <h3>The state of things.</h3>
          </div>
          <span className="study-symbol">
            <Icon name="bolt" />
          </span>
        </div>
        <div
          className="study-segmented"
          role="group"
          aria-label="Badge appearance"
        >
          {(["soft", "outline", "solid"] as const).map((value) => (
            <button
              type="button"
              key={value}
              aria-pressed={appearance === value}
              onClick={() => setAppearance(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="study-pipeline">
          {[
            {
              name: "Production",
              detail: "velocityui.dev",
              variant: "success",
              state: "Healthy",
              icon: "check",
            },
            {
              name: "Preview",
              detail: "feature / new-components",
              variant: ready ? "success" : "info",
              state: ready ? "Ready" : "Building",
              icon: ready ? "check" : "code",
            },
            {
              name: "Design review",
              detail: "3 updates to look over",
              variant: ready ? "success" : "warning",
              state: ready ? "Approved" : "Needs review",
              icon: ready ? "check" : "layers",
            },
          ].map((item) => (
            <div className="study-pipeline-row" key={item.name}>
              <span className="study-symbol">
                <Icon
                  name={item.icon as "check" | "code" | "layers"}
                  size={16}
                />
              </span>
              <div>
                <strong>{item.name}</strong>
                <span>{item.detail}</span>
              </div>
              <Badge
                appearance={appearance}
                variant={item.variant as "success" | "info" | "warning"}
                dot
              >
                {item.state}
              </Badge>
            </div>
          ))}
        </div>
        <div className="study-footer">
          <span role="status">
            {ready
              ? "All checks complete."
              : "One place to see what needs you."}
          </span>
          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={() => setReady(!ready)}
          >
            {ready ? "Reset preview" : "Complete checks"}
          </Button>
        </div>
      </section>
      <section className="study-panel">
        <h3>Small details, useful context.</h3>
        <div className="study-row study-spaced">
          <Badge
            appearance={appearance}
            variant="primary"
            leftIcon={<Icon name="bolt" size={12} />}
          >
            Pro workspace
          </Badge>
          <Badge
            appearance={appearance}
            variant="success"
            leftIcon={<Icon name="shield" size={12} />}
          >
            Verified
          </Badge>
          <Badge appearance={appearance}>⌘ K</Badge>
          <Badge appearance={appearance} variant="danger" dot>
            Action needed
          </Badge>
          <Badge appearance={appearance} variant="info">
            v2.4.0
          </Badge>
        </div>
      </section>
    </div>
  );
}
