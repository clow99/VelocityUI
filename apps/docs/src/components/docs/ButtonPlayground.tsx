"use client";
import { useState } from "react";
import {
  Button,
  type ButtonVariant,
  type ButtonSize,
} from "@velocityuikit/velocityui";
import { CopyButton } from "@/components/CopyButton";
import { Icon } from "@/components/Icon";

export function ButtonPlayground() {
  const [variant, setVariant] = useState<ButtonVariant>("primary");
  const [size, setSize] = useState<ButtonSize>("md");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [saved, setSaved] = useState(false);
  const [pinned, setPinned] = useState(false);
  const code = `<Button variant="${variant}" size="${size}"${disabled ? " disabled" : ""}${loading ? " loading" : ""}>\n  Continue\n</Button>`;
  return (
    <div className="component-studies">
      <div className="button-recipes">
        <section className="button-recipe">
          <span>Action, with a little feedback.</span>
          <div>
            <Button
              type="button"
              leftIcon={<Icon name={saved ? "check" : "plus"} size={16} />}
              onClick={() => setSaved(true)}
            >
              {saved ? "Draft saved" : "Save draft"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setSaved(false)}
            >
              Reset
            </Button>
          </div>
        </section>
        <section className="button-recipe">
          <span>Quieter, until you need them.</span>
          <div>
            <Button
              type="button"
              variant="soft"
              leftIcon={<Icon name="layers" size={16} />}
              onClick={() => setPinned(!pinned)}
            >
              {pinned ? "In your collection" : "Add to collection"}
            </Button>
            <Button
              type="button"
              variant="outline"
              iconOnly
              aria-label="Pin component"
              aria-pressed={pinned}
              onClick={() => setPinned(!pinned)}
            >
              <Icon name={pinned ? "check" : "plus"} size={18} />
            </Button>
          </div>
        </section>
      </div>
      <div className="button-playground">
        <div className="playground-controls">
          <label>
            Variant
            <select
              aria-label="Variant"
              value={variant}
              onChange={(event) =>
                setVariant(event.target.value as ButtonVariant)
              }
            >
              {[
                "primary",
                "secondary",
                "outline",
                "ghost",
                "danger",
                "soft",
              ].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label>
            Size
            <select
              aria-label="Size"
              value={size}
              onChange={(event) => setSize(event.target.value as ButtonSize)}
            >
              {["sm", "md", "lg"].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label className="playground-check">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(event) => setDisabled(event.target.checked)}
            />
            Disabled
          </label>
          <label className="playground-check">
            <input
              type="checkbox"
              checked={loading}
              onChange={(event) => setLoading(event.target.checked)}
            />
            Loading
          </label>
          <button
            className="playground-reset"
            type="button"
            onClick={() => {
              setVariant("primary");
              setSize("md");
              setDisabled(false);
              setLoading(false);
              setClicks(0);
            }}
          >
            Reset
          </button>
        </div>
        <div className="playground-stage">
          <Button
            variant={variant}
            size={size}
            disabled={disabled}
            loading={loading}
            onClick={() => setClicks((count) => count + 1)}
          >
            Continue
          </Button>
          <span role="status">
            {clicks
              ? `Clicked ${clicks} time${clicks === 1 ? "" : "s"}`
              : "Try it. This is the real component."}
          </span>
        </div>
        <div className="code-panel">
          <div className="code-toolbar">
            <span>
              <Icon name="code" size={15} />
              Your configuration
            </span>
            <CopyButton text={code} label="Copy button configuration" />
          </div>
          <pre tabIndex={0} aria-label="Button configuration">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
