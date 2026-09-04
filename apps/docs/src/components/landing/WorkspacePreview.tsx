"use client";

import { useRef, useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  ChatInput,
  Tabs,
} from "@velocityuikit/velocityui";
import { Icon } from "@/components/Icon";

const initialTasks = [
  {
    id: 1,
    title: "Build something worth sharing",
    detail: "Your next project",
    done: false,
  },
  {
    id: 2,
    title: "Make the details feel right",
    detail: "Design system",
    done: false,
  },
  {
    id: 3,
    title: "Start with a good foundation",
    detail: "46 components, ready to use",
    done: true,
  },
];

export function WorkspacePreview() {
  const [tasks, setTasks] = useState(initialTasks);
  const [draft, setDraft] = useState("");
  const [filter, setFilter] = useState("all");
  const [message, setMessage] = useState("");
  const nextId = useRef(4);
  const composer = useRef<HTMLTextAreaElement>(null);
  const completed = tasks.filter((task) => task.done).length;

  function taskList(doneOnly: boolean) {
    return (
      <div className="workspace-tasks">
        {tasks
          .filter((task) => !doneOnly || task.done)
          .map((task) => (
            <div className="workspace-task" key={task.id}>
              <button
                type="button"
                className="task-check"
                aria-label={"Complete " + task.title}
                aria-pressed={task.done}
                onClick={() =>
                  setTasks((list) =>
                    list.map((item) =>
                      item.id === task.id
                        ? { ...item, done: !item.done }
                        : item,
                    ),
                  )
                }
              >
                <Icon name="check" size={13} />
              </button>
              <div>
                <strong>{task.title}</strong>
                <span>{task.detail}</span>
              </div>
              <Badge size="sm" variant={task.done ? "success" : "default"}>
                {task.done ? "Done" : "To do"}
              </Badge>
            </div>
          ))}
        {doneOnly && completed === 0 && (
          <p className="workspace-empty">Complete a task to see it here.</p>
        )}
      </div>
    );
  }

  return (
    <div className="workspace-hero">
      <div className="preview-caption">
        <span>
          <span className="status-dot" /> A little room to focus.
        </span>
        <span>Live components</span>
      </div>
      <div className="workspace-sample">
        <div className="workspace-sample-header">
          <span className="workspace-app-icon">
            <Icon name="layers" size={19} />
          </span>
          <div>
            <strong>Your next release</strong>
            <span>A fresh start, already taking shape.</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            aria-label="Add a task"
            onClick={() => composer.current?.focus()}
          >
            <Icon name="plus" size={18} />
          </Button>
        </div>
        <div className="workspace-sample-body">
          <div className="workspace-sample-heading">
            <h2>Good things, in progress.</h2>
            <span>
              {completed}/{tasks.length} complete
            </span>
          </div>
          <Tabs
            variant="pills"
            value={filter}
            onChange={setFilter}
            items={[
              { value: "all", label: "All tasks", children: taskList(false) },
              { value: "done", label: "Completed", children: taskList(true) },
            ]}
          />
          <div className="workspace-composer">
            <ChatInput
              ref={composer}
              aria-label="New task"
              placeholder="What would you like to build?"
              value={draft}
              onChange={setDraft}
              onSend={(title) => {
                setTasks((list) => [
                  ...list,
                  {
                    id: nextId.current++,
                    title,
                    detail: "Just added",
                    done: false,
                  },
                ]);
                setDraft("");
                setFilter("all");
                setMessage("Task added to this preview.");
              }}
            />
            <div className="workspace-composer-caption">
              <span>
                <Icon name="code" size={12} /> Built with VelocityUI
              </span>
              <span>Enter to add</span>
            </div>
          </div>
        </div>
        <div className="workspace-sample-footer">
          <Avatar.Group size="xs">
            <Avatar name="Cameron Low" tone="violet" />
            <Avatar name="Jamie Lee" tone="emerald" />
            <Avatar name="Alex Yang" tone="blue" />
          </Avatar.Group>
          <span>Small pieces. Better together.</span>
          <Icon name="shield" size={16} />
        </div>
      </div>
      <p className="workspace-hero-note" role="status">
        {message || "Try the tabs. Complete a task. Add your own."}
      </p>
    </div>
  );
}
