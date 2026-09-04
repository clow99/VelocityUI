"use client";
import { useState } from "react";
import { Input, Button, Badge } from "@velocityuikit/velocityui";
import { Icon } from "@/components/Icon";

export function InputPreview() {
  const [saved, setSaved] = useState(false);
  const [email, setEmail] = useState("maya@example.com");
  const [error, setError] = useState("");
  return (
    <div className="component-studies">
      <form
        className="study-panel"
        noValidate
        onChange={() => setSaved(false)}
        onSubmit={(event) => {
          event.preventDefault();
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Enter a complete email address.");
            setSaved(false);
          } else {
            setError("");
            setSaved(true);
          }
        }}
      >
        <div className="study-heading">
          <div>
            <span className="study-kicker">SET THE SCENE</span>
            <h3>A home for your next idea.</h3>
          </div>
          <span className="study-symbol">
            <Icon name="layers" />
          </span>
        </div>
        <div className="study-form study-spaced">
          <Input
            name="project"
            label="Project name"
            defaultValue="Monday Studio"
            leftIcon={<Icon name="layers" size={16} />}
          />
          <Input
            name="website"
            label="Project address"
            leadingAddon="https://"
            trailingAddon=".design"
            defaultValue="monday-studio"
            hint="Your own little corner of the internet."
          />
          <div className="study-field-grid">
            <Input
              name="budget"
              label="Monthly budget"
              leadingAddon="$"
              trailingAddon="USD"
              inputMode="decimal"
              defaultValue="240"
            />
            <Input
              name="contact"
              label="Contact email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (error) setError("");
              }}
              error={error}
            />
          </div>
        </div>
        <div className="study-footer">
          <span role="status">
            {saved
              ? "Project saved in this preview."
              : "You can change these details later."}
          </span>
          <Button
            type="submit"
            size="sm"
            leftIcon={<Icon name={saved ? "check" : "plus"} size={15} />}
          >
            {saved ? "Saved" : "Save project"}
          </Button>
        </div>
      </form>
      <section className="study-panel">
        <div className="study-heading">
          <h3>Thoughtful in every state.</h3>
          <Badge appearance="soft">Included</Badge>
        </div>
        <div className="study-form study-spaced">
          <Input
            label="Search components"
            search
            placeholder="Find your next building block…"
          />
          <Input
            label="Workspace name"
            floatingLabel
            defaultValue="Monday Studio"
            hint="Floating labels stay visible while you type."
          />
          <Input
            label="Workspace ID"
            value="workspace_monday_01"
            readOnly
            trailingAddon={<Icon name="shield" size={15} />}
            hint="A read-only identifier, ready to select and copy."
          />
        </div>
      </section>
    </div>
  );
}
