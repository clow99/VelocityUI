import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Avatar, Button, Checkbox, Input, RadioGroup, Select } from "../src";

describe("composable component patterns", () => {
  it("recovers from a failed avatar when a different image is supplied", () => {
    const { rerender, container } = render(
      <Avatar name="Maya Chen" status="busy" src="/missing.png" />,
    );
    expect(
      screen.getByRole("img", { name: "Maya Chen, busy" }),
    ).toBeInTheDocument();
    fireEvent.error(container.querySelector("img")!);
    expect(screen.getByText("MC")).toBeInTheDocument();
    rerender(<Avatar name="Maya Chen" status="online" src="/new.png" />);
    expect(container.querySelector("img")).toHaveAttribute("src", "/new.png");
    expect(screen.queryByText("MC")).not.toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Maya Chen, online" }),
    ).toBeInTheDocument();
  });

  it("keeps overflow members discoverable without rendering all the avatars", () => {
    render(
      <Avatar.Group max={2} aria-label="Contributors">
        <Avatar name="Maya Chen" />
        <Avatar name="Alex Morgan" />
        <Avatar name="Sam Rivera" />
        <Avatar name="Jamie Parker" />
      </Avatar.Group>,
    );
    expect(
      screen.getByRole("group", { name: "Contributors" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(3);
    expect(
      screen.getByRole("img", {
        name: "2 more members: Sam Rivera, Jamie Parker",
      }),
    ).toHaveTextContent("+2");
  });

  it("selects radio cards from their descriptions, supports keyboard movement, and preserves form values", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <form>
        <RadioGroup
          name="plan"
          label="Workspace plan"
          variant="cards"
          defaultValue="personal"
          options={[
            {
              value: "personal",
              label: "Personal",
              description: "For side projects",
            },
            {
              value: "team",
              label: "Team",
              description: "Build with your team",
              meta: "$12 per month",
            },
            {
              value: "studio",
              label: "Studio",
              description: "For growing practices",
            },
          ]}
        />
      </form>,
    );
    await user.click(screen.getByText("Build with your team"));
    const team = screen.getByRole("radio", { name: "Team", exact: true });
    expect(team).toBeChecked();
    expect(team).toHaveAccessibleDescription("Build with your team");
    expect(new FormData(container.querySelector("form")!).get("plan")).toBe(
      "team",
    );
    await user.keyboard("{ArrowDown}");
    expect(
      screen.getByRole("radio", { name: "Studio", exact: true }),
    ).toBeChecked();
  });

  it("keeps input add-ons out of submitted values while announcing their context", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <form>
        <span id="custom-hint">Public address</span>
        <Input
          name="slug"
          label="Website"
          leadingAddon="https://"
          trailingAddon=".design"
          hint="Choose your name"
          aria-describedby="custom-hint"
          defaultValue="monday"
        />
      </form>,
    );
    const input = screen.getByRole("textbox", { name: "Website" });
    expect(input).toHaveAccessibleDescription(
      "Public address Choose your name https:// .design",
    );
    await user.click(input);
    await user.type(input, "-studio");
    expect(new FormData(container.querySelector("form")!).get("slug")).toBe(
      "monday-studio",
    );
  });

  it("keeps icon-only loading buttons named, disabled, and limited to one visible indicator", () => {
    const click = vi.fn();
    const { container } = render(
      <Button iconOnly loading aria-label="Save draft" onClick={click}>
        <svg data-testid="save-icon" />
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Save draft" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(container.querySelector("svg")).toBeNull();
    fireEvent.click(button);
    expect(click).not.toHaveBeenCalled();
  });

  it("selects rich options using their stable labels and submits their values", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <form>
        <Select
          name="owner"
          label="Owner"
          options={[
            {
              value: "maya",
              label: "Maya Chen",
              description: "Product designer",
              icon: <Avatar name="Maya Chen" size="xs" />,
            },
            {
              value: "alex",
              label: "Alex Morgan",
              description: "Frontend engineer",
            },
          ]}
        />
      </form>,
    );
    await user.click(screen.getByRole("combobox", { name: "Owner" }));
    const option = screen.getByRole("option", {
      name: "Alex Morgan",
      exact: true,
    });
    expect(option).toHaveAccessibleDescription("Frontend engineer");
    await user.click(option);
    expect(new FormData(container.querySelector("form")!).get("owner")).toBe(
      "alex",
    );
    expect(screen.getByRole("combobox", { name: "Owner" })).toHaveFocus();
  });

  it("toggles checkbox cards from their descriptions and respects disabled cards", async () => {
    const user = userEvent.setup();
    render(
      <>
        <Checkbox
          variant="card"
          label="Keyboard support"
          description="Every interaction is reachable"
        />
        <Checkbox
          variant="card"
          label="Locked"
          description="Requires access"
          disabled
        />
      </>,
    );
    await user.click(screen.getByText("Every interaction is reachable"));
    expect(
      screen.getByRole("checkbox", { name: "Keyboard support", exact: true }),
    ).toBeChecked();
    await user.keyboard(" ");
    expect(
      screen.getByRole("checkbox", { name: "Keyboard support", exact: true }),
    ).not.toBeChecked();
    await user.click(screen.getByText("Requires access"));
    expect(
      screen.getByRole("checkbox", { name: "Locked", exact: true }),
    ).not.toBeChecked();
  });
});
